import React from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  router.push('/education/lessons/lection')
    .catch((e) => { throw e; });

  return (
    <div>
    </div>
  );
};

export default Page;
