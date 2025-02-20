import { useBaseModel } from "./useBaseModel";
export interface IPostModelProps {
    title?: string;
    body?: string;
}

export const usePostsModel = (queryKey: string[] = [], appendURL: string = '') => {

    const queryKeys = ['posts', ...queryKey]
    const resourceName = 'posts' + appendURL;


    const { data, isLoading, hasError, ...rest } = useBaseModel<IPostModelProps[]>({ apiUrl: resourceName, queryKey: queryKeys });

    return { data, isLoading, hasError, ...rest }
}