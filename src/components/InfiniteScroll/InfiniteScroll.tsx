import { useInfiniteQuery } from '@tanstack/react-query';
import { IBaseModelOptions } from 'models/useBaseModel';
import React, { useEffect, useCallback } from 'react';
import { getData } from 'services/apiService';

interface IInfiniteScrollProps {
  children: React.ReactNode;
  refetch: Function;
  page: number;
  queyKey: string[];
  setData: Function;
  options: IBaseModelOptions;
  setPage: Function;
}

export const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: props.queyKey,
    queryFn: async ({ pageParam = 1 }) => {
      const data = await getData(props.queyKey.join('') + `?_page=${pageParam}&_limit=10`, props.options);
      return data as { length: number };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: { length: number }, allPages: { length: number }) => {
      return lastPage?.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (data) {
      props.setData(data.pages.flatMap((page) => page));
    }
  }, [data?.pages]);

  const handleScroll = useCallback(async () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      fetchNextPage();
      props.setPage((prev: number) => prev + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div>{props.children}</div>;
};
