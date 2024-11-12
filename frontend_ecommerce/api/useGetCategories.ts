import api from "@/configs/axios";
import {IResponseCategories} from "@/interfaces/responses.interface";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetCategories = (): UseQueryResult<IResponseCategories> => {
  const url = "/api/categories?populate=*"

  const categories = useQuery<IResponseCategories>({queryFn: async() => {
    const response = await api.get(url);
    return response.data
  }, queryKey: ["categories"]});


  return categories 
}

export default useGetCategories 
