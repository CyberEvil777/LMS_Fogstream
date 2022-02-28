import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: Props) => (
  <div className="flex flex-col">
    <p className="text-neutral-400 mb-2">{subtitle}</p>
    <h1 className="text-4xl font-raleway mb-4">{title}</h1>
    <div className="bg-black w-10 h-1 mb-6" />
  </div>
);

export default Title;
