import * as React from 'react';
import classNames from 'classnames';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';
export type TextElement =
  | 'label'
  | 'span'
  | 'p'
  | 'div'
  | 'li'
  | HeadingElement;
export type TextVariant =
  | 'body'
  | 'body-small'
  | 'label'
  | 'label-small'
  | 'label-tiny'
  | 'paragraph'
  | HeadingElement;

const VariantMapping: {
  [key in TextVariant]: React.ElementType & TextElement;
} = {
  label: 'span',
  'label-small': 'span',
  'label-tiny': 'span',
  body: 'span',
  'body-small': 'span',
  paragraph: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export interface TypographyProps {
  /**
   * Optional text alignment
   */
  align?: 'center' | 'left' | 'right';
  /**
   * Optional render element as custom semantic html element
   */
  as?: React.ElementType & TextElement;
  /**
   * Text type to use
   * Default: 'paragraph'
   */
  variant?: TextVariant;

  /**
   * Optional should apply italic styling
   */
  italic?: boolean;

  /**
   * Optional should apply bold font weight. Applies only to variants that dont have font weight applied by default
   */
  bold?: boolean;

  /**
   * Optional should apply underline decoration
   */
  underlined?: boolean;
  /**
   * Optional color type to override default color
   */
  color?:
    | 'current'
    | 'white'
    | 'default'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'error'
    | 'success';

  /**
   * Alow define behaviour for text overflow
   */
  textOverflow?: 'truncate' | 'clip';
  /**
   * Generates loading skeleton placeholder
   */
  className?: string;

  children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const {
      variant = 'body',
      as,
      align,
      color,
      italic,
      bold,
      underlined,
      textOverflow,
      className,
      children,
    } = props;
    const Component = as || VariantMapping[variant] || ('span' as const);

    return (
      <Component
        ref={ref}
        className={classNames({
          ['text-center']: align === 'center',
          ['text-left']: align === 'left',
          ['text-right']: align === 'right',
          ['italic']: italic,
          ['font-bold underline-bold']: bold,
          ['underline underline-mt-1']: underlined,
          ['font-normal']: !bold,
          ['text-current']: color === 'current',
          ['text-sky-600']: color === 'primary' || (!color && variant === 'h1'),
          ['text-sky-700']: color === 'secondary',
          ['text-amber-500']: color === 'warning',
          ['text-red-500']: color === 'error',
          ['text-green-500']: color === 'success',
          ['text-neutral-100']: color === 'white',
          ['text-gray-400']: color === 'disabled',
          ['text-sky-800']: !color && (variant === 'h2' || variant === 'h3'),
          ['text-neutral-900']:
            color === 'default' ||
            (!color &&
              [
                'h4',
                'paragraph',
                'body',
                'body-small',
                'label',
                'label-small',
                'label-tiny',
              ].includes(variant)),
          [`font-heading text-xl leading-tight tracking-wider`]:
            variant === 'h1',
          ['font-heading text-lg leading-tight tracking-wider']:
            variant === 'h2',
          ['font-heading leading-snug text-base tracking-wider']:
            variant === 'h3',
          ['font-heading leading-snug text-base font-bold tracking-wide']:
            variant === 'h4',
          ['font-body text-base leading-snug']: variant === 'body',
          ['font-body text-sm leading-tight']: variant === 'body-small',
          ['font-body leading-snug text-base font-bold tracking-widest']:
            variant === 'label',
          ['font-body leading-tight text-sm font-bold tracking-wide']:
            variant === 'label-small',
          ['font-body text-xs leading-tight tracking-extreme']:
            variant === 'label-tiny',
          ['font-body text-base leading-normal']: variant === 'paragraph',
          ['max-w-full truncate']: textOverflow === 'truncate',
          ['max-w-full whitespace-nowrap overflow-clip overflow-hidden']:
            textOverflow === 'clip',
          ['font-black']:
            (variant === 'h1' || variant === 'h2' || variant === 'h3') && !bold,
        },
        `${className}`)}
      >
        {children}
      </Component>
    );
  }
);