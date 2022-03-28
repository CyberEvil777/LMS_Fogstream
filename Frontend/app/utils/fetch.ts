import Cookies from 'js-cookie';

const fetcher = (url: string, options: RequestInit) => (
  fetch(url, {
    headers: {
      Authorization: `JWT ${Cookies.get('access_token') ?? ''}`,
      ...options?.headers,
    },
    ...options,
  }).then((res) => res.json())
);

export default fetcher;
