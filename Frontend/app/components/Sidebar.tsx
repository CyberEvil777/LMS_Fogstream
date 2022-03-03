import React, { useMemo } from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { Comment } from '@/types';
import Button from './Button';

type SidebarSectionProps = React.HTMLAttributes<HTMLDivElement> & { title?: string };

const SidebarSection = ({ children, className, title, ...props }: SidebarSectionProps) => (
  <div className={classnames('flex flex-col p-6 bg-neutral-50', className)} {...props}>
    { title && (<h1 className="font-raleway mb-4">{title}</h1>) }
    {children}
  </div>
);

export default SidebarSection;

type SidebarCommentsProps = React.HTMLAttributes<HTMLDivElement> & { comments?: Comment[] };
export const SidebarComments = ({ comments }: SidebarCommentsProps) => {
  const commentElements = useMemo(() => comments?.map(({ id, date, message, user_name }) => (
    <div key={id} className="flex mb-4">
      <div className="mr-4 w-10 flex-shrink-0">
        <div className="bg-neutral-100 aspect-square rounded-full" />
      </div>
      <div className="flex flex-col text-sm">
        <h1 className="mb-0.5">{user_name}</h1>
        <span className="mb-2 text-neutral-300 break-words text-[12px]">{dayjs(date).format('HH:MM')}</span>
        <p className="mb-2">{message}</p>
      </div>
    </div>
  || [])), [comments]);

  return (
    <>
      <div className="flex flex-col h-80 bg-white p-6 pb-2 mb-6 overflow-y-auto">
        {commentElements}
      </div>
      <p className="mb-2 text-sm">Write message</p>
      <input type="text" className="w-full h-10 mb-6 p-2" />
      <Button className="bg-neutral-200">
        Send Message
      </Button>
    </>
  );
};
