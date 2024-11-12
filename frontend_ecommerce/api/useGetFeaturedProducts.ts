import api from "@/configs/axios";
import {IResponseProduct} from "@/interfaces/responses.interface";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetFeaturedProducts = (): UseQueryResult<IResponseProduct> => {
  const url = "/api/products?filters[isFeatured][$eq]=true&populate=*"

  const products = useQuery<IResponseProduct>({queryFn: async() => {
    const response = await api.get(url);
    return response.data
  }, queryKey: ["feature_products"]});

  return products
}

export default useGetFeaturedProducts
