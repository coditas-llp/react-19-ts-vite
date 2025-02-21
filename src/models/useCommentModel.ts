import { MODEL_RESOURCES } from './modelResources';
import { useBaseModel } from './useBaseModel';

interface ICommentModelProps {
  postId: string;
  email?: string;
  body?: string;
  name?: string;
  id?: number;
}

export const useCommentModel = (queryKey: string[] = [], appendURL: string = '') => {
  const resourceName = MODEL_RESOURCES.COMMENT_MODEL.resourceName + appendURL;
  const queryKeys = [...MODEL_RESOURCES.COMMENT_MODEL.queryKeys, ...queryKey];

  const { data, isLoading, hasError, ...rest } = useBaseModel<ICommentModelProps[]>({
    apiUrl: resourceName,
    queryKey: queryKeys,
  });
  return { data, isLoading, hasError, ...rest };
};
