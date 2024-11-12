"use client"
import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const BannerCarouselImageShop: React.FC = () => {
  return (
      <Carousel
        className="w-full mx-auto max-w-5xl"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image src="/alex-padurariu-1.jpg" alt="" width={3000} height={1000} className="object-cover w-full h-[500px]"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/alex-padurariu-2.jpg" alt="" width={3000} height={1000} className="object-cover w-full h-[500px]"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/alex-padurariu-3.jpg" alt="" width={3000} height={2000} className="object-cover w-full h-[500px]"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/alex-padurariu-4.jpg" alt="" width={3000} height={2000} className="object-cover w-full h-[500px]"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/alex-padurariu-5.jpg" alt="" width={3000} height={2000} className="object-cover w-full h-[500px]"/>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
  )
}

export default BannerCarouselImageShop
