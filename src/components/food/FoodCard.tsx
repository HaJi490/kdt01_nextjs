import Image from "next/image";
import { useState } from "react";
import { Fooddata } from "@/types/Food";


interface FoodCardProps{
    obj : Fooddata ;
}

interface imgGubunT{
    "광역지원센터": string;
    "기초푸드뱅크": string;
    "기초푸드마켓": string;
}

export default function FoodCard({obj}:FoodCardProps) {
    //사용자 정의 오브젝트
    const imgGubun:imgGubunT = {
        "광역지원센터": "/busan.png",
        "기초푸드뱅크": "/bank.png",
        "기초푸드마켓": "/market.png",
    };

    //truefalse로 조절
    const[isShow, setIsShow] = useState<boolean>(false);

    const handleIsShow = () =>{
        setIsShow(!isShow);
    };


    return (
        <div className="w-full h-35 p-1.5 border border-stone-200 solid 1px
                    flex">
            <div className="w-1/4 mr-1 flex justify-center items-center">
                <Image src={imgGubun[obj["구분"] as keyof imgGubunT]} alt={obj["구분"]} className="w-11/12 h-full object-cover" width={100} height={100} />
            </div>
            
            {/* 'obj.구분'처럼 한글이나 뛰어쓰기가 있으면 [] 표기법을 사용해주는게 좋음 */}
            {/* []쓸때 문자열이니까 "" */}
            <div className="w-3/4 h-full py-2">
                <h1 className="h-1/4  font-extrabold text-lg">
                    {obj["사업장명"]}
                </h1>
                <p className="h-1/4 text-sm ">
                    {obj["운영주체명"]}
                </p>
                <p className="mb-2 text-xs text-gray-600">
                    {obj["사업장 소재지"]}
                </p> 
                <p className="h-1/4  bg-gray-500 cursor-pointer
                            flex items-center p-1
                            text-xs text-white" onClick={handleIsShow}>
                    {/* && 둘중하나가 거짓이면 거짓 */}
                    { isShow && `연락처 :${obj["연락처(대표번호)"]}, fax :${obj["팩스번호"]}`}
                </p>
            </div>
        </div>
    )
}
