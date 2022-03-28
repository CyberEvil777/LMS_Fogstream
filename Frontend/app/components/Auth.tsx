import React from 'react';
import classnames from 'classnames';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ children, className, ...props }: InputProps) => (
  <input
    className={classnames('py-3 px-2 text-sm', className)}
    {...props}
  />
);

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const FormInput = ({
  label,
  name,
  children,
  className,
  error,
  ...props
}: FormInputProps) => (
  <div className={classnames('flex flex-col', className)}>
    <label className="text-sm mb-2" htmlFor={name}>{label}</label>
    <Input className="border" name={name} {...props} />
    {
      error && (<p className="text-sm mt-2 text-red-500">{error}</p>)
    }
  </div>
);
