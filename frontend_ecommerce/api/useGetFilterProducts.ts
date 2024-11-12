import {IFilter} from "@/app/(routes)/category/interfaces/filters.interface";
import api from "@/configs/axios";
import {IResponseProduct} from "@/interfaces/responses.interface";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetFilterProducts = (filters: IFilter): UseQueryResult<IResponseProduct> => {
  const url = "/api/products?populate=*"

  const products = useQuery<IResponseProduct>({queryFn: async() => {
    const params: typeof filters= {
      ...filters
    }

    const response = await api.get(url, {params});
    return response.data
  }, queryKey: ["products_filters"]});

  return products
}

export default useGetFilterProducts
