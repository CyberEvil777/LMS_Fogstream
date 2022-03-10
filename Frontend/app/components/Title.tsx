import classNames from 'classnames';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

const Title = ({ className, title, subtitle, ...props }: Props) => (
  <div className={classNames('flex flex-col', className)} {...props}>
    <p className="text-neutral-400 mb-2">{subtitle}</p>
    <h1 className="text-4xl font-raleway mb-4">{title}</h1>
    <div className="bg-black w-10 h-1 mb-6" />
  </div>
);

export default Title;
