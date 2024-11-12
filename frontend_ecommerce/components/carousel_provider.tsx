"use client"
import React from "react"
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const CarouselProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000 })
  )

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full min-h-full min-h-[300px] flex justify-center"
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
            {children}
        </CarouselContent>
        <CarouselNext className="max-sm:hidden"/>
        <CarouselPrevious className="max-sm:hidden"/>
      </Carousel>
    </div> 
  )

}

export default CarouselProvider 
