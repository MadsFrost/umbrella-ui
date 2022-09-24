import React from 'react';
import classNames from 'classnames';
import { useTheme } from '../ThemeProvider';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = ({ disabled, title, ...rest }: ButtonProps) => {
  const theme = useTheme();
  console.log(typeof theme);
  const classes = classNames(rest.className,
    `bg-blue-600`,
    'text-blue-700',
    'font-semibold',
    'hover:text-white',
    'py-2',
    'px-4',
    'border',
    'border-blue-500',
    'hover:bg-blue-500',
    'hover:border-transparent',
    'rounded disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-default'
    );
  return (
    <button
    className={classes}
    disabled={disabled}
    {...rest}
  >
    {title}
  </button>
  )
};