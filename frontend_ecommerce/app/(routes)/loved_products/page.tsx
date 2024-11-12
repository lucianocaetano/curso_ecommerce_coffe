"use client"

import React from "react"
import {IProduct} from "@/interfaces/products.interface"
import useLovedProductStore from "@/store/store.loved_product"
import CardLovedProduct from "@/components/card_loved_product"
import {Button} from "@/components/ui/button"

const Page: React.FC = () => {
  const {removeAll, items} = useLovedProductStore()

  return (
    <div className="py-8 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 flex max-lg:flex-col-reverse lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none xl:max-w-4xl max-lg:mt-6">
            <div className="flex justify-between">
              <h2 className="text-xl text-gray-900 dark:text-white sm:text-2xl font-bold">Loved products lists</h2>
              <Button variant="outline" onClick={()=>removeAll()}>Remove all</Button>
            </div>
            <div className="space-y-6 mt-6">
              {
                items.length > 0 && (
                  <div className="rounded-lg border border-gray-200 p-4 shadow-sm md:p-6 flex flex-col gap-4">
                    {items.map((item: IProduct)=>(
                      <CardLovedProduct key={item.id} product={item}/>
                    ))}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
