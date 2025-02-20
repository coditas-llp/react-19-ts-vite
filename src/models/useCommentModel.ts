import { useBaseModel } from "./useBaseModel";

interface ICommentModelProps {

    postId: string;
    email?: string;
    body?: string;
    name?: string;
    id?: number;

}

export const useCommentModel = (queryKey: string[] = [], appendURL: string = '') => {

    const resourceName = 'comments' + appendURL;
    const queryKeys = ['comments'+appendURL, ...queryKey]

    const { data, isLoading, hasError, ...rest } = useBaseModel<ICommentModelProps[]>({ apiUrl: resourceName, queryKey: queryKeys });
    return { data, isLoading, hasError, ...rest }
}