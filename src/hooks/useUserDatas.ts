import { loadData } from '@/utils';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [data, setData] = useState<UserData | undefined | null>(undefined);

  const getData = async () => {
    const value = await loadData();
    if (value) {
      setData(JSON.parse(value));
    } else {
      setData(null);
    }
  };

  const mutate = async () => {
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, mutate };
};
