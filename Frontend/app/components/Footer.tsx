import React from 'react';
import { HeartIcon } from '@heroicons/react/solid';
import classnames from 'classnames';
import Container from '@/layouts/Container';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Footer = ({ className, ...props }: Props) => (
  <div
    className={classnames(`py-10 sm:py-4 px-8 border border-neutral-100
      bg-white shadow-neutral-300`, className)}
    {...props}
  >
    <Container
      className="flex-col text-center sm:text-left
        sm:flex-row flex justify-between text-neutral-500 sm:text-sm"
    >
      <p className="mb-4 sm:mb-0">© 2022 Education. All right reserved</p>
      <p>
        <span>Made with</span>
        <HeartIcon className="inline h-5 text-pink-500 mx-2 align-text-top" />
        <span>by Nora & team</span>
      </p>
    </Container>
  </div>
);

export default Footer;
