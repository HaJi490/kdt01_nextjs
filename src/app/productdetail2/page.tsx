import { Product, products } from "@/types/product"
import Link from "next/link";
import Image from "next/image";
import nike from "@/../public/nike.png"

export default async function ProductDetail2({
    searchParams
} : {
    searchParams : Promise<{ id : string }>
}) {//❗매개변수 받기
    const {id} = await searchParams ;
    console.log(id)

    const item:Product | undefined = products.find((item:Product) => item.id == id);

    if(!item) return <div>해당 아이템이 없습니다</div>
   
  return (
    <div className="mt-5">
        <div className="w-full h-60 bg-gray-100">
            {/* <Image src={nike} alt='제품' width={500} height={500} className="object-cover"></Image> */}
        </div>
        <ol className="w-90 p-5 bg-gray-50">
            <li className="text-gray-300 text-sm">{`${item.category}>`}</li>
            <li className="font-bold text-lg">{item.name}</li>
            <li>{item.price}</li>
            <li className="text-sm text-gray-500">{item.description}</li>
        </ol>
        <Link href='/productlist3'>
            [이전]
        </Link>
    </div>
  )
}
