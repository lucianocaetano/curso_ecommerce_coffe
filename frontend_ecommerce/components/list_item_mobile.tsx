import React from "react"
import { cn } from "@/lib/utils"

const ListItemMobile = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 bg-gray-50 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          </p>
        </a>
    </li>
  )
})

ListItemMobile.displayName = "ListItemMobile"

export default ListItemMobile
