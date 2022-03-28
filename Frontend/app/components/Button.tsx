import React, { forwardRef, Ref, useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';

type ButtonProps = HTMLMotionProps<'button'> & { loading?: boolean };

const Button = ({ children, className, loading, ...props }: ButtonProps) => (
  <motion.button
    className={classnames('py-3 px-2 text-sm', className)}
    initial={{ scale: 1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', damping: 10 }}
    type="button"
    {...props}
  >
    {
      loading
        ? 'Loading...'
        : children
    }
  </motion.button>
);

export default Button;

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, className, ...props }: ButtonLinkProps, ref: Ref<HTMLAnchorElement>) => (
  <a
    ref={ref}
    className={classnames(`px-4 py-2 text-neutral-700
      transition-colors duration-150 hover:bg-neutral-200 hover:text-black
      active:bg-neutral-300 select-none`, className)}
    {...props}
  >
    {children}
  </a>
);

export const ButtonLink = forwardRef(Link);

type ButtonTogglerProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  buttons: { text: string; id: string }[];
  active?: string;
  btnClassName?: string;
  classNameActive?: string;
  onChoose: (button: { text: string; id: string },
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
};
export const ButtonToggler = ({
  buttons,
  active,
  onChoose,
  className,
  classNameActive,
  btnClassName,
}: ButtonTogglerProps) => {
  const [buttonId, setButtonId] = useState(active);

  return (
    <div className={classnames('flex w-full', className)}>
      {buttons.map(({ id, text }) => (
        <Button
          className={classnames([
            { [btnClassName]: buttonId != id }, { [classNameActive]: buttonId == id },
          ])}
          key={id}
          onClick={async (e) => {
            if (id == buttonId) return;

            setButtonId(id);
            await onChoose({ id, text }, e);
          }}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
