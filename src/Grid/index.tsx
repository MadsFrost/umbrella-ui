import * as React from 'react';
import classNames from 'classnames';
import { CSSProperties } from 'react';

type ColString = '1/4' | '1/3' | '1/2' | '2/3' | '3/4' | 'full';
type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Col = ColString[] | ColNumber;
export interface GridProps {
  columns: Col;
  children: React.ReactNode;
  className?: string;
  /**
   * Prop to determin where the items should be aligned on the grid if there's available space left
   * Optional
   * @default start
   */
  justifyColumns?: 'start' | 'center' | 'end';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

function mapValueToPercent(value: ColString) {
  switch (value) {
    case '1/4':
      return '25%';
    case '1/3':
      return '33.333333%';
    case '1/2':
      return '50%';
    case '2/3':
      return '66.666667%';
    case '3/4':
      return '75%';
    case 'full':
      return '100%';
  }
}

function parseColString(columns: ColString[]): CSSProperties {
  const parsedString = { gridTemplateColumns: '' };
  columns.forEach(function (column, index) {
    parsedString.gridTemplateColumns += `${mapValueToPercent(column)}${
      index + 1 < columns.length ? ' ' : ''
    }`;
  });
  return parsedString;
}

function parseNumOfCols(columns: ColNumber): string {
  switch (columns) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
    case 5:
      return 'grid-cols-5';
    case 6:
      return 'grid-cols-6';
    case 7:
      return 'grid-cols-7';
    case 8:
      return 'grid-cols-8';
    case 9:
      return 'grid-cols-9';
    case 10:
      return 'grid-cols-10';
    case 11:
      return 'grid-cols-11';
    case 12:
      return 'grid-cols-12';
  }
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { className, children, columns, justifyColumns, gap = 'lg' } = props;
    const parsedColumns = React.useMemo(
      () =>
        typeof columns === 'object'
          ? parseColString(columns)
          : parseNumOfCols(columns),
      [columns]
    );

    return typeof parsedColumns === 'string' ? (
      <div
        ref={ref}
        className={classNames(`grid ${className}`, parsedColumns, {
          ['gap-2']: gap === 'xs',
          ['gap-3']: gap === 'sm',
          ['gap-4']: gap === 'md',
          ['gap-5']: gap === 'lg',
          ['gap-7']: gap === 'xl',
          ['gap-10']: gap === 'xxl',
          ['gap-20']: gap === 'xxxl',
        })}
      >
        {children}
      </div>
    ) : (
      <div
        ref={ref}
        style={parsedColumns}
        className={classNames(`grid ${className}`, {
          ['place-content-start']: justifyColumns === 'start',
          ['place-content-center']: justifyColumns === 'center',
          ['place-content-end']: justifyColumns === 'end',
        })}
      >
        {children}
      </div>
    );
  }
);


export interface GridElementProps {
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

export const GridElement = React.forwardRef<HTMLDivElement, GridElementProps>(
  (props, ref) => {
    const { alignItems, children, justifyContent } = props;

    return (
      <div
        ref={ref}
        className={classNames('flex flex-col', {
          ['justify-start']: justifyContent === 'start',
          ['justify-end']: justifyContent === 'end',
          ['justify-center']: justifyContent === 'center',
          ['justify-between']: justifyContent === 'between',
          ['justify-around']: justifyContent === 'around',
          ['justify-evenly']: justifyContent === 'evenly',
          ['items-start']: alignItems === 'start',
          ['items-end']: alignItems === 'end',
          ['items-center']: alignItems === 'center',
          ['items-baseline']: alignItems === 'baseline',
          ['items-stretch']: alignItems === 'stretch',
        })}
      >
        {children}
      </div>
    );
  }
);