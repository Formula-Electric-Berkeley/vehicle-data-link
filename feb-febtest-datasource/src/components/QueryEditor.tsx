import React, { ChangeEvent } from 'react';
import { InlineField, Input, TextArea, Stack } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const onTableNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, tableName: event.target.value });
  };

  const onSqlQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...query, sqlQuery: event.target.value });
  };

  const onTickIntervalChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, tickInterval: event.target.valueAsNumber });
  };

  const { tableName, sqlQuery, tickInterval } = query;

  return (
    <Stack direction="column" gap={2}>
      <InlineField label="Table Name" labelWidth={16} tooltip="Name of the PostgreSQL table to query">
        <Input onChange={onTableNameChange} onBlur={onRunQuery} value={tableName || ''} />
      </InlineField>
      <InlineField label="SQL Query" labelWidth={16} tooltip="Custom SQL query (optional)">
        <TextArea onChange={onSqlQueryChange} onBlur={onRunQuery} value={sqlQuery || ''} rows={4} />
      </InlineField>
      <InlineField label="Tick interval (ms)" labelWidth={16} tooltip="Server tick interval in milliseconds">
        <Input onChange={onTickIntervalChange} onBlur={onRunQuery} value={tickInterval || ''} type="number" />
      </InlineField>
    </Stack>
  );
}