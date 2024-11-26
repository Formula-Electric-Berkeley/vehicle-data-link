import React, { ChangeEvent } from 'react';
import { InlineField, Input, Stack } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, queryText: event.target.value });
  };

  const onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, constant: parseFloat(event.target.value) });
    // executes the query
    onRunQuery();
  };

  const onFrequencyChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, frequency: parseFloat(event.target.value) });
    onRunQuery(); // Trigger a new query after change
};

  const { queryText, constant, frequency } = query;

<InlineField label="Frequency" labelWidth={16}>
    <Input onChange={onFrequencyChange} value={frequency || ''} />
</InlineField>;

<InlineField label="SQL Query" labelWidth={16} grow>
  <Input
    id="query-editor-sql"
    onChange={onQueryTextChange}
    value={queryText || ''}
    placeholder="Enter SQL query"
    rows={4}
  />
</InlineField>

  return (
    <Stack gap={0}>
      <InlineField label="Constant">
        <Input
          id="query-editor-constant"
          onChange={onConstantChange}
          value={constant}
          width={8}
          type="number"
          step="0.1"
        />
      </InlineField>
      <InlineField label="Query Text" labelWidth={16} tooltip="Not used yet">
        <Input
          id="query-editor-query-text"
          onChange={onQueryTextChange}
          value={queryText || ''}
          required
          placeholder="Enter a query"
        />
      </InlineField>
    </Stack>
  );
}
