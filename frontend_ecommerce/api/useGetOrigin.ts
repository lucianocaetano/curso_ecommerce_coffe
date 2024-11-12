import api from "@/configs/axios";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetOriginProduct = (): UseQueryResult<Array<string>> => {
  const url = "/api/content-type-builder/content-types/api::product.product"

  const origins = useQuery<Array<string>>({queryFn: async() => {
    const response = await api.get(url);

    return response.data.data.schema.attributes.origin.enum
  }, queryKey: ["origin_product"]});

  return origins
}

export default useGetOriginProduct 