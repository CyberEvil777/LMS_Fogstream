export enum LessonType {
  VIDEO = 'video',
  TEST = 'test',
  LECTION = 'lection',
}

export type Lesson = {
  id: number;
  title: string;
  description: string;
  type: LessonType;
  completed: boolean;
  image: string;
  comments?: Comment[];
};

export type User = {
  id: number;
};

export type Category = {
  id: number;
  title: string;
  lessons: Lesson[];
};

export type Comment = {
  id: number;
  user_name: string;
  message: string;
  date: number;
};
