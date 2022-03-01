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
import { LessonType } from '@/types';
import { useCounts } from '@/utils/hooks';
import { ButtonToggler } from '@/components/Button';

const user = { id: '1' };
const course = {
  title: 'Firewall Course',
  description: 'We need to input the multi-byte SAS pixel!',
  color: '#cf75ff',
  complete: 12,
  lessons: 12,
};

const categoriesFromDB = [
  {
    id: 0,
    title: 'Design. Main process',
    lessons: [
      {
        id: 1,
        title: 'Transmitter Battle',
        description: 'Try to transmit the JBOD alarm, maybe it will index the back-end sensor!',
        type: LessonType.VIDEO,
        completed: false,
        image: '/lessons/lesson6.svg',
      },
      {
        id: 2,
        title: 'Alarm New Beginning',
        description: "You can't index the port without indexing the multi-byte JSON system!",
        type: LessonType.VIDEO,
        completed: false,
        image: '/lessons/lesson2.svg',
      },
      {
        id: 3,
        title: 'Array Index',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, modi possimus! Vel accusantium veritatis vitae obcaecati, eaque aliquid ea? Suscipit at nemo aut labore molestiae porro sapiente enim? Ipsa, commodi?',
        type: LessonType.TEST,
        completed: false,
        image: '/lessons/lesson3.svg',
      },
      {
        id: 4,
        title: 'Protocol Handling',
        description: "I'll hack the 1080p RAM pixel, that should monitor the SSL bus!",
        type: LessonType.VIDEO,
        completed: true,
        image: '/lessons/lesson4.svg',
      },
      {
        id: 5,
        title: 'Application Building',
        description: "You can't hack the port without hacking the mobile RSS monitor!",
        type: LessonType.VIDEO,
        completed: false,
        image: '/lessons/lesson5.svg',
      },
      {
        id: 6,
        title: 'Capacitor',
        description: "connecting the bus won't do anything, we need to input the haptic SAS feed!",
        type: LessonType.VIDEO,
        completed: true,
        image: '/lessons/lesson7.svg',
      },
    ],
  },
  {
    id: 1,
    title: 'Design. New Experience',
    lessons: [
      {
        id: 1,
        title: 'Transmitter',
        description: "indexing the alarm won't do anything, we need to transmit the primary RAM port!",
        type: LessonType.VIDEO,
        completed: false,
        image: '/lessons/lesson8.svg',
      },
      {
        id: 2,
        title: 'Bandwidth Bruh',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, modi possimus! Vel accusantium veritatis vitae obcaecati, eaque aliquid ea? Suscipit at Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, modi possimus! Vel accusantium veritatis vitae obcaecati, eaque aliquid ea? Suscipit at nemo aut labore molestiae porro sapiente enim? Ipsa, commodi? nemo aut labore molestiae porro sapiente enim? Ipsa, commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, modi possimus! Vel accusantium veritatis vitae obcaecati, eaque aliquid ea? Suscipit at nemo aut labore molestiae porro sapiente enim? Ipsa, commodi?',
        type: LessonType.VIDEO,
        completed: true,
        image: '/lessons/lesson1.svg',
      },
      {
        id: 3,
        title: 'Bandwidth',
        description: "I'll copy the haptic HTTP firewall, that should driver the SSL panel!",
        type: LessonType.LECTION,
        completed: true,
        image: '/lessons/lesson5.svg',
      },
      {
        id: 4,
        title: 'Sensor',
        description: 'The THX bandwidth is down, navigate the cross-platform array so we can input the XSS firewall!',
        type: LessonType.TEST,
        completed: false,
        image: '/lessons/lesson2.svg',
      },
      {
        id: 5,
        title: 'Feed',
        description: 'Try to generate the SQL bandwidth, maybe it will navigate the online circuit!',
        type: LessonType.TEST,
        completed: false,
        image: '/lessons/lesson3.svg',
      },
      {
        id: 6,
        title: 'Protocol',
        description: 'Use the bluetooth CSS pixel, then you can program the back-end application!',
        type: LessonType.LECTION,
        completed: true,
        image: '/lessons/lesson4.svg',
      },
    ],
  },
];

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
            <div className="flex flex-col p-6 bg-neutral-50 mb-6">
              <h1 className="font-raleway mb-4">Progress</h1>
              <StatusLabel value={knowledge} max={knowledgeCount} color="#22c55e" label="Completed Lessons" className="mb-5" />
              <StatusLabel value={tasks} max={tasksCount} color="#ffad00" label="Completed Homework" />
            </div>
            <div className="flex flex-col p-6 bg-neutral-50">
              <h1 className="font-raleway mb-4">Filter</h1>
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
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
