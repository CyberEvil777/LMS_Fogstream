import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form, FormikHelpers } from 'formik';
import { login, LoginValues, useUser } from '@/fetching/auth';
import { useRouter } from 'next/router';
import { FormInput } from '@/components/Auth';
import Button from '@/components/Button';
import Logo from '@/brands/Logo';
import { Loader } from '@/components/Loader';

const Page: NextPage = () => {
  const { data: isUser, isValidating: isUserValidating } = useUser();
  const router = useRouter();

  if (isUserValidating || isUser) {
    if (!isUserValidating && isUser) {
      router.push('/education').catch((error) => { throw error; });
    }

    return (
      <Loader />
    );
  }

  return (
    <div className="w-full h-screen flex">
      <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex-shrink-0 justify-center items-center">
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={async (
            { username, password }: LoginValues,
            { setSubmitting, setFieldError }: FormikHelpers<LoginValues>,
          ) => {
            setSubmitting(true);
            if (await login({ username, password })) {
              await router.push('/education');
              return;
            }

            setSubmitting(false);
            setFieldError('password', 'Invalid credentials');
          }}
        >
          {({ isValidating, handleChange, errors }) => (
            <Form className="flex flex-col w-9/12">
              <div className="mb-20 flex justify-center w-full text-2xl"><Logo /></div>
              <div className="mb-10">
                <h1 className="text-3xl font-raleway mb-4">Sign In</h1>
                <p className="text-sm text-neutral-500">Enter your credentials to access your education account.</p>
              </div>
              <FormInput
                label="Username"
                name="username"
                className="mb-4 w-full"
                placeholder="username"
                onChange={handleChange}
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                className="mb-4 w-full"
                placeholder="password"
                error={errors.password}
                onChange={handleChange}
              />
              <Button className="bg-black text-white mb-8" type="submit" loading={isValidating}>Sign In</Button>
              <p className="text-sm">
                <span>Not a member? </span>
                <Link href="/register"><a className="text-blue-500">Sign up</a></Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <div className="relative flex-grow">
        <Image
          layout="fill"
          objectFit="cover"
          src="/auth.jpg"
          alt="Authentication Cover"
        />
      </div>
    </div>
  );
};

export default Page;
