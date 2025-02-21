import { MODEL_RESOURCES } from './modelResources';
import { useBaseModel } from './useBaseModel';

interface IPostProps {
  title?: string;
  body?: string;
  pages?: any;
  id?: string;
  img: string;
}
export interface IPostModelProps {
  pages: IPostProps[];
}

export const usePostsModel = (queryKey: string[] = [], appendURL: string = '') => {
  const queryKeys = [...MODEL_RESOURCES.POST_MODEL.queryKeys, ...queryKey];
  const resourceName = MODEL_RESOURCES.POST_MODEL.resourceName + appendURL;

  const { data, isLoading, hasError, ...rest } = useBaseModel<IPostModelProps[]>({
    apiUrl: resourceName,
    queryKey: queryKeys,
  });

  const getPostWithImage = (pagePost: IPostProps[]): IPostProps[] => {
    return pagePost.map((post) => ({
      ...post,
      img: `https://picsum.photos/id/${post.id}/536/354`,
    }));
  };

  return { data, isLoading, getPostWithImage, hasError, ...rest };
};
