import React from 'react';
import { NextPage } from 'next';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Course from '@/components/Course';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Panel from '@/components/Panel';
import Link from 'next/link';
import { courses, user } from '@/utils/fake';

const courseVariants: Variants = {
  initial: { opacity: 0, y: '-50px' },
  animate: { opacity: 1, y: '0' },
};

const Page: NextPage = () => (
  <div className="h-screen flex flex-col">
    <Header className="mb-10" navigation={config.navigation} user={user} />
    <Container className="grow mb-10">
      <Panel
        title="Education"
        description="This is an education section. Here you can see all your purchased courses, in any time you can come and start to learn."
        className="mb-10"
        image="/designer.svg"
      />
      <Title title="Courses" subtitle="Your available courses are here" />
      <motion.div
        className="grid gap-14 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
        transition={{ staggerChildren: 0.1 }}
        initial="initial"
        animate="animate"
      >
        {courses.map((props) => (
          <Link passHref href="/education/courses/1" key={props.title}>
            <motion.a
              variants={courseVariants}
              transition={{ type: 'spring', damping: 20 }}
            >
              <Course {...props} />
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </Container>
    <Footer />
  </div>
);

export default Page;
