"use client"
import useGetFeaturedProducts from "@/api/useGetFeaturedProducts"
import {IProduct} from "@/interfaces/products.interface"
import React from "react"
import SkeletonCard from "./loading_card"
import {CarouselItem} from "./ui/carousel"
import CardProduct from "./card_product"
import CarouselProvider from "./carousel_provider"

const FeatureProducts: React.FC = () => {
  const {data: products, isLoading} = useGetFeaturedProducts()

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-8 sm:px-24">
      <h3 className="px-11 text-4xl font-bold my-5">
        Featured Products
      </h3>
      <div className="mx-auto max-w-[600px]">
        <CarouselProvider>
          {isLoading ? (
            <>
              <CarouselItem className="max-w-[300px]">
                <SkeletonCard/>
              </CarouselItem>
              <CarouselItem className="max-w-[300px]">
                <SkeletonCard/>
              </CarouselItem>
              <CarouselItem className="max-w-[300px]">
                <SkeletonCard/>
              </CarouselItem>
            </>
          ) : (
            products?.data.map((product: IProduct) => (
              <CarouselItem key={product.id} className="max-w-[300px] mx-2">
                <CardProduct product={product}/>
              </CarouselItem>
            ))
          )}
        </CarouselProvider>
      </div>
    </div>
  )
}

export default FeatureProducts
