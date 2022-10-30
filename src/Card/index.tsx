import React from 'react';
import classNames from 'classnames';
import { Flex } from '../Flex';
export interface CardProps {
  header?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  actions?: React.ReactNode | React.ReactNode[];
  addDivider?: boolean;
  classes?: {
    headerClass?: string;
    wrapperClass?: string;
    contentClass?: string;
    actionClass?: string;
  };
}

export const Card: React.FC<CardProps> = (props) => {
  const { header, actions, children, classes, addDivider } = props;
  return (
    <Flex
      className={classNames('w-full', {
        [`${classes?.wrapperClass}`]: classes && classes?.wrapperClass,
      })}
    >
      {header && (
        <Flex
          className={classNames('w-full', {
            [`${classes?.headerClass}`]: classes,
          })}
        >
          {header}
        </Flex>
      )}
      <Flex
        className={classNames('w-full', {
          [`${classes?.contentClass}`]: classes,
        })}
      >
        {children}
      </Flex>
      {addDivider && (
        <br className="py-3" style={{ borderColor: 'rgba(0,0,0,0.4)' }} />
      )}
      <Flex
        className={classNames('w-full', {
          [`${classes?.actionClass}`]: classes,
        })}
      >
        {actions}
      </Flex>
    </Flex>
  );
};