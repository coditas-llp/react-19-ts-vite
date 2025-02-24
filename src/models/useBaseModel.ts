import { RefetchOptions, useQuery } from '@tanstack/react-query';
import { useLoader } from 'LoaderContext/useLoader';
import { useEffect } from 'react';
import { addData, deleteData, getData, updateData } from 'services/apiService';
import { queryClient } from '../main';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export interface IBaseModelOptions {
  dataFormatter?: any;
}
export interface IBaseModelProps {
  queryKey: string[];
  apiUrl: string;
  options?: IBaseModelOptions;
}
interface IBaseModelReturnProps<T> {
  status: 'error' | 'success' | 'pending';
  data: T;
  error: Error | null;
  isFetching: boolean;
  isLoading: boolean;
  setLoading: boolean;
  hasError: boolean;
  findOneById: <T>(id: string, queryKeys?: string[]) => T;
  filterBy: <T>(filter: string, filterKey: string, queryKeys?: string[]) => T;
  $delete: <T>(data: T, appendURL?: string) => Promise<any>;
  $update: <T>(data: T, appendURL?: string) => Promise<any>;
  $save: <T>(data: T, appendURL?: string) => Promise<any>;
  refetch: (options?: RefetchOptions) => Promise<any>;
  updateCache: <T>(newData: T, cb: <T>(data: T) => void) => void;
}

const useApiCall = (apiUrl: string, queryKey: string[], options?: IBaseModelOptions) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => await getData(apiUrl, options),
  });
};

export const useBaseModel = <T>({ apiUrl, queryKey, options }: IBaseModelProps): IBaseModelReturnProps<T> => {
  const { isLoading, setLoading, hasError, setHasError } = useLoader();
  const { status, data, error, isFetching, refetch } = useApiCall(apiUrl, queryKey, options);
  useEffect(() => {
    setHasError(status === 'error');
    setLoading(status === 'pending');
  }, [status, apiUrl, queryKey]);

  const findOneById = <T>(id: string, queryKeys: string[] = queryKey): T =>
    ((queryClient.getQueryData(queryKeys) as [])?.find((item: any) => `${item.id}` === `${id}`) as T) || ({} as T);

  const filterBy = <T>(filter: string, filterKey: string, queryKeys: string[] = queryKey): T =>
    ((queryClient.getQueryData(queryKeys) as [])?.filter((item: any) => item[filterKey]?.includes(filter)) as T) ||
    ([] as T);

  const updateCache = (key: string, cb: any) => {
    queryClient.setQueryData(queryKey, (oldData: any) => {
      console.log('>> oldData', oldData);
      console.log('>> key', key);
      if (oldData) return { ...oldData, [key]: cb(oldData[key]) };
    });
  };

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
    updateCache,
  } as IBaseModelReturnProps<T>;
};
