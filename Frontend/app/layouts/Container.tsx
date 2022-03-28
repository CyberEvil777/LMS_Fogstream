import React from 'react';
import classnames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...props }: Props) => (
  <div className={classnames('px-4 sm:px-0 container mx-auto', className)} {...props}>
    { children }
  </div>
);

export default Container;
