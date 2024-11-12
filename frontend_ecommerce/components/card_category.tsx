import React from "react"
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import {ICategory} from "@/interfaces/categories.interface"
import Link from "next/link"

const CardCategory: React.FC<{category: ICategory}> = ({category}) => {

  return (
    <Link href={`/category/${category.attributes.slug}`} className="cursor-pointer">
      <Card className="flex flex-col justify-between">
        <CardContent className="relative w-full h-full p-0">
          <div className="absolute w-full bg-black opacity-30 h-full left-0 top-0 flex justify-center items-center"/>
          <div className="w-full h-full">
            {
              category.attributes.mainimage?.data && (
                <Image src={ process.env.NEXT_PUBLIC_BACKEND_URL+category.attributes.mainimage.data?.attributes.url} width={900} height={900} alt="" className="object-cover w-full h-[400px]"/>
              )
            }
          </div>
          <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center">
            <div className="p-4 w-[200px] text-center">
              <CardTitle className="font-bold text-white">
                {category.attributes.name}
              </CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardCategory
