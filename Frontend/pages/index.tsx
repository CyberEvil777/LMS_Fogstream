import React from 'react';
import { NextPage } from 'next';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Button from '@/components/Button';

const Page: NextPage = () => (
  <div className="h-screen flex flex-col">
    <Header
      className="mb-10"
      navigation={config.homeNavigation}
      mainButton={(
        <Link href="/login">
          <a><Button className="hidden sm:block bg-black text-white w-24 ml-5">Sign In</Button></a>
        </Link>
      )}
    />
    <Container className="grow mb-10" />
    <Footer />
  </div>
);

export default Page;
