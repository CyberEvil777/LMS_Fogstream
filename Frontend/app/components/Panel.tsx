import React from 'react';
import Image from 'next/image';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  image: string;
};

const Panel = ({ title, description, image, className, ...props }: Props) => (
  <div className={`border flex border-neutral-100 bg-white shadow-neutral-300 justify-between ${className}`} {...props}>
    <div className="flex flex-col p-12 w-1/2">
      <h1 className="font-raleway text-4xl mb-4">{title}</h1>
      <p>{description}</p>
    </div>
    <div className="relative w-2/6">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        src={image}
        alt="thumbnail"
      />
    </div>
  </div>
);

export default Panel;
