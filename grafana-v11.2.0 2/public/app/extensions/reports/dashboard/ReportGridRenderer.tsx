import { useEffect, useState } from 'react';
import * as React from 'react';
import { useLocation } from 'react-router';

import { SceneGridItemLike, SceneGridLayout, SceneGridRow, SceneTimeRangeState } from '@grafana/scenes';
import { GRID_COLUMN_COUNT } from 'app/core/constants';

import ReportFooter from './ReportFooter';
import ReportHeader from './ReportHeader';
import {
  buildSimpleLayout,
  buildGridLayout,
  calcGridItemPosition,
  getGridParams,
  PositionParams,
  ReportGridItem,
  ReportPage,
} from './utils';

export const A4_WIDTH = 794;
export const A4_HEIGHT = 1122;
export const TOP_MARGIN = 130;
const SIDE_MARGIN = 16;

interface Props {
  grid: SceneGridLayout;
  dashboardTitle: string;
  timeRange: SceneTimeRangeState;
}

export function ReportGridRenderer({ grid, dashboardTitle, timeRange }: Props) {
  const [isActive, setIsActive] = useState(false);
  const { scaleFactor, isLandscape, isSimple, reportTitle } = useUrlValues();

  uncollapseRows(grid.state.children);
  const { children } = grid.useState();

  useEffect(() => {
    setIsActive(true);
    return grid.activate();
  }, [grid]);

  let pageWidth = A4_WIDTH;
  let pageHeight = A4_HEIGHT;
  if (isLandscape) {
    pageWidth = A4_HEIGHT;
    pageHeight = A4_WIDTH;
  }

  const screenHeight = (pageHeight - TOP_MARGIN) * scaleFactor;
  const screenWidth = pageWidth * scaleFactor - 2 * SIDE_MARGIN;

  if (!isActive) {
    return null;
  }

  let blocks: ReportPage[];
  if (isSimple) {
    blocks = buildSimpleLayout(children, scaleFactor, screenHeight, isLandscape);
  } else {
    blocks = buildGridLayout(children, scaleFactor, screenHeight);
  }

  return (
    <div style={{ position: 'relative' }}>
      {blocks.map((page, index) => (
        <div key={index}>
          <ReportHeader
            reportTitle={reportTitle || dashboardTitle}
            dashboardTitle={dashboardTitle}
            timeRange={timeRange}
            scaleFactor={scaleFactor}
          />
          <div style={getPageStyle(page, screenWidth)}>
            {page.items.map((item, index) => (
              <div key={index} style={getItemStyle(item, screenWidth)}>
                {item.render()}
              </div>
            ))}
          </div>
          <ReportFooter scaleFactor={scaleFactor} />
          {page.pageBreakAfter && (
            <>
              <div style={{ pageBreakAfter: 'always', marginBottom: '16px' }} />
              <div style={{ marginBottom: '16px' }} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export function useUrlValues() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const scaleFactor = parseFloat(urlParams.get('scale') ?? '');

  return {
    scaleFactor: isNaN(scaleFactor) ? 1 : scaleFactor,
    isLandscape: urlParams.get('pdf.landscape') !== 'false',
    isSimple: urlParams.get('pdf.layout') === 'simple',
    reportTitle: urlParams.get('title'),
  };
}

function uncollapseRows(children: SceneGridItemLike[]) {
  for (const gridChild of children) {
    if (gridChild instanceof SceneGridRow && gridChild.state.isCollapsed) {
      gridChild.onCollapseToggle();
    }
  }
}

function getItemStyle(item: ReportGridItem, screenWidth: number): React.CSSProperties {
  const params: PositionParams = getGridParams(screenWidth);
  const position = calcGridItemPosition(params, item.x, item.y, item.w, item.h);

  return {
    top: position.top,
    left: position.left,
    width: position.width,
    height: position.height,
    position: 'absolute',
  };
}

function getPageStyle(block: ReportPage, screenWidth: number): React.CSSProperties {
  const params: PositionParams = getGridParams(screenWidth);
  const position = calcGridItemPosition(params, 0, 0, GRID_COLUMN_COUNT, block.h);

  return {
    width: position.width,
    height: position.height,
    position: 'relative',
  };
}
