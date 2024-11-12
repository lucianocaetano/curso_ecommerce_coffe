"use client"
import React from "react"
import {buttonVariants} from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

const CarouselTextBanner: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <div className="relative min-h-[400px] min-h-[300px] w-full">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Carousel
          plugins={[plugin.current]}
          className="w-full flex justify-center"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent >
            <CarouselItem className="max-w-xl">
              <Image src="/cafe1.png" width={800} height={900} alt="" className="object-cover min-h-[400px] max-h-[400px] max-h-[300px] w-full"/>
            </CarouselItem>
            <CarouselItem className="max-w-xl">
              <Image src="/cage2.png" width={800} height={900} alt="" className="object-cover min-h-[400px] max-h-[400px] max-h-[300px] w-full"/>
            </CarouselItem>
            <CarouselItem className="max-w-xl">
              <Image src="/cafe3.png" width={800} height={900} alt="" className="object-cover min-h-[400px] max-h-[400px] max-h-[300px] w-full"/>
            </CarouselItem>
            <CarouselItem className="max-w-xl">
              <Image src="/cafe4.png" width={800} height={900} alt="" className="object-cover min-h-[400px] max-h-[400px] max-h-[300px] w-full"/>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute w-full h-full text-white bg-black bg-opacity-60 z-10 mx-auto flex flex-col items-center justify-center">
        <div className="p-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold darktracking-tight lg:text-5xl">
            Discover our latest <span className="font-extrabold">coffee</span> offerings
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Experience the best coffee in town, with our wide selection of blends, coffees, and beans.
          </p>
          <Link href="/shop" className={`${buttonVariants()} mt-4 px-8 py-4 rounded`}>Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselTextBanner
