import React, { useMemo, useState } from 'react';
import { NextPage } from 'next';
import { DocumentIcon, DownloadIcon, CheckIcon } from '@heroicons/react/outline';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import LessonComponent from '@/components/Lesson';
import { StatusLabel } from '@/components/Status';
import { LessonType } from '@/types';
import { useCounts } from '@/utils/hooks';
import Button, { ButtonToggler } from '@/components/Button';
import Link from 'next/link';
import dayjs from 'dayjs';
import SidebarSection, { SidebarComments } from '@/components/Sidebar';
import { lesson, user, course } from '@/utils/fake';

const Page: NextPage = () => {
  const [completed, setCompleted] = useState(lesson.completed);

  const attachedElements = useMemo(() => lesson.files.map(({ id, title, url }) => (
    <Link key={id} href={url}>
      <a download={title} target="_blank">
        <Button className="bg-neutral-100 flex items-center mr-4 mb-4">
          <DocumentIcon className="h-4 mr-4" />
          <span>{title}</span>
          <DownloadIcon className="h-4 ml-4" />
        </Button>
      </a>
    </Link>
  )), [lesson]);

  return (
    <div className="h-screen flex flex-col">
      <Header className="mb-10" navigation={config.navigation} user={user} />
      <Container className="grow mb-10">
        <Title title={lesson.title} subtitle={course.title} />
        <div className="flex sm:flex-col lg:flex-row">
          <div className="flex flex-grow flex-col sm:mr-0 lg:mr-8">
            <div className="aspect-video w-full bg-neutral-100 mb-10" />
            <div className="border border-neutral-100">
              <div className="p-8 border-b border-neutral-100">
                <h1 className="font-raleway text-2xl mb-4">Lesson description</h1>
                <p className="text-sm whitespace-pre-line">{lesson.description}</p>
              </div>
              <div className="p-8 pb-4">
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
            </div>
          </div>
          <div className="flex-shrink-0 lg:w-1/3 sm:w-full">
            <SidebarSection className="mb-6" title="My tasks">
              {
                completed
                  ? (
                    <Button
                      className="bg-neutral-200 flex justify-center items-center text-green-500"
                      onClick={() => { setCompleted(false); }}
                    >
                      <span className="mr-2">Completed</span>
                      <CheckIcon className="h-4" />
                    </Button>
                  )
                  : (
                    <Button className="bg-neutral-200" onClick={() => { setCompleted(true); }}>
                      Make Lesson Completed
                    </Button>
                  )
              }
            </SidebarSection>
            <SidebarSection title="Discuss">
              <SidebarComments comments={lesson.comments} />
            </SidebarSection>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
