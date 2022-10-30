import React from 'react';
import classNames from 'classnames';
export interface FlexProps {
  alignContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  alignSelf?: 'center' | 'start' | 'end' | 'stretch' | 'baseline' | 'auto';
  justifyContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
  center?: boolean;
  full?: boolean;
  row?: boolean;
  sx?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

export const Flex: React.FC<FlexProps> = (props) => {
  const {
    children,
    row,
    center,
    full,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    className = '',
    sx,
  } = props;

  return (
    <div
      className={classNames(`flex w-full ${className}`, {
        ['h-screen w-full']: full,
        ['justify-center items-center']:
          center && !(alignItems && justifyContent),
        ['flex-col']: !row,
        ['flex-row']: row,
        [`items-${alignItems}`]: alignItems,
        [`content-${alignContent}`]: alignContent,
        [`self-${alignSelf}`]: alignContent,
        [`justify-${justifyContent}`]: justifyContent,
      })}
      style={{ ...sx }}
    >
      {children}
    </div>
  );
};