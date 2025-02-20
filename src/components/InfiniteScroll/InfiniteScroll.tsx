import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useCallback } from 'react';
import { getData } from 'services/apiService';

interface IInfiniteScrollProps {
    children: React.ReactNode;
    refetch: Function;
    setPage: any;
    page: number
    queyKey: string[]
    setData: any;
}

export const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {

    const {
        data,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: props.queyKey,
        queryFn: ({ pageParam = 1 }) => getData(props.queyKey.join('') + `?_page=${pageParam}&_limit=10`),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage?.length === 10 ? allPages.length + 1 : undefined;
        },
    });

    useEffect(() => {
        if (data) {
            props.setData(data.pages.flatMap(page => page));
        }
    }, [data?.pages]);


    const handleScroll = useCallback(async () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
            fetchNextPage()
            props.setPage((prev: number) => prev + 1)
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div>{props.children}</div>
    );
};