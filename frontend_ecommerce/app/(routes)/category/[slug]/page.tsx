"use client"

import useGetCategory from "@/api/useGetCategory"
import useGetFilterProducts from "@/api/useGetFilterProducts"
import {IProduct} from "@/interfaces/products.interface"
import {useParams} from "next/navigation"
import React, {useEffect, useState} from "react"
import FilterOrigin from "../components/filter-origin"
import CardProduct from "@/components/card_product"
import {IFilter} from "../interfaces/filters.interface"
import FilterTypes from "../components/filter-type"
import SkeletonCard from "@/components/loading_card"

const Page: React.FC = () => {
  const params = useParams()

  const [filters, setFilters] = useState<IFilter>(
    {
      "filters[origin][$eq]": undefined,
      "filters[category][slug][$eq]": params.slug as string
    }
  )

  const {data: products, isLoading, refetch} = useGetFilterProducts(filters)
  const {data: category, isLoading: isLoadingCategory} = useGetCategory(params.slug as string)

  const handleEventFilter = (filters_params: IFilter): void => {
    setFilters({ ...filters, ...filters_params })
  }

  useEffect(()=>{
    refetch()
  }, [filters])

  return (
    <div className="max-w-6xl py-4 mx-auto px-2">
      <h1 className="mb-4 text-2xl font-bold inline-flex">{category?.data?.[0].attributes.name}</h1>
      <hr />
      <div className="flex">
        <div className="w-[150px] flex flex-col gap-2 p-4 max-sm:hidden">
          <FilterOrigin handleEventFilter={handleEventFilter}/>
          <FilterTypes handleEventFilter={handleEventFilter}/>
        </div>
        <div className="flex justify-center w-full">
          <div className="pt-4 ml-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              isLoading && isLoadingCategory? (
                <>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                </>
              ) : (
              products?.data.map((product: IProduct) => (
                <CardProduct key={product.id}  product={product}/>
              ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
