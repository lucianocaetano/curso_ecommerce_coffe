import React from "react"
import Link from "next/link"
import {buttonVariants} from "./ui/button"
import Image from "next/image"

const BannerProducts: React.FC = () => {

  return (
    <div className="my-11 relative text-center w-full">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex flex-col bg-black bg-opacity-70 p-6 text-white">
          <p className="text-2xl">Surmergete en una experiencia unica</p>
          <h1 className="uppercase font-bold text-5xl">El mejor cafe!</h1>
          <Link href="/shop" className={`${buttonVariants()} mt-5`}>Shop Now</Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <Image src="/banner_coffe.png" alt="" height={1000} width={1000}/>
      </div>
    </div>
  )
}

export default BannerProducts
