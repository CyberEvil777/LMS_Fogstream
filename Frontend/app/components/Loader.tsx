import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';

type SpinnerProps = HTMLMotionProps<'div'>;

export const Spinner = ({ children, className, ...props }: SpinnerProps) => (
  <motion.div
    className={classnames('p-5 bg-black rounded-sm', className)}
    initial={{ scale: 1, rotate: 0, y: 0 }}
    animate={{ rotate: 90, y: [0, -10, 0] }}
    transition={{ type: 'spring', damping: 5, stiffness: 200, repeat: Infinity }}
    {...props}
  />
);

type LoaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Loader = ({ className, ...props }: LoaderProps) => (
  <div className={classnames('flex h-screen w-screen items-center justify-center', className)} {...props}>
    <Spinner />
  </div>
);
