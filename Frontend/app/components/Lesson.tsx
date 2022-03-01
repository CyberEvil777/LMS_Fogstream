import React, { useMemo } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import classnames from 'classnames';
import Image from 'next/image';
import { Lesson, LessonType } from '@/types';
import Link from 'next/link';
import Button from './Button';

type Props = React.HTMLAttributes<HTMLDivElement> & { lesson: Lesson; index: string };

const LessonComponent = ({
  lesson: {
    title,
    description,
    type,
    completed,
    image,
  },
  index,
  className,
  ...props
}: Props) => {
  const buttonLabel = useMemo(() => {
    switch (type) {
      case LessonType.LECTION:
        return 'Read Lection';
      case LessonType.TEST:
        return 'Test Yourself';
      case LessonType.VIDEO:
        return 'Watch Video';
      default:
        return 'More';
    }
  }, [type]);

  return (
    <div className={classnames('bg-neutral-50 flex shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.1)]', className)} {...props}>
      <div className="relative aspect-square h-60 flex-shrink">
        <Image
          layout="fill"
          objectFit="contain"
          alt={title}
          src={image}
        />
      </div>
      <div className="flex flex-col p-8 justify-between flex-grow">
        <div className="mb-6">
          <Link href="/education/lessons/1">
            <a className="font-raleway text-2xl mb-4 hover:underline">{`${index}. ${title}`}</a>
          </Link>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/education/lessons/1" passHref>
            <a>
              <Button
                className="border hover:bg-neutral-200
              transition-colors duration-150 text-black w-40 flex
              justify-center items-center mr-10"
              >
                {buttonLabel}
                <ArrowRightIcon className="h-3 ml-3" />
              </Button>
            </a>
          </Link>
          {
            completed && (<p className="text-green-500 bg-green-200 rounded-md px-4 py-1">Completed</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
