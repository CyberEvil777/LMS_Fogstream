import React, { useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type ButtonProps = HTMLMotionProps<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => (
  <motion.button
    className={`py-3 px-2 rounded-xl text-sm ${className}`}
    initial={{ scale: 1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', damping: 10 }}
    type="button"
    {...props}
  >
    {children}
  </motion.button>
);

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ href, children, className }: ButtonLinkProps) => (
  <a
    href={href}
    className={`px-4 py-2 text-neutral-700
      transition-colors duration-150 hover:bg-neutral-200 hover:text-black
      active:bg-neutral-300 select-none ${className}`}
  >
    {children}
  </a>
);

export default Button;
