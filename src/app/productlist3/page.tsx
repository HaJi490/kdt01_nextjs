import { Product, products } from "@/types/product" // Product , products: 배열
import Link from "next/link"

export default function ProductList3() {

  return (
    <div className="flex flex-col mt-5">
      <ul>
        {
          products.map((item:Product) => <li key={item.id}  
                                            className="cursor-pointer">
                                            <Link href={`/productdetail3?id=${item.id}`}>
                                                [{item.id}]{item.name}
                                            </Link>
                                          </li>)
        }
      </ul>
    </div>
  )
}