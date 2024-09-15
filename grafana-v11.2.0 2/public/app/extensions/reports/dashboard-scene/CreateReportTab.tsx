import { SceneComponentProps, SceneObjectBase } from '@grafana/scenes';
import { CreateReportTab as CreateReportTabBase } from 'app/extensions/reports/CreateReportTab';
import { shareDashboardType } from 'app/features/dashboard/components/ShareModal/utils';
import { SceneShareTabState } from 'app/features/dashboard-scene/sharing/types';
import { getDashboardSceneFor } from 'app/features/dashboard-scene/utils/utils';

export class CreateReportTab extends SceneObjectBase<SceneShareTabState> {
  public tabId = shareDashboardType.report;
  static Component = CreateReportTabRenderer;

  public getTabLabel() {
    return 'Report';
  }
}

function CreateReportTabRenderer({ model }: SceneComponentProps<CreateReportTab>) {
  const { modalRef } = model.useState();
  const dashboard = getDashboardSceneFor(model);

  return (
    <CreateReportTabBase
      dashboard={dashboard}
      onDismiss={() => {
        modalRef?.resolve()?.onDismiss();
      }}
    />
  );
}
