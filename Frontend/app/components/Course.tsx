import React, { useMemo } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { truncate } from 'lodash';

type Props = HTMLMotionProps<'div'> & {
  title: string;
  description: string;
  color: string;
  completed: number;
  lessons: number;
};

const arrowVariants: Variants = {
  initial: { marginRight: '0px' },
  tap: { marginRight: '0px', transition: { type: 'spring', damping: 40 } },
  hover: { marginRight: '10px' },
};

const backgroundVariants: Variants = {
  initial: { filter: 'brightness(100%)' },
  tap: { filter: 'brightness(90%)' },
  hover: { filter: 'brightness(120%)' },
};

const Course = ({ title, description, completed, lessons, color, ...props }: Props) => {
  const courseVariants: Variants = useMemo(() => ({
    initial: { boxShadow: `0px 25px 50px -12px ${color}` },
    tap: { boxShadow: `0px 0px 0px 0px ${color}` },
    hover: {},
  }), [color]);

  return (
    <motion.div
      className="relative overflow-hidden aspect-square flex-col p-6 select-none cursor-pointer"
      initial="initial"
      whileTap="tap"
      whileHover="hover"
      variants={courseVariants}
      transition={{ type: 'spring', velocity: 700, damping: 15 }}
      {...props}
    >
      <div className="h-full w-full text-white flex flex-col justify-between">
        <h1 className="text-4xl font-raleway uppercase break-words">{title}</h1>
        <div className="flex flex-col">
          <div className="flex mb-4">
            <p className="flex font-bold items-center">
              <BookOpenIcon className="h-6 mr-3" />
              <span>
                {`${completed}/${lessons}`}
                {' '}
                lessons
              </span>
            </p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-sm w-4/5">{truncate(description, { length: 100 })}</p>
            <motion.div variants={arrowVariants}>
              <ArrowRightIcon className="h-5" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        variants={backgroundVariants}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default Course;
