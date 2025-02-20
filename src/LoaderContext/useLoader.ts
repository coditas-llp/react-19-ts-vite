import { useContext } from 'react';
import { LoaderContext } from './Context';

export const useLoader = () => {
  const { isLoading, setLoading, hasError, setHasError } = useContext(LoaderContext);
  return { isLoading, setLoading, hasError, setHasError };
};
