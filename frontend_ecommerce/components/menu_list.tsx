"use client"

import * as React from "react"
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from "./list_item"
import useGetCategories from "@/api/useGetCategories"

const MenuList: React.FC = () => {
  const {data: categories, isLoading} = useGetCategories()

  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About at</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-4 text-lg font-medium">
                      Coffe
                    </div>
                    <p className="leading-tight font-medium text-muted-foreground">
                      "El lugar donde el café y las sonrisas se encuentran."
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>

              <ListItem href="/" title="Home"/>
              <ListItem href="/shop" title="Shop"/>
              <ListItem href="/cart" title="Cart"/>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex p-4 gap-2 flex-col md:w-[400px] lg:w-[500px] ">
              {!isLoading? (categories?.data.map((category, index) => (
                <ListItem
                  key={index}
                  title={category.attributes.name}
                  href={`/category/${category.attributes.slug}`}
                />
              ))): (<>loading...</>)}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/shop" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList
