import React from 'react';
import Button from '@components/Button';
import Link from 'next/link';

const Page = () => {
  console.log('Hello World!');

  return (
    <div>
      <p>Hello world!</p>
      <Link href={'/personal'}><a>Личный кабинет</a></Link>
      <Button />
    </div>
  );
};

export default Page;
