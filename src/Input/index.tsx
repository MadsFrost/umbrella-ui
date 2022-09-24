import classNames from 'classnames';
import React from 'react';
import { Color } from '../types';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color: Color;
}

export const Input = (props: InputProps) => {
    const { className, color = 'orange-300', ...restProps } = props;
    const textColor = `bg-${color}`;
    const bgColor = `bg-${color}`;
    const classes = classNames(className,
        textColor,
        bgColor,
        'w-full',
        'py-2',
        'px-1',
        'border'
    );
  return (
    <input className={classes} {...restProps}/>
  )
};