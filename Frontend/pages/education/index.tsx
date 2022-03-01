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

const user = { id: '1' };
const courses = [{
  title: 'bandwidth course',
  description: 'Use the mobile HDD circuit, then you can override the digital firewall!',
  color: '#F28F3B',
  completed: 4,
  lessons: 12,
},
{
  title: 'system love',
  description: 'If we bypass the protocol, we can get to the PCI card through the neural ADP transmitter!',
  color: '#EF233C',
  completed: 8,
  lessons: 32,
},
{
  title: 'monitor ckrack',
  description: 'We need to index the solid state SMTP hard drive!',
  color: '#000000',
  completed: 5,
  lessons: 16,
},
{
  title: 'feed doggy style',
  description: 'If we hack the microchip, we can get to the SQL card through the optical IB matrix!',
  color: '#f20088',
  completed: 0,
  lessons: 8,
},
{
  title: 'firewall',
  description: 'We need to input the multi-byte SAS pixel!',
  color: '#cf75ff',
  completed: 12,
  lessons: 12,
},
{
  title: 'matrix',
  description: "synthesizing the system won't do anything, we need to connect the online PCI transmitter!",
  color: '#5FBFF9',
  completed: 7,
  lessons: 14,
}];

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
