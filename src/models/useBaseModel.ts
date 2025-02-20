import { RefetchOptions, useQuery } from '@tanstack/react-query';
import { useLoader } from 'LoaderContext/useLoader';
import { BaseModel } from 'modelTypes';
import { useEffect } from 'react';
import { addData, deleteData, getData, updateData } from 'services/apiService';
import { queryClient } from '../main';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const useApiCall = (apiUrl: string, queryKey: string[]) => {
  useEffect(() => {}, [apiUrl, queryKey]);
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => await getData(apiUrl),
  });
};

interface IBaseModelProps<T> {
  status: 'error' | 'success' | 'pending';
  data: T;
  error: Error | null;
  isFetching: boolean;
  isLoading: boolean;
  setLoading: boolean;
  hasError: boolean;
  findOneById: <T>(id: string, queryKeys?: string[]) => T;
  filterBy: <T>(filter: string, filterKey: string, queryKeys?: string[]) => T;
  $delete: (data: any, appendURL?: string) => Promise<any>;
  $update: (data: any, appendURL?: string) => Promise<any>;
  $save: (data: any, appendURL?: string) => Promise<any>;
  refetch: (options?: RefetchOptions) => Promise<any>;
}

export const useBaseModel = <T>({ apiUrl, queryKey }: BaseModel): IBaseModelProps<T> => {
  const { isLoading, setLoading, hasError, setHasError } = useLoader();
  const { status, data, error, isFetching, refetch } = useApiCall(apiUrl, queryKey);

  useEffect(() => {
    setHasError(status === 'error');
    setLoading(status === 'pending');
  }, [status, apiUrl, queryKey]);

  const findOneById = <T>(id: string, queryKeys: string[] = queryKey): T =>
    ((queryClient.getQueryData(queryKeys) as [])?.find((item: any) => `${item.id}` === `${id}`) as T) || ({} as T);

  const filterBy = <T>(filter: string, filterKey: string, queryKeys: string[] = queryKey): T =>
    ((queryClient.getQueryData(queryKeys) as [])?.filter((item: any) => item[filterKey]?.includes(filter)) as T) ||
    ([] as T);

  const $save = async (data: any, appendURL: string = '') => {
    const response = await addData(`${apiUrl}${appendURL}`, data);
    queryClient.invalidateQueries({ queryKey });
    return response;
  };

  const $update = async (data: any, appendURL: string = '') => {
    const response = await updateData(`${apiUrl}${appendURL}`, data);
    queryClient.invalidateQueries({ queryKey });
    return response;
  };

  const $delete = async (data: any, appendURL: string = '') => {
    const response = await deleteData(`${apiUrl}${appendURL}`, data);
    queryClient.invalidateQueries({ queryKey });
    return response;
  };
  return {
    status,
    data,
    error,
    isFetching,
    isLoading,
    setLoading,
    hasError,
    findOneById,
    filterBy,
    $delete,
    $update,
    $save,
    refetch,
  } as IBaseModelProps<T>;
};
