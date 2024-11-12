"use client"
import {ShoppingCart} from "lucide-react"
import {useRouter} from "next/navigation"
import React from "react"
import MenuList from "./menu_list"
import ModeToggle from "./mode_toggle"
import useStoreCart from "@/store/store.cart"
import MenuLovedProducts from "./menu_loved_products"

const Navbar: React.FC = () => {
  const router = useRouter()
  const { items } = useStoreCart()

  return (
    <nav>
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:mx-w-4xl md:max-w-6x md:max-w-6xl">
        <h1 className="text-3xl" onClick={()=>router.push("/")}>
          Ecommerce
          <span className="font-bold">Coffe</span>
        </h1>

        <div className="items-center justify-between max-md:hidden">
          <MenuList/>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <div className="flex">
            {items.length}
            <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={()=>{router.push("/cart")}}/>
          </div>
          
          <MenuLovedProducts/>
          <ModeToggle/>
        </div>
      </div>
      <div className="md:hidden flex justify-center">
        <h1><MenuList/></h1>
      </div>

    </nav>

  )
}

export default Navbar
