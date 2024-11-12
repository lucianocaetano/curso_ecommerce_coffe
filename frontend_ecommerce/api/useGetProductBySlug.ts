import api from "@/configs/axios";
import {IProduct} from "@/interfaces/products.interface";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetFilterProducts = (slug: string): UseQueryResult<IProduct> => {
  const url = "/api/products?populate=*"

  const product = useQuery<IProduct>({queryFn: async() => {
    const params: { "filters[slug][$eq]": string} = {
      "filters[slug][$eq]": slug
    }

    const response = await api.get(url, {params});
    return response.data.data[0]
  }, queryKey: ["product_slug"]});

  return product
}

export default useGetFilterProducts
