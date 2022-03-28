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
import { user, course, lectionLesson } from '@/utils/fake';
import { LessonFooter } from '@/components/Article';

const Page: NextPage = () => {
  const [completed, setCompleted] = useState(lectionLesson.completed);

  return (
    <div className="h-screen flex flex-col">
      <Header className="mb-10" navigation={config.navigation} user={user} />
      <Container className="grow mb-10">
        <Title className="mb-5" title={lectionLesson.title} subtitle={course.title} />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-grow sm:mr-0 mb-8 lg:mr-8 sm:mb-8 lg:mb-0">
            <div
              className="border-4 border-neutral-100 border-dashed rounded-xl
                  text-center mb-10 relative"
            >
              <input type="file" className="w-full h-full left-0 top-0 absolute opacity-0" />
              <div className="px-10 py-12 xl:py-24">
                <h3 className="font-raleway text-neutral-300">Upload file...</h3>
              </div>
            </div>
            <LessonFooter description={lectionLesson.description} files={lectionLesson.files} />
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
              <SidebarComments comments={lectionLesson.comments} />
            </SidebarSection>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
