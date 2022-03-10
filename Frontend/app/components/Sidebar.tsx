import React, { useMemo, useState } from 'react';
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
  const [currentComments, setComments] = useState(comments ?? []);
  const [currentMessage, setMessage] = useState('');

  const commentElements = useMemo(() => currentComments.map(({ id, date, message, user_name }) => (
    <div key={id} className="flex mb-4">
      <div className="mr-4 w-10 flex-shrink-0">
        <div className="bg-neutral-100 aspect-square rounded-full" />
      </div>
      <div className="flex flex-col text-sm">
        <h1 className="mb-0.5">{user_name}</h1>
        <span className="mb-2 text-neutral-300 break-words text-[12px]">{dayjs(date).format('HH:mm')}</span>
        <p className="mb-2">{message}</p>
      </div>
    </div>
  || [])), [currentComments]);

  return (
    <>
      {
        currentComments.length > 0
          ? (
            <div className="flex flex-col h-80 bg-white p-6 pb-2 mb-6 overflow-y-auto">
              {commentElements}
            </div>
          )
          : (
            <div className="flex w-full h-20 mb-4 items-center justify-center">
              No messages yet
            </div>
          )
      }
      <p className="mb-2 text-sm">Write message</p>
      <input
        type="text"
        className="w-full h-10 mb-6 p-2"
        value={currentMessage}
        onChange={({ target: { value } }) => { setMessage(value); }}
      />
      <Button
        className="bg-neutral-200"
        onClick={() => {
          const message = currentMessage.trim();
          if (message.length == 0) return;

          // TODO: необходимо делать POST запрос и получать id с бэкенда
          setComments([...currentComments, {
            date: dayjs().valueOf(),
            id: currentComments.length > 0
              ? currentComments[currentComments.length - 1].id + 1
              : 0,
            message,
            user_name: 'You',
          }]);
          setMessage('');
        }}
      >
        Send Message
      </Button>
    </>
  );
};
