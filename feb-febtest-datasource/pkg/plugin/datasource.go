package plugin

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/backend/instancemgmt"
	"github.com/grafana/grafana-plugin-sdk-go/data"
	"github.com/lib/pq"
)

// Make sure Datasource implements required interfaces. This is important to do
// since otherwise we will only get a not implemented error response from plugin in
// runtime. In this example datasource instance implements backend.QueryDataHandler,
// backend.CheckHealthHandler interfaces. Plugin should not implement all these
// interfaces - only those which are required for a particular task.
var (
    _ backend.CheckHealthHandler    = (*Datasource)(nil)
    _ instancemgmt.InstanceDisposer = (*Datasource)(nil)
    _ backend.StreamHandler         = (*Datasource)(nil)
)

type Query struct {
    TableName    string `json:"tableName"`
    SQLQuery     string `json:"sqlQuery"`
    TickInterval int    `json:"tickInterval"`
}

// NewDatasource creates a new datasource instance.
func NewDatasource(settings backend.DataSourceInstanceSettings) (instancemgmt.Instance, error) {
    // Use settings to get connection details if needed
    connStr := "user=telemetryuser password=ball dbname=telemetrydb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        return nil, err
    }
    return &Datasource{db: db}, nil
}

// Datasource is an example datasource which can respond to data queries, reports
// its health and has streaming skills.
type Datasource struct{
	//im   instancemgmt.InstanceManager
    db   *sql.DB  // Add this line
}

//implementing method to intialize database connection
func (d *Datasource) initDB() error {
    // Replace with your database connection details
    db, err := sql.Open("your_database_driver", "your_connection_string")
    if err != nil {
        return err
    }
    d.db = db
    return nil
}

// Dispose here tells plugin SDK that plugin wants to clean up resources when a new instance
// created. As soon as datasource settings change detected by SDK old datasource instance will
// be disposed and a new one will be created using NewSampleDatasource factory function.
func (d *Datasource) Dispose() {
    if d.db != nil {
        d.db.Close()
    }
}

// QueryData handles multiple queries and returns multiple responses.
// req contains the queries []DataQuery (where each query contains RefID as a unique identifier).
// The QueryDataResponse contains a map of RefID to the response for each query, and each response
// contains Frames ([]*Frame).
func (d *Datasource) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	// create response struct
	response := backend.NewQueryDataResponse()

	// loop over queries and execute them individually.
	for _, q := range req.Queries {
		res := d.query(ctx, req.PluginContext, q)

		// save the response in a hashmap
		// based on with RefID as identifier
		response.Responses[q.RefID] = res
	}

	return response, nil
}

type queryModel struct{}

func (d *Datasource) query(_ context.Context, pCtx backend.PluginContext, query backend.DataQuery) backend.DataResponse {
	var response backend.DataResponse

	// Unmarshal the JSON into our queryModel.
	var qm queryModel

	err := json.Unmarshal(query.JSON, &qm)
	if err != nil {
		return backend.ErrDataResponse(backend.StatusBadRequest, fmt.Sprintf("json unmarshal: %v", err.Error()))
	}

	// create data frame response.
	// For an overview on data frames and how grafana handles them:
	// https://grafana.com/developers/plugin-tools/introduction/data-frames
	frame := data.NewFrame("response")

	// add fields.
	frame.Fields = append(frame.Fields,
		data.NewField("time", nil, []time.Time{query.TimeRange.From, query.TimeRange.To}),
		data.NewField("values", nil, []int64{10, 20}),
	)

	// add the frames to the response.
	response.Frames = append(response.Frames, frame)

	return response
}

// CheckHealth handles health checks sent from Grafana to the plugin.
// The main use case for these health checks is the test button on the
// datasource configuration page which allows users to verify that
// a datasource is working as expected.
func (d *Datasource) CheckHealth(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
    err := d.db.PingContext(ctx)
    if err != nil {
        return &backend.CheckHealthResult{
            Status:  backend.HealthStatusError,
            Message: fmt.Sprintf("failed to connect to database: %v", err),
        }, nil
    }

    return &backend.CheckHealthResult{
        Status:  backend.HealthStatusOk,
        Message: "Data source is working",
    }, nil
}




func (d *Datasource) SubscribeStream(context.Context, *backend.SubscribeStreamRequest) (*backend.SubscribeStreamResponse, error) {
    return &backend.SubscribeStreamResponse{
        Status: backend.SubscribeStreamStatusOK,
    }, nil
}

func (d *Datasource) PublishStream(context.Context, *backend.PublishStreamRequest) (*backend.PublishStreamResponse, error) {
    return &backend.PublishStreamResponse{
        Status: backend.PublishStreamStatusPermissionDenied,
    }, nil
}

func (d *Datasource) fetchDataFromDB() (float64, error) {
    var value float64
    err := d.db.QueryRow("SELECT timestamp, vehicle_speed FROM telemetry_data ORDER BY timestamp DESC LIMIT 50").Scan(&value)
    if err != nil {
        return 0, err
    }
    return value, nil
}

func (d *Datasource) RunStream(ctx context.Context, req *backend.RunStreamRequest, sender *backend.StreamSender) error {
    q := Query{}
    json.Unmarshal(req.Data, &q)

    ticker := time.NewTicker(time.Duration(q.TickInterval) * time.Millisecond)
    defer ticker.Stop()

    for {
        select {
        case <-ctx.Done():
            return ctx.Err()
        case <-ticker.C:
            // Query your PostgreSQL database
            rows, err := d.db.QueryContext(ctx, "SELECT time, value FROM your_table ORDER BY time DESC LIMIT 1")
            if err != nil {
                return err
            }
            defer rows.Close()

            var timestamp time.Time
            var value float64
            if rows.Next() {
                err = rows.Scan(&timestamp, &value)
                if err != nil {
                    return err
                }
            }

            // Send the data
            err = sender.SendFrame(data.NewFrame("response",
                data.NewField("time", nil, []time.Time{timestamp}),
                data.NewField("value", nil, []float64{value}),
            ), data.IncludeAll)
            if err != nil {
                return err
            }
        }
    }
}

	

