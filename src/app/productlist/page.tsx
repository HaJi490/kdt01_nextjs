'use client'
import { Product, products } from "@/types/product" // Product , products: 배열
import ProductItem from "@/components/ProductItem"
import { useState } from "react"

export default function ProductList() {
  const [clickId, setClickId] = useState<string>('');

  const handleClick = (id: string) =>{
    setClickId(id)
  }

  return (
    <div className="mt-5 flex flex-col items-center">
      <ul>
        {
          products.map((item:Product) => <li key={item.id} onClick={() => handleClick(`${item.id}`)} 
                                            className="cursor-pointer">
                                            [{item.id}]{item.name}
                                          </li>)
        }
      </ul>
      <ProductItem id={clickId}/>
    </div>
  )
}
