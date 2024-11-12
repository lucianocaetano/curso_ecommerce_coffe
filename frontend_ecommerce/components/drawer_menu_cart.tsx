import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import useStoreCart, { type IProductToCart} from "@/store/store.cart"
import CardCart from "./card_cart"
import {ShoppingCart} from "lucide-react"
import { Button } from "@/components/ui/button"

const DrawerMenuCart = () => {
  const { items } = useStoreCart()

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex">
          {items.length}
          <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={()=>{}}/>
        </div>

      </SheetTrigger>
      <SheetContent>
        <SheetContent className="flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle>Cart Items</SheetTitle>

          </SheetHeader>
          <div className="flex flex-col gap-4 overflow-y-scroll h-full pe-2">
            {
              items.map((product: IProductToCart) => (
                <CardCart key={product.id} product={product}/>
              ))
            }
          </div>
          <SheetFooter>
            <Button className="w-full">Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </SheetContent>
    </Sheet>
  )
}

export default DrawerMenuCart
