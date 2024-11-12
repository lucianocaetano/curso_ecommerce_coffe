import React, {useEffect, useState} from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { IProductToCart } from "@/store/store.cart"
import {Heart, Delete} from "lucide-react"
import useStoreCart from "@/store/store.cart"
import useLovedProductStore from "@/store/store.loved_product"

const CardCart: React.FC<{product: IProductToCart}> = ({product}) => {
  const {removeItem} = useStoreCart()
  const [quantity, setQuantity] = useState(product.quantity)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const {getItem: getFavoriteProduct, addItem: addFavoriteProduct} = useLovedProductStore()
  const {addItem, decrementTotal, incrementTotal} = useStoreCart()

  const handleIncrementQuantity = () => {
    if(Number(product.attributes.quantity) > quantity){
      setQuantity(quantity + 1)
      incrementTotal(product.attributes.price)
    }
  }

  const handleDecrementQuantity = () => {
    if(quantity !== 1){
      setQuantity(quantity - 1)
      decrementTotal(product.attributes.price)
    }

  }

  const handleRemoveItem = (id: number) => {
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

  useEffect(()=>{
    addItem(product, quantity)
  }, [quantity])

  return (
    <Card className="flex max-md:flex-col justify-between w-full">
      <CardHeader>
        <div className="w-full h-full">
          {
            product.attributes.image?.data && (
              <Image src={ process.env.NEXT_PUBLIC_BACKEND_URL+product.attributes.image.data?.[0].attributes.url} width={200} height={200} alt="" className="object-contain rounded-md w-full md:w-[500px] h-[190px] md:h-[190px]"/>
            )
          }
        </div>
      </CardHeader>
      <CardContent className="w-full flex flex-col pt-6 justify-between">
        <h1 className="text-xl md:text-center font-bold">{product.attributes.name}</h1>
        <p className="text-sm">{product.attributes.description.length >= 128 ? (<>{product.attributes.description.slice(0,129)}...</>) : product.attributes.description}</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={()=>addFavoriteProduct(product)}>
            {
              isFavorite ? (
                <Heart strokeWidth={1} fill="" className="cursor-pointer me-2"/>
              ) : (
                <Heart strokeWidth={1} className="cursor-pointer me-2"/>
              )
            }            Add Favorites
          </Button>
          <Button variant="destructive" onClick={()=>handleRemoveItem(product.id)}><Delete/></Button>
        </div>
      </CardContent>
      <CardFooter className="flex md:flex-col justify-between items-center">
        <div>
          <p className="mt-4 flex items-center gap-1">
            <p>quantity:</p>
            <span className="flex items-center gap-2">
              <Button variant="outline" onClick={handleDecrementQuantity} className="p-3">{"<"}</Button>
              {quantity}
              <Button variant="outline" onClick={handleIncrementQuantity} className="p-3">{">"}</Button>
            </span>

          </p>
          {Number(product.attributes.quantity) === quantity && (
            <p className="text-red-500">max quantity in stock is: {product.attributes.quantity}</p>
          )}
        </div>

        <div>
          <div className="flex gap-6 items-center">
            <p>${product.attributes.price}</p>
            <Link className={buttonVariants()} href={`/product/${product.attributes.slug}`}>
              Ir
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardCart
