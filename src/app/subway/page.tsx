'use client'
import TailSelect from '@/components/ui/TailSelect';
import sarea from '@/db/sarea.json'
import scode from '@/db/scode.json'

import { useEffect, useState, useRef } from "react";

interface Tdata {//❗fetch 마이그레이션1
  [key: string] : string;
}

interface Sarea{//❗json 마이그레이션1
    "코드": string;
    "측정소": string;
}

interface Scode{
  [key: string]: {
    "name": string;
    "unit": string;
    "description": string;
  }
}

export default function Subway() {
  //state변수
  const[tdata, setTdata] = useState<Tdata | undefined>(); //❗state 마이그레이션
  const[tags, setTags] = useState<React.ReactNode[]>([]); //ReactNode 배열

  //ref변수
  const refSel = useRef<HTMLSelectElement>(null);

  //data fetch
  const fetchData = async(sel?:string)=>{ //❗fetch 마이그레이션2 //'?' null값을 받을 수도 있어서
    const apiKey = process.env.NEXT_PUBLIC_DATA_KEY;
    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation`
    url = `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=5&resultType=JSON&controlnumber=${new Date().toISOString().slice(0, 10).replace(/-/g,'')}07&areaIndex=${sel}`
    //url 확인
    console.log('url= ', url);

    const resp = await fetch(url);
    let data = await resp.json();

    data = data.response.body.items.item[0];
    setTdata(data);
  }

  //컴포넌트가 로딩되었을 때
  useEffect(()=>{
    fetchData('201193');
  },[])

  //tdata가 채워졌을때
  useEffect(()=>{
    //빈데이터 리턴
    if(!tdata) return;
    
    console.log('tdata= ', tdata)
    
    console.log("키값= ", Object.keys(scode));
    const itemKeys:string[] = Object.keys(scode as Scode); // ❗json 마이그레이션3
    const scodeT = scode as Scode;//❗json 마이그레이션4

    const tm = itemKeys.map((item:string)=><div key={item} className='w-full flex flex-col items-center text-sm border-y-2 border-y-gray-500'>
                                  <div className='w-full h-10 border-b-2 border-b-gray-200 border-r-1 border-r-gray-200  text-gray-700 flex justify-center items-center'>
                                    {/* ❗json 마이그레이션5 */}
                                    <div>{scodeT[item]["name"]}</div> 
                                    <div>({item})</div>
                                  </div>
                                  <div className='w-full h-10 lg:h-15 border-0 border-r-1 border-r-gray-200 flex justify-center items-center'>
                                  {tdata[item]}
                                  {tdata[item] != '-' ? scodeT[item]["unit"] : ''}
                                  </div>
                                </div>)
    setTags(tm);
  },[tdata])

  //항목 가져오기
  const opt = (sarea as Sarea[]).map((item:Sarea) => <option key={item["코드"]} value={item['코드']}>{item['측정소']}</option>) //❗json 마이그레이션2: 태그들은 노드의 배열
  //console.log(opt);

  //Click이벤트
  const handleChange = ()=>{
    fetchData(refSel.current?.value);
    console.log('sel=', refSel.current?.value);
  }

  return (
    <>
      <div className='flex justify-between'>
        <h1 className="font-extrabold text-left">측정소 선택</h1>
        <TailSelect id = 'sel1'
                    refSel={refSel}
                    ops = {opt} // opt가 노드의 배열이니까 ops는 ReactNode[]----------------------------------!
                    handleChange = {handleChange}/>
      </div>
      <div className='mx-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-y-1.5'>
        {tags}
      </div>
    </>
  )
}
