import React, { useMemo } from 'react';
import Container from 'app/layouts/Container';
import Logo from '@/brands/Logo';
import Link from 'next/link';
import classnames from 'classnames';
import { ButtonLink } from './Button';

type User = {
  id: string;
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  user: User;
  navigation: {
    url: string;
    label: string;
  }[];
};

const Header = ({ navigation, className, user, ...props }: Props) => {
  const navElements = useMemo(() => navigation.map(({ url, label }) => (
    <Link href={url} passHref key={url}>
      <ButtonLink className="mr-2">
        {label}
      </ButtonLink>
    </Link>
  )), [navigation]);

  return (
    <div
      className={classnames(`py-4 px-8 border border-neutral-100
    bg-white shadow-neutral-300`, className)}
      {...props}
    >
      <Container>
        <div className="flex items-center">
          <Link href="/education">
            <a><Logo className="mr-5 cursor-pointer hover:text-neutral-700" /></a>
          </Link>
          <div className="flex flex-grow justify-end text-sm">
            {navElements}
          </div>
          <div className="ml-6">
            <div className="w-10 h-10 bg-white border rounded-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
