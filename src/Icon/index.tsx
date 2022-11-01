import * as React from 'react';
import classNames from 'classnames';

export interface IconProps {
  size?: 'small' | 'medium' | 'large';
  /**
   * view box attribute in format 'x0 y0 x y'
   */
  viewBox: string;
  /**
   *  optional title for accessibility
   */
  title?: string;
  /**
   * color to be used to fill the svg.
   * Default: current
   */
  color?: 'brand' | 'neutral' | 'error' | 'warning' | 'success' | 'disabled';
  /**
   * svg content without the svg tag
   */
  children: React.ReactNode;
  /**
   * className
   * Default: undefined
   */
  className?: string;
}

/**
 * UI Element for creating custom svg icons.
 *
 * Could be used to create one-off icons in client apps
 *
 */

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    className,
    children,
    size = 'medium',
    title,
    viewBox,
    color = 'current',
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      viewBox={viewBox}
      className={`${className} ${classNames('fill-current', {
        ['h-3 w-3']: size === 'small',
        ['h-4 w-4']: size === 'medium',
        ['h-5 w-5']: size === 'large',
        ['text-neutral']: color === 'current',
        ['text-brand']: color === 'brand',
        ['text-warning-light']: color === 'warning',
        ['text-success-light']: color === 'success',
        ['text-error-light']: color === 'error',
        ['text-neutral-600']: color === 'disabled',
      })}`}
    >
      {children}
      {title ? <title>{title}</title> : null}
    </svg>
  );
});