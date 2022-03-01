import React from 'react';
import { HashtagIcon } from '@heroicons/react/solid';
import classnames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Logo = ({ className, ...props }: Props) => (
  <div className={classnames('flex items-center cursor-default', className)} {...props}>
    <HashtagIcon className="w-7 h-7 mr-2" />
    <span className="font-bold">Education</span>
  </div>
);

export default Logo;
