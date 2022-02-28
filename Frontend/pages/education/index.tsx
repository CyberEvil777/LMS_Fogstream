import React from 'react';
import { NextPage } from 'next';
import Header from '@/components/Header';
import { config } from '@/config';
import Container from '@/layouts/Container';
import Course from '@/components/Course';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Panel from '@/components/Panel';

const user = { id: '1' };
const courses = [{
  title: 'bandwidth course',
  description: 'Use the mobile HDD circuit, then you can override the digital firewall!',
  color: '#F28F3B',
  complete: 4,
  lessons: 12,
},
{
  title: 'system love',
  description: 'If we bypass the protocol, we can get to the PCI card through the neural ADP transmitter!',
  color: '#EF233C',
  complete: 8,
  lessons: 32,
},
{
  title: 'monitor ckrack',
  description: 'We need to index the solid state SMTP hard drive!',
  color: '#000000',
  complete: 5,
  lessons: 16,
},
{
  title: 'feed doggy style',
  description: 'If we hack the microchip, we can get to the SQL card through the optical IB matrix!',
  color: '#f20088',
  complete: 0,
  lessons: 8,
},
{
  title: 'firewall',
  description: 'We need to input the multi-byte SAS pixel!',
  color: '#cf75ff',
  complete: 12,
  lessons: 12,
},
{
  title: 'matrix',
  description: "synthesizing the system won't do anything, we need to connect the online PCI transmitter!",
  color: '#5FBFF9',
  complete: 7,
  lessons: 14,
}];

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
      <div className="grid gap-14 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((props) => (<Course key={props.title} {...props} />))}
      </div>
    </Container>
    <Footer />
  </div>
);

export default Page;
