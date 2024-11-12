"use client"

import useGetProductBySlug from "@/api/useGetProductBySlug"
import {useParams} from "next/navigation"
import Image from "next/image"
import React, {useEffect, useState} from "react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

import {Button} from "@/components/ui/button"
import {Heart, ShoppingCart} from "lucide-react"
import useStoreCart from "@/store/store.cart"
import {IProduct} from "@/interfaces/products.interface"
import { useToast } from "@/hooks/use-toast"
import useLovedProductStore from "@/store/store.loved_product"

const Page: React.FC = () => {
  const params = useParams()
  const {toast} = useToast()

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [inCart, setInCart] = useState<boolean>(false)

  const {addItem: addItemCart, getItem: getItemCart} = useStoreCart()
  const {addItem: addFavoriteProduct, getItem: getFavoriteProduct} = useLovedProductStore()

  const {data: product, isLoading} = useGetProductBySlug(params.slug as string)

  const handleAddItemCart = (product: IProduct) => {
    if(!getItemCart(product.id)){
      addItemCart(product)
      toast({title: "Product added to cart successfully", variant: "successfully"})
    }else {
      toast({title: "The product was already in the cart", variant: "destructive"})
    }
  }

  const handleAddFavoriteProduct = (product: IProduct) => {
    if(!getFavoriteProduct(product.id)){
      addFavoriteProduct(product)
      toast({title: "Product added to loved products list successfully", variant: "successfully"})
    }else {
      toast({title: "The product was already in the loved products list", variant: "destructive"})
    }
  }

  useEffect(()=>{
    if(product){
      const data = getItemCart(product?.id as number)
      if(data){
        setInCart(true)
      }else{

        setInCart(false)
      }
    }
  })

  useEffect(()=>{
    if(product){
      const data = getFavoriteProduct(product?.id as number)
      if(data){
        setIsFavorite(true)
      }else{
        setIsFavorite(false)
      }
    }
  })

  return (
    <div className="max-w-6xl py-4 mx-auto px-2">

      {
        isLoading && product === undefined ? (
          <p className="text-center">loading...</p>
        ) : (
          <div className="lg:flex lg:justify-between ">
            <div className="w-full">
              <h1 className="mb-4 ms-8 text-2xl font-bold inline-flex">{product?.attributes.name}</h1>
              <hr />
              <Carousel>
                <CarouselContent>
                  {product?.attributes.image.data?.map((image, index: number)=> (
                    <CarouselItem key={index} className="flex justify-center">
                      <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} alt="" width={700} height={500} className="object-contain h-full w-full max-w-[700px] max-h-[300px] "/>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16"/>
                <CarouselNext className="mr-16"/>
              </Carousel>
            </div>
            <div className="w-[500px] mx-auto pt-16 px-6">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">$ {product?.attributes.price}</p>
                <div className="md:flex items-center justify-center">
                  {
                    product?.attributes.quantity === 0 ? (
                      <p className="text-red-500">No in stock</p>
                    ) : (
                      <p className="text-green-500">In stock</p>
                    )
                  }
                </div>
              </div>

              <div className="my-6">
                <Button className="w-full mt-4">
                  Buy
                </Button>
                <Button onClick={()=>handleAddItemCart(product as IProduct)} variant="secondary" className="w-full mt-6">
                  {
                    inCart ? (
                      <ShoppingCart strokeWidth={1} color="orange" className="cursor-pointer me-2"/>
                    ) : (

                      <ShoppingCart strokeWidth={1} className="cursor-pointer me-2"/>
                    )
                  }
                  Add Cart
                </Button>
                <Button variant="outline" onClick={()=>handleAddFavoriteProduct(product as IProduct)} className="w-full mt-2">
                  {
                    isFavorite ? (
                      <Heart strokeWidth={1} color="red" className="cursor-pointer me-2"/>
                    ) : (
                      <Heart strokeWidth={1} className="cursor-pointer me-2"/>
                    )
                  }
                  Add Favorite
                </Button>
              </div>
              <h1 className="text-lg font-bold inline-flex">Description:</h1>
              <p className="text-lg">
                {product?.attributes.description}
              </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Page
