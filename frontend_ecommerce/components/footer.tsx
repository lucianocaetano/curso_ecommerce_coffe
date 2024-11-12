import {Link as LinkIcon} from "lucide-react"
import Link from 'next/link'

const Footer: React.FC = () => {

  return (
    <div className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
          <p className="mb-5">
            &copy; Ecommerce
            <span className="font-bold">Coffe</span>
          </p>
          <ul className="grid gap-3 p-2 grid-cols-2">
            <Link href="/" className="flex">
              <LinkIcon/>
              Home
            </Link>
            <Link href="/shop" className="flex">
              <LinkIcon/>
              Shop
            </Link>
            <Link href="/offers" className="flex">
              <LinkIcon/>
              Offers
            </Link>
            <Link href="/categories" className="flex">
              <LinkIcon/>
              Categories
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
