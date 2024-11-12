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
import {Delete} from "lucide-react"
import useLovedProductStore from "@/store/store.loved_product"
import {IProduct} from "@/interfaces/products.interface"

const CardLovedProduct: React.FC<{product: IProduct}> = ({product}) => {

  const {removeItem} = useLovedProductStore()

  const handleRemoveItem = (id: number) => {
    removeItem(id)
  }

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
      <CardContent className="w-full flex flex-col pt-6 gap-6">
          <h1 className="text-xl md:text-center font-bold">{product.attributes.name}</h1>
          <p className="text-md">{product.attributes.description.length >= 128 ? (<>{product.attributes.description.slice(0,129)}...</>) : product.attributes.description}</p>
      </CardContent>
      <CardFooter className="flex md:flex-col">
        <div className="flex gap-6 items-center justify-center max-md:ms-auto md:mt-auto">
          <p>${product.attributes.price}</p>
          <Link className={buttonVariants()} href={`/product/${product.attributes.slug}`}>
            Ir
          </Link>
          <Button variant="destructive" onClick={()=>handleRemoveItem(product.id)}><Delete/></Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardLovedProduct
