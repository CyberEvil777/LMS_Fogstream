import React, { useMemo } from 'react';
import { PaperClipIcon, AnnotationIcon, VideoCameraIcon, ChevronRightIcon } from '@heroicons/react/solid';
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

  const icon = useMemo(() => {
    switch (type) {
      case LessonType.LECTION:
        return (<PaperClipIcon className="h-10" />);
      case LessonType.TEST:
        return (<AnnotationIcon className="h-10" />);
      case LessonType.VIDEO:
        return (<VideoCameraIcon className="h-10" />);
      default:
        return 'More';
    }
  }, [type]);

  return (
    <div
      className={classnames('bg-neutral-50 flex shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.1)]', className)}
      {...props}
    >
      <div className="flex flex-shrink-0 w-40 items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col p-8 justify-between flex-grow border-x border-neutral-100">
        <div className="mb-0">
          <Link href="/education/lessons/1">
            <a className="inline-block font-raleway text-2xl mb-2 hover:underline">{`${index}. ${title}`}</a>
          </Link>
          <p>{description}</p>
        </div>
        {
          completed && (
            <div className="flex mt-6">
              <p className="text-green-500 bg-green-200 rounded-md px-4 py-1">Completed</p>
            </div>
          )
        }
      </div>
      <Link href="/education/lessons/1" passHref>
        <a className="flex flex-shrink-0 w-40
          items-center justify-center hover:bg-neutral-100
          active:bg-neutral-200
          transition-colors duration-75"
        >
          <ChevronRightIcon className="h-6" />
        </a>
      </Link>
    </div>
  );
};

export default LessonComponent;
