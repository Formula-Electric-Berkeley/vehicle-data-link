import React, { ChangeEvent } from 'react';
import { InlineField, Input, SecretInput } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions, MySecureJsonData } from '../types';

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions, MySecureJsonData> {}

export function ConfigEditor(props: Props) {
  const { onOptionsChange, options } = props;
  const { jsonData, secureJsonFields, secureJsonData } = options;

  const onPathChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        path: event.target.value,
      },
    });
  };

  const onHostChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        host: event.target.value,
      },
    });
  };

  const onPortChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        port: event.target.value,
      },
    });
  };

  const onDatabaseChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        database: event.target.value,
      },
    });
  };

  const onUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        user: event.target.value,
      },
    });
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      secureJsonData: {
        ...secureJsonData,
        password: event.target.value,
      },
    });
  };

  const onAPIKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      secureJsonData: {
        apiKey: event.target.value,
      },
    });
  };

  const onResetAPIKey = () => {
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        apiKey: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        apiKey: '',
      },
    });
  };

  const onResetPassword = () => {
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        password: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        password: '',
      },
    });
  };

  return (
    <>
      <InlineField label="Path" labelWidth={14} interactive tooltip={'Json field returned to frontend'}>
        <Input
          id="config-editor-path"
          onChange={onPathChange}
          value={jsonData.path}
          placeholder="Enter the path, e.g. /api/v1"
          width={40}
        />
      </InlineField>

      <InlineField label="Host" labelWidth={14} interactive tooltip={'PostgreSQL host'}>
        <Input
          id="config-editor-host"
          onChange={onHostChange}
          value={jsonData.host}
          placeholder="localhost"
          width={40}
        />
      </InlineField>

      <InlineField label="Port" labelWidth={14} interactive tooltip={'PostgreSQL port'}>
        <Input
          id="config-editor-port"
          onChange={onPortChange}
          value={jsonData.port}
          placeholder="5432"
          width={40}
        />
      </InlineField>

      <InlineField label="Database" labelWidth={14} interactive tooltip={'Database name'}>
        <Input
          id="config-editor-database"
          onChange={onDatabaseChange}
          value={jsonData.database}
          placeholder="your_database"
          width={40}
        />
      </InlineField>

      <InlineField label="User" labelWidth={14} interactive tooltip={'Database user'}>
        <Input
          id="config-editor-user"
          onChange={onUserChange}
          value={jsonData.user}
          placeholder="postgres"
          width={40}
        />
      </InlineField>

      <InlineField label="Password" labelWidth={14} interactive tooltip={'Database password'}>
        <SecretInput
          id="config-editor-password"
          isConfigured={secureJsonFields.password}
          value={secureJsonData?.password}
          placeholder="Enter database password"
          width={40}
          onChange={onPasswordChange}
          onReset={onResetPassword} 
        />
      </InlineField>

      <InlineField label="API Key" labelWidth={14} interactive tooltip={'Secure json field (backend only)'}>
        <SecretInput
          required
          id="config-editor-api-key"
          isConfigured={secureJsonFields.apiKey}
          value={secureJsonData?.apiKey}
          placeholder="Enter your API key"
          width={40}
          onReset={onResetAPIKey}
          onChange={onAPIKeyChange}
        />
      </InlineField>
    </>
  );
}