import { Course } from '@/types';
import fetcher from '@/utils/fetch';
import config from 'config';
import useSWR from 'swr';
import urljoin from 'url-join';

export type LoginValues = {
  username: string;
  password: string;
};

export const useCourses = () => {
  const url = urljoin(config.api, 'course/');
  const data = useSWR<Course[]>(
    url,
    fetcher,
  );

  return data;
};
