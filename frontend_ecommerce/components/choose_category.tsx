"use client"
import React from "react"
import useGetCategories from "@/api/useGetCategories"
import CarouselProvider from "./carousel_provider"
import {CarouselItem} from "./ui/carousel"
import SkeletonCard from "./loading_card"
import {ICategory} from "@/interfaces/categories.interface"
import CardCategory from "./card_category"

const ChooseCategory: React.FC = () => {
  const {data: categories, isLoading} = useGetCategories()

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-8 sm:px-24">
      <h3 className="px-11 text-4xl font-bold sm:bp-8 mb-8">
        Choose category
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
            categories?.data.map((category: ICategory) => (
              <CarouselItem key={category.id} className="max-w-[300px] pl-0">
                <CardCategory category={category}/>
              </CarouselItem>
            ))
          )}

        </CarouselProvider>

      </div>
    </div>
  )
}

export default ChooseCategory
