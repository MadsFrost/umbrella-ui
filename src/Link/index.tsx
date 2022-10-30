import * as React from 'react';
import classNames from 'classnames';

export const AnchorLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const { children, href, ...anchorProps } = props;
  const targetProps = href?.startsWith('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <a ref={ref} href={href} {...targetProps} {...anchorProps}>
      {children}
    </a>
  );
});

export type LinkProps<C extends React.ElementType> = {
  /**  Render Link as given component. Note that the given
   *   component's root styling as overridden by the Link's styling.
   *   You will also need to provide all required props by the given component.
   *
   *   Defaults to the internal AnchorLink component
   * */
  className?: string;
  as?: C;
  isLoading?: boolean;
} & React.ComponentProps<C> &
  JSX.IntrinsicAttributes;
/**
 * Ui Element for links
 *
 */
export function Link<C extends React.ElementType>(props: LinkProps<C>) {
  const {
    as: As = AnchorLink,
    className,
    children,
    isLoading = false,
    ...restProps
  } = props;

  return (
    <As
      {...restProps}
      className={classNames(
        className,
        'inline-flex items-center underline-mt-2 transition',
        'text-base font-medium text-primary',
        'active:text-primary-600 active:underline active:underline-bold',
        'focus:underline focus:underline-bold',
        'hover:underline hover:underline-bold'
      )}
    >
      {children}
    </As>
  );
}