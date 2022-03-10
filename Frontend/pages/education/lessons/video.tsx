import React, { useState } from 'react';
import { NextPage } from 'next';
import { CheckIcon } from '@heroicons/react/outline';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SidebarSection, { SidebarComments } from '@/components/Sidebar';
import { videoLesson, user, course } from '@/utils/fake';
import { LessonFooter } from '@/components/Article';

const Page: NextPage = () => {
  const [completed, setCompleted] = useState(videoLesson.completed);

  return (
    <div className="h-screen flex flex-col">
      <Header className="mb-10" navigation={config.navigation} user={user} />
      <Container className="grow mb-10">
        <Title title={videoLesson.title} subtitle={course.title} />
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-grow flex-col mb-8 sm:mr-0 lg:mr-8 lg:mb-0">
            <div className="aspect-video w-full bg-neutral-100 mb-10" />
            <LessonFooter description={videoLesson.description} files={videoLesson.files} />
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
              <SidebarComments comments={videoLesson.comments} />
            </SidebarSection>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
