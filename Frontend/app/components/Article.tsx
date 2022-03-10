import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import classnames from 'classnames';
import { DocumentIcon, DownloadIcon, CheckIcon } from '@heroicons/react/outline';
import { Attached } from '@/types';
import Button from './Button';

type ArticleProps = React.HTMLAttributes<HTMLDivElement> & {
  content?: string;
};

export const Article = ({ className, content, ...props }: ArticleProps) => {
  const [contentHTML, setContentHTML] = useState<null | string>(content);

  useEffect(() => {
    const transformation = async () => {
      const result = await remark().use(html).process(content);
      return result.toString();
    };

    transformation().then((value) => {
      setContentHTML(value);
    }).catch(() => { throw new Error('Couldn\'t parse MarkDown code'); });
  }, [content]);

  return (
    <article
      className={classnames(`prose prose-neutral prose-headings:font-raleway
        hover:prose-a:text-blue-500`, className)}
        // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: contentHTML }}
      {...props}
    />
  );
};

type AttachedProps = React.HTMLAttributes<HTMLDivElement> & {
  files?: Attached[];
};

export const AttachedComponent = ({ className, files, ...props }: AttachedProps) => {
  const attachedElements = useMemo(() => files.map(({ id, title, url }) => (
    <Link key={id} href={url}>
      <a download={title} target="_blank">
        <Button className="bg-neutral-100 flex items-center px-5 mr-4 mb-4">
          <DocumentIcon className="h-4 mr-4" />
          <span>{title}</span>
          <DownloadIcon className="h-4 ml-4" />
        </Button>
      </a>
    </Link>
  )), [files]);

  return (
    <div className={classnames('py-8 px-10 pb-4', className)} {...props}>
      {
        attachedElements.length > 0
          ? (
            <>
              <h2 className="font-raleway mb-4">Attached files</h2>
              <div className="flex flex-wrap">{attachedElements}</div>
            </>
          )
          : (
            <div>No attached files</div>
          )
      }
    </div>
  );
};

type LessonFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  description: string;
  files?: Attached[];
};

export const LessonFooter = ({ className, files, description, ...props }: LessonFooterProps) => (
  <div className={classnames('border border-neutral-100', className)} {...props}>
    <div className="py-8 px-10 border-b border-neutral-100">
      <h1 className="font-raleway text-2xl mb-4">Lesson description</h1>
      <p className="text-sm whitespace-pre-line">{description}</p>
    </div>
    <AttachedComponent files={files} />
  </div>
);
