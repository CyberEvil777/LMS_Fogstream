import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...props }: Props) => (
  <div className={`container mx-auto ${className}`} {...props}>
    { children }
  </div>
);

export default Container;
