"use client"

import React from "react"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import useStoreCart, {IProductToCart} from "@/store/store.cart"
import CardCart from "@/components/card_cart"
import {Button} from "@/components/ui/button"

const Page: React.FC = () => {
  const {items, total, removeAll} = useStoreCart()

  return (
    <div className="py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl text-gray-900 sm:text-2xl font-bold">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 flex max-lg:flex-col-reverse lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl max-lg:mt-6">
            <div className="space-y-6">
              {
                items.length > 0 && (
                  <div className="rounded-lg border border-gray-200 p-4 shadow-sm md:p-6 flex flex-col gap-4">
                    {items.map((item: IProductToCart)=>(
                      <CardCart key={item.id} product={item}/>
                    ))}
                  </div>
                )
              }
            </div>
          </div>

          <Card className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm sm:p-6">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h1>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original total price</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${total}</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">10%</dd>
                  </dl>

                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-6">
                <dl className="flex w-full items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">${total + (total * 0.10)}</dd>
                </dl>
                <Button className="w-full text-md">Payment</Button>
                <Button className="w-full text-md" onClick={()=>removeAll()} variant="outline">Remove All</Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Page
