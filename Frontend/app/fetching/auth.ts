import fetcher from '@/utils/fetch';
import config from 'config';
import useSWR from 'swr';
import urljoin from 'url-join';

export type LoginValues = {
  username: string;
  password: string;
};

export const login = async ({ username, password }: LoginValues): Promise<boolean> => {
  const url = urljoin(config.api, 'login/');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });

  return response.status == 200;
};

export const useUser = () => {
  const url = urljoin(config.api, 'me/');
  const { data, ...rest } = useSWR<Record<string, string>>(
    url,
    fetcher,
    { revalidateOnFocus: false },
  );

  return {
    data: !!data?.Success,
    ...rest,
  };
};
