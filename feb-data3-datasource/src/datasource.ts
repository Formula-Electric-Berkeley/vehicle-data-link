import { DataSourceInstanceSettings, DataSourceApi, TestDataSourceResponse, DataQueryRequest, DataQueryResponse, createDataFrame, FieldType } from '@grafana/data';
//import { DataSourceWithBackend, getTemplateSrv } from '@grafana/runtime';

import { MyQuery, MyDataSourceOptions, DEFAULT_QUERY } from './types';
import defaults from 'lodash/defaults';


export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  async testDatasource(): Promise<TestDataSourceResponse> {
    try {
      // Implement a simple query to test the connection
      const response = await this.query({ targets: [{ queryText: 'SELECT 1' }] } as any);
      return { status: 'success', message: 'Database connection successful' };
    } catch (error) {
      return { status: 'error', message: 'Unable to connect to database' };
    }
  }
  resolution: number;

  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
      super(instanceSettings);
      this.resolution = instanceSettings.jsonData.resolution || 1000.0; // Default resolution
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range!.from.valueOf();
    const to = range!.to.valueOf();
    
    const data = await Promise.all(options.targets.map(async target => {
      const query = defaults(target, DEFAULT_QUERY);
      
      // Execute PostgreSQL query here
      // This is a placeholder; replace with actual database querying logic
      const result = await this.executeQuery(query.queryText, from, to);
      
      return createDataFrame({
        refId: query.refId,
        fields: [
          { name: 'time', type: FieldType.time, values: result.times },
          { name: 'value', type: FieldType.number, values: result.values },
        ],
      });
    }));
  
    return { data };
  }
  
  private async executeQuery(queryText: string, from: number, to: number): Promise<any> {
    // Implement PostgreSQL query execution here
    // Return the query results
  }
}
