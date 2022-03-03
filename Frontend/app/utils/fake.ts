import { LessonType } from '@/types';

export const user = { id: 1 };

export const course = {
  title: 'Firewall Course',
  description: 'We need to input the multi-byte SAS pixel!',
  color: '#cf75ff',
  complete: 12,
  lessons: 12,
};

export const categoriesFromDB = [
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

export const courses = [{
  title: 'bandwidth course',
  description: 'Use the mobile HDD circuit, then you can override the digital firewall!',
  color: '#F28F3B',
  completed: 4,
  lessons: 12,
  image: '/lessons/lesson7.svg',
},
{
  title: 'system love',
  description: 'If we bypass the protocol, we can get to the PCI card through the neural ADP transmitter!',
  color: '#EF233C',
  completed: 8,
  lessons: 32,
  image: '/lessons/lesson8.svg',
},
{
  title: 'monitor ckrack',
  description: 'We need to index the solid state SMTP hard drive!',
  color: '#000000',
  completed: 5,
  lessons: 16,
  image: '/lessons/lesson3.svg',
},
{
  title: 'feed doggy style',
  description: 'If we hack the microchip, we can get to the SQL card through the optical IB matrix!',
  color: '#f20088',
  completed: 0,
  lessons: 8,
  image: '/lessons/lesson4.svg',
},
{
  title: 'firewall',
  description: 'We need to input the multi-byte SAS pixel!',
  color: '#cf75ff',
  completed: 12,
  lessons: 12,
  image: '/lessons/lesson5.svg',
},
{
  title: 'matrix',
  description: "synthesizing the system won't do anything, we need to connect the online PCI transmitter!",
  color: '#5FBFF9',
  completed: 7,
  lessons: 14,
  image: '/lessons/lesson6.svg',
}];

export const lesson = {
  id: 1,
  title: 'Transmitter Battle',
  description: 'Try to transmit the JBOD alarm, maybe it will index the back-end sensor! Lorem ipsum dolor,\nsit amet consectetur adipisicing elit. Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur,\n quae autem molestias exercitationem excepturi deserunt perferendis aut? Lorem ipsum dolor, sit amet\n consectetur adipisicing elit. Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur, quae autem molestias exercitationem excepturi deserunt perferendis aut? Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur, quae autem molestias exercitationem\n excepturi deserunt perferendis aut?',
  type: LessonType.VIDEO,
  completed: false,
  image: '/lessons/lesson6.svg',
  comments: [
    {
      id: 1,
      user_name: 'You',
      message: 'Hello, I don\'t understand that thing. Can you help?awdawd awipod aiuwj daw',
      date: 1646319740761,
    },
    {
      id: 2,
      user_name: 'Teacher 1',
      message: 'Yep, what did happen?',
      date: 1646319750086,
    },
    {
      id: 3,
      user_name: 'You',
      message: 'Hello, I don\'t understand that thing. Can you help?awdawd awipod aiuwj daw',
      date: 1646319740761,
    },
    {
      id: 4,
      user_name: 'Teacher 1',
      message: 'Yep, what did happen?',
      date: 1646319750086,
    },
    {
      id: 5,
      user_name: 'You',
      message: 'Hello, I don\'t understand that thing. Can you help?awdawd awipod aiuwj daw',
      date: 1646319740761,
    },
    {
      id: 6,
      user_name: 'Teacher 1',
      message: 'Yep, what did happen?',
      date: 1646319750086,
    },
  ],
  files: [
    {
      id: 1,
      title: 'awjndoiwa jdioawj dioawjd ioaw',
      description: 'awd jwaoid jawiod jawiodj awiodj awoidj awiodj awd',
      url: '/vercel.svg',
    },
    {
      id: 2,
      title: 'AWawdjkaiofjesoifjsf',
      description: 'awd jwaoid jawiod jawiodj awiodj awoidj awiodj awd',
      url: '/favicon.ico',
    },
    {
      id: 3,
      title: 'AWawdjkaiofjesoifjsf',
      description: 'awd jwaoid jawiod jawiodj awiodj awoidj awiodj awd',
      url: '/favicon.ico',
    },
    {
      id: 4,
      title: 'AWawdjkaiofjesoifjsf',
      description: 'awd jwaoid jawiod jawiodj awiodj awoidj awiodj awd',
      url: '/favicon.ico',
    },
  ],
};
