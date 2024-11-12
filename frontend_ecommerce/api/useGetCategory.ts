import api from "@/configs/axios";
import {IResponseCategories} from "@/interfaces/responses.interface";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetCategory = (slug: string): UseQueryResult<IResponseCategories> => {
  const url = "/api/categories?populate=*"

  const category = useQuery<IResponseCategories>({queryFn: async() => {
    const params: {"filters[slug][$eq]": string} = {
      "filters[slug][$eq]": slug 
    }
    const response = await api.get(url, {params});
    return response.data
  }, queryKey: ["category"]});

  return category 
}

export default useGetCategory 
