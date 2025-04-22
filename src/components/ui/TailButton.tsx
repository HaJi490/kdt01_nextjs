import { MouseEvent } from "react";

type BgT = { 
  "blue" : string;
  "orange" : string;
  "lime" : string;
  "dgray" : string;
  "lgray" : string;
}

interface TailButtonProps {//❗props 마이그레이션1
  caption: string;
  color: "blue" | "orange" | "lime" | "dgray" | "lgray";//오브젝트 타입
  onClick?: (e:MouseEvent<HTMLButtonElement>)=>void; } //함수 타입 ///'?': onClick 꼭 안써도 됨 ////MouseEvent<HTMLButtonElement>: 'e'변수를 받아서 사용가능

export default function TailButton({caption, color, onClick}:TailButtonProps){ //❗props 마이그레이션2
    const bg:BgT={                    //❗props 마이그레이션3
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
        "lime" : "bg-amber-950",
        "dgray" : "bg-gray-800",
        "lgray" : "bg-gray-400",
    }
    
    const bgHover:BgT={
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-amber-200 ",
        "dgray" : "hover:bg-gray-500 ",
        "lgray" : "hover:bg-gray-200 ",
    }

  return (
<button className={`w-auto h-auto py-2 px-3 my-2 mx-1 mr-2 text-xs  hover:font-bold
                    ${bg[color]} ${bgHover[color]}
                    rounded-md text-white
                    flex justify-center items-center`}
            onClick={onClick}>
      {caption}
    </button>
  )
}
