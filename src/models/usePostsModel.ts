import { MODEL_RESOURCES } from './modelResources';
import { IBaseModelOptions, useBaseModel } from './useBaseModel';

export interface IPostProps {
  title?: string;
  body?: string;
  pages?: any;
  id?: string;
  img?: string;
}
export interface IPostModelProps {
  pages: IPostProps[];
}

export const queryOptions: IBaseModelOptions = {
  dataFormatter: (data: IPostProps[]) => {
    console.log('>> data', data);
    return data?.map((page: IPostProps) => {
      return {
        ...page,
        img: `https://picsum.photos/id/${page.id}/736/354`,
      };
    });
  },
};

export const usePostsModel = (queryKey: string[] = [], appendURL: string = '', options?: IBaseModelOptions) => {
  console.log('>> options', options);
  const queryKeys = [...MODEL_RESOURCES.POST_MODEL.queryKeys, ...queryKey];
  const resourceName = MODEL_RESOURCES.POST_MODEL.resourceName + appendURL;

  const { data, isLoading, hasError, updateCache, ...rest } = useBaseModel<IPostModelProps[]>({
    apiUrl: resourceName,
    queryKey: queryKeys,
    options,
  });
  console.log('>> data', data);

  const getPostWithImage = (pagePost: IPostProps) => {
    return {
      ...pagePost,
      img: `https://picsum.photos/id/${pagePost.id}/736/354`,
    };
  };

  return { data, isLoading, getPostWithImage, hasError, ...rest };
};
