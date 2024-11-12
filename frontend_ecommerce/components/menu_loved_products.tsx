import React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Heart} from "lucide-react"
import useLovedProductStore from "@/store/store.loved_product"
import {IProduct} from "@/interfaces/products.interface"
import Image from "next/image"
import {useRouter} from "next/navigation"

const MenuLovedProducts: React.FC = () => {
  const {items} = useLovedProductStore()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        {items.length}
        <Heart strokeWidth={1} className="cursor-pointer mr-4"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-20 mt-6 me-6 max-h-[500px] overflow-y-scroll ">
        <DropdownMenuLabel className="text-lg">You favorite products list</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ul className="flex flex-col gap-2 cursor-pointer max-h-[400px] ">
          {items.slice(0, 6).map((product: IProduct) => (
            <li key={product.id} className="flex items-center space-x-4 px-6">
              {
                product.attributes.image?.data && (
                  <Image src={ process.env.NEXT_PUBLIC_BACKEND_URL+product.attributes.image.data?.[0].attributes.url} width={200} height={200} alt="" className="object-contain w-[100px] h-[100px] rounded-sm"/>
                )
              }

              <div>
                <h3 className="text-lg font-bold text-sm">{product.attributes.name}</h3>
                <p className="text-sm">{product.attributes.description.length >= 30 ? (<>{product.attributes.description.slice(0,29)}...</>) : product.attributes.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer px-6" onClick={()=>router.push("/loved_products")}>All view</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuLovedProducts
