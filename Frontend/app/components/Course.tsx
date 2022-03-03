import React, { useMemo } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { truncate } from 'lodash';
import Image from 'next/image';

type Props = HTMLMotionProps<'div'> & {
  title: string;
  description: string;
  color: string;
  completed: number;
  lessons: number;
  image: string;
};

const arrowVariants: Variants = {
  initial: { marginRight: '0px' },
  tap: { marginRight: '0px', transition: { type: 'spring', damping: 40 } },
  hover: { marginRight: '10px' },
};

const titleVariants: Variants = {
  initial: { y: '0px' },
  hover: { y: '-150px' },
};

const overlayVariants: Variants = {
  initial: { opacity: 0.3 },
  tap: { opacity: 0 },
  hover: { opacity: 0 },
};

const textVariants: Variants = {
  initial: { y: '0px' },
  hover: { y: '150px' },
};

const Course = ({ title, description, completed, lessons, color, image, ...props }: Props) => {
  const courseVariants: Variants = useMemo(() => ({
    initial: { boxShadow: `0px 25px 50px -12px ${color}` },
    tap: { boxShadow: `0px 0px 0px 0px ${color}` },
    hover: { boxShadow: `0px 40px 100px -12px ${color}` },
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
        <motion.h1
          className="text-4xl font-raleway uppercase break-words"
          variants={titleVariants}
          transition={{ type: 'spring', damping: 25 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="flex flex-col"
          variants={textVariants}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="flex mb-4">
            <p className="flex font-bold items-center">
              <BookOpenIcon className="h-6 mr-3" />
              <span>{`${completed}/${lessons} lessons`}</span>
            </p>
          </div>
          <p className="text-sm w-4/5">{truncate(description, { length: 100 })}</p>
        </motion.div>
        <motion.div className="absolute bottom-6 right-6" variants={arrowVariants}>
          <ArrowRightIcon className="h-5" />
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10 bg-black"
        variants={overlayVariants}
      />
      <div
        className="absolute top-0 left-0 w-full h-full -z-20"
        style={{ backgroundColor: color }}
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={image}
          alt={title}
        />
      </div>
    </motion.div>
  );
};

export default Course;
