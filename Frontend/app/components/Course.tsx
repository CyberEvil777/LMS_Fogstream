import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { motion, Variants } from 'framer-motion';
import { truncate } from 'lodash';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  color: string;
  complete: number;
  lessons: number;
};

const courseVariants: Variants = {
  initial: { boxShadow: '0px 25px 50px -12px #c2c2c2' },
  tap: { boxShadow: '0px 0px 0px 0px #d4d4d4' },
  hover: {},
};

const arrowVariants: Variants = {
  initial: { marginRight: '0px' },
  tap: { marginRight: '0px', transition: { type: 'spring', damping: 40 } },
  hover: { marginRight: '10px' },
};

const Course = ({ title, description, complete, lessons, color }: Props) => (
  <motion.div
    className="relative overflow-hidden aspect-square flex-col p-6 select-none cursor-pointer"
    initial="initial"
    whileTap="tap"
    whileHover="hover"
    variants={courseVariants}
    transition={{ type: 'spring', velocity: 100, damping: 15 }}
  >
    <div className="h-full w-full text-white flex flex-col justify-between">
      <h1 className="text-4xl font-raleway uppercase break-words">{title}</h1>
      <div className="flex flex-col">
        <div className="flex mb-4">
          <p className="flex font-bold items-center">
            <BookOpenIcon className="h-6 mr-3" />
            <span>
              {`${complete}/${lessons}`}
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
    <div className="absolute top-0 left-0 w-full h-full -z-10" style={{ backgroundColor: color }} />
  </motion.div>
);

export default Course;
