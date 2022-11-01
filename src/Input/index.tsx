import * as React from 'react';
import classNames from 'classnames';

export interface InputProps {
  /**
   * Add Icon to left side of input.
   * Default: 'undefined'
   */
  iconLeft?: React.ReactNode;
  /**
   * Add Icon to right side of input.
   * Default: 'undefined'
   */
  iconRight?: React.ReactNode;
  /**
   * Add Icon to right side of input.
   * Default: 'undefined'
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'tel'
    | 'password'
    | 'url'
    | 'date'
    | 'time'; //Date is temporary while we don't have a dateSelector-component
  error?: boolean;
  textAlignment?: 'left' | 'right' | 'center';
  name: string;
  value?: string;
  helpElement?: React.ReactNode;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  required?: boolean;
  disabled?: boolean;
  id: string;
  placeholder?: string;
  disableRounding?: boolean;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      error,
      iconLeft,
      iconRight,
      onChange,
      type = 'text',
      textAlignment,
      required,
      name,
      value = '',
      helpElement,
      onBlur,
      isLoading = false,
      disableRounding,
      fullWidth,
      ...inputProps
    } = props;

    function mapType(type: InputProps['type']) {
      switch (type) {
        case 'time':
          return 'time';
        case 'number':
        case 'tel':
          return 'number';
        case 'password':
          return 'password';
        default:
          return 'text';
      }
    }

    return (
      <div className={classNames({ 'flex-grow': fullWidth })}>
        <div
          className={classNames(
            'relative bg-red-500 flex transition outline-none p-1 ring-1 ring-inset',
            {
              'w-full': fullWidth,
              'ring-neutral-400 text-neutral-400': inputProps.disabled,
              'ring-1 active:ring focus:z-10 focus-within:ring-2 focus-within:ring-sky-600 text-secondary':
                !inputProps.disabled,
              'ring-brand-300 bg-neutral-100': !error,
              'ring-2 ring-error-light focus-within:ring-error-light bg-error-light text-white':
                error,
              rounded: !disableRounding,
            }
          )}
        >
          {iconLeft && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {iconLeft}
            </div>
          )}
          <input
            ref={ref}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            type={mapType(type)}
            name={name}
            className={classNames(
              'border-none outline-none bg-transparent',
              'px-3 py-2 text-sky-700',
              'disabled:text-neutral-400',
              'placeholder-tertiary-600',
              'focus:outline-none focus:border-none focus:ring-0',
              'transition',
              'w-full',
              {
                'pl-10': iconLeft,
                'text-right': textAlignment === 'right',
                'text-center': textAlignment === 'center',
              }
            )}
            aria-required={required}
            aria-invalid={error}
            {...inputProps}
          />
          {iconRight && iconRight}
        </div>
        {helpElement && <div className={'mt-3'}>{helpElement}</div>}
      </div>
    );
  }
);