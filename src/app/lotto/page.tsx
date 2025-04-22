'use client'
import TailButton from "@/components/ui/TailButton";
import TailBall from "@/components/ui/TailBall";
import { useState } from "react";

export default function Lotto() {
    //state변수
    const [lottoTags, setLottoTags] = useState<React.ReactNode[]>([]) ; //빈배열 생성
    
    const handleLottoNum = () =>{
        let lottoNum:number[] = [];

        while(lottoNum.length < 7){
            let n:number = Math.floor(Math.random()*45) + 1; 
        
            //랜덤수 배열넣기
            if(!lottoNum.includes(n))  lottoNum.push(n);//❗includes #trud/false
        }

        //보너스 번호 
        let bonus:number[] = lottoNum.splice(-1); //❗splice #배열 결과 

        //로또 번호 정렬
        lottoNum.sort((a:number,b:number) => a-b);

        //로또 배열 다시 생성
        const lottoNum2:(number | string)[]=[...lottoNum, '+', ...bonus]; //❗새로운 변수생성해서 lottoNum타입 변경-----------------------------!

        // lottoTags = lottoNum; //오류
       // setLottoTags(lottoNum); //TailBall 적용이 안됨
       //TailBall 만들기
       let tm = lottoNum2.map((item:number | string) => item ==='+' ? <span className="w-16 h-16 flex justify-center items-center text-4xl font-bold mr-5"> {item} </span>
                                            :<TailBall key={'n' + item} n={item}/>)
        setLottoTags(tm);

        console.log("lottoNum", lottoNum);
    }

  
    return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mb-10">
        {lottoTags}
      </div>
      <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum}/>
      </div>
    </div>
  )
}
