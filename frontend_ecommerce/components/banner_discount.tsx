"use client"
import {Button} from "./ui/button"
import {useRouter} from "next/navigation"

const BannerDiscount = () => {
  const router = useRouter() 

  return (
    <div className="p-11 flex flex-col justify-center items-center bg-primary text-white">
      <h2 className="uppercase font-black text-2xl">Get up to -25% off</h2>
      <div className="mt-6 flex items-center">
        <Button variant={"outline"} onClick={()=>router.push("/shop")} className="text-black dark:text-white">Shop now</Button>
      </div>
    </div>
  )
}

export default BannerDiscount
