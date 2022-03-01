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
};

export type Category = {
  id: number;
  title: string;
  lessons: Lesson[];
};
