import { useMemo } from 'react';
import { Category, LessonType } from '@/types';

type CountsHook = {
  knowledge: number;
  tasks: number;
  knowledgeCount: number;
  tasksCount: number;
};
export const useCounts = (categories: Category[]): CountsHook => {
  const counts = useMemo(() => {
    let knowledgeCount = 0;
    let tasksCount = 0;
    let knowledge = 0;
    let tasks = 0;

    categories.forEach((category) => {
      category.lessons.forEach((lesson) => {
        if (lesson.type == LessonType.TEST) {
          tasksCount += 1;
          if (lesson.completed) tasks += 1;
          return;
        }

        knowledgeCount += 1;
        if (lesson.completed) knowledge += 1;
      });
    });

    return { knowledge, tasks, knowledgeCount, tasksCount };
  }, [categories]);

  return counts;
};
