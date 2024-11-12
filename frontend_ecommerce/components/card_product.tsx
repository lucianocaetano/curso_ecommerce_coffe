import React, {useEffect, useState} from "react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type {IProduct} from "@/interfaces/products.interface"
import Image from "next/image"
import Link from "next/link"
import {Heart} from "lucide-react"
import useLovedProductStore from "@/store/store.loved_product"
import { useToast } from "@/hooks/use-toast"

const CardProduct: React.FC<{product: IProduct}> = ({product}) => {
  const {toast} = useToast()

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const {getItem: getFavoriteProduct, addItem: addFavoriteProduct, removeItem} = useLovedProductStore()

  const handleAddFavoriteProduct = (product: IProduct) => {
    toast({title: "Product added to loved products list successfully", variant: "successfully"})
    addFavoriteProduct(product)
  }

  const handleRemoveFavoriteProduct = (id: number) => {
    removeItem(id)
  }

  useEffect(()=>{
    if(product){
      const data = getFavoriteProduct(product.id)
      if(data){
        setIsFavorite(true)
      }else{
        setIsFavorite(false)
      }
    }
  })

  return (
    <Card className="h-[200px] flex flex-col justify-between w-[300px]">
      <CardHeader className="relative h-[140px]">
        <div className="absolute top-0 left-0 w-full h-full z-10 p-2 ">
          {
            product.attributes.image?.data && (
              <Image src={ process.env.NEXT_PUBLIC_BACKEND_URL+product.attributes.image.data?.[0].attributes.url} width={200} height={200} alt="" className="object-cover w-full h-full rounded-t-md"/>
            )
          }
        </div>
        <CardContent className="w-full h-full text-white z-10 mx-auto bg-black bg-opacity-70 h-full flex flex-col gap-2 p-4">
          <CardTitle className="font-bold">{product.attributes.name}</CardTitle>
          <CardDescription className="text-white">{product.attributes.description.slice(0, 40)} {product.attributes.description.length > 40 && (<>...</>)}</CardDescription>
        </CardContent>
      </CardHeader>

      <CardFooter className="flex justify-between items-center">
        <p>${product.attributes.price}</p>
        <div className="flex gap-4 items-center">
          {
            isFavorite ? (
              <Heart strokeWidth={1} color="red" onClick={()=>handleRemoveFavoriteProduct(product.id)} className="cursor-pointer me-2"/>
            ) : (
              <Heart strokeWidth={1} onClick={()=>handleAddFavoriteProduct(product)} className="cursor-pointer me-2"/>
            )
          }
          <Link className={buttonVariants()} href={`/product/${product.attributes.slug}`}>
            Ir
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardProduct
