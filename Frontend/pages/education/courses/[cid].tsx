import React, { useMemo, useState } from 'react';
import { NextPage } from 'next';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import LessonComponent from '@/components/Lesson';
import { StatusLabel } from '@/components/Status';
import { useCounts } from '@/utils/hooks';
import { ButtonToggler } from '@/components/Button';
import { categoriesFromDB, user, course } from '@/utils/fake';
import SidebarSection from '@/components/Sidebar';

const lessonsVariants: Variants = {
  initial: { opacity: 0, x: '-50px' },
  whileInView: { opacity: 1, x: '0' },
};

const Page: NextPage = () => {
  const [categories, setCategories] = useState(categoriesFromDB);
  const { knowledge, tasks, tasksCount, knowledgeCount } = useCounts(categoriesFromDB);

  const categoryElements = useMemo(() => categories.map((category, index) => (
    <div key={category.id}>
      <div className="flex items-end font-raleway mb-6">
        <span className="text-7xl mr-4">{`${index + 1}.`}</span>
        <span className="text-2xl pb-1.5">{category.title}</span>
      </div>
      <div className="flex flex-col">
        {category.lessons.map((lesson, i) => (
          <motion.div
            key={lesson.id}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={lessonsVariants}
            transition={{ type: 'spring', damping: 20, mass: 0.5 }}
          >
            <LessonComponent className="mb-8" lesson={lesson} index={`${index + 1}. ${i + 1}`} />
          </motion.div>
        ))}
      </div>
    </div>
  )), [categories]);

  return (
    <div className="h-screen flex flex-col">
      <Header className="mb-10" navigation={config.navigation} user={user} />
      <Container className="grow mb-10">
        <Title title={course.title} subtitle={course.description} />
        <div className="flex sm:flex-col lg:flex-row">
          <div className="flex flex-grow flex-col sm:mr-0 lg:mr-8">
            {categoryElements}
          </div>
          <div className="flex-shrink-0 lg:w-1/3 sm:w-full">

            <SidebarSection title="Progress" className="mb-6">
              <StatusLabel value={knowledge} max={knowledgeCount} color="#22c55e" label="Completed Lessons" className="mb-5" />
              <StatusLabel value={tasks} max={tasksCount} color="#ffad00" label="Completed Homework" />
            </SidebarSection>
            <SidebarSection title="Filter">
              <div className="mb-4 text-sm">
                <span>Filter Lessons by</span>
              </div>
              <ButtonToggler
                btnClassName="bg-neutral-200 w-1/3"
                classNameActive="bg-black text-white w-1/3"
                buttons={[
                  { text: 'All', id: 'all' },
                  { text: 'Completed', id: 'completed' },
                  { text: 'Non-completed', id: 'non-completed' },
                ]}
                active="all"
                onChoose={({ id }) => {
                  switch (id) {
                    case 'all': {
                      setCategories(categoriesFromDB);
                      break;
                    }
                    case 'completed': {
                      setCategories(categoriesFromDB.map((category) => ({
                        ...category,
                        lessons: category.lessons.filter(({ completed }) => completed),
                      })));
                      break;
                    }
                    case 'non-completed': {
                      setCategories(categoriesFromDB.map((category) => ({
                        ...category,
                        lessons: category.lessons.filter(({ completed }) => !completed),
                      })));
                      break;
                    }
                  }
                }}
              />
            </SidebarSection>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
