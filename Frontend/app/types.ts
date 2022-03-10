export type Course = {
  title: string;
  shortDescription: string;
  description: string;
  color: string;
  completed: number;
  lessons: number;
  image: string;
};

export enum LessonType {
  VIDEO = 'video',
  TEST = 'test',
  LECTION = 'lection',
}

export type ShortLesson = {
  id: number;
  title: string;
  description: string;
  type: LessonType;
  completed: boolean;
  comments?: Comment[];
  files?: Attached[];
};

export type LessonVideo = ShortLesson & {
  type: LessonType.VIDEO;
  video: string;
};

export type LessonLection = ShortLesson & {
  type: LessonType.LECTION;
  content: string;
};

export type LessonTest = ShortLesson & {
  type: LessonType.TEST;
};

export type Lesson = LessonVideo | LessonLection | LessonTest;

export type Attached = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type User = {
  id: number;
};

export type Category = {
  id: number;
  title: string;
  lessons: ShortLesson[];
};

export type Comment = {
  id: number;
  user_name: string;
  message: string;
  date: number;
};
