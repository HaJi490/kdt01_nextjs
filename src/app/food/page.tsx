'use client'
import TailButton from "@/components/ui/TailButton";
import FoodCard from "../../components/food/FoodCard"
import fooddata from "@/db/fooddata.json"
import { useState } from "react";
import { Fooddata } from "../../types/Food";

export default function FoodMain() {
  //console.log(fooddata);
  //tags를 state변수로 생성
  const [tags, setTags] = useState<React.ReactNode>([]);

  let category = fooddata.map((item:Fooddata) => item["운영주체 분류"].replace(/ /g, '')); //❗replaceAll을 함수로 풀면 오류없어짐 || 정규식

  //[] #배열로 만들기# ... #하나하나씩 돌면서 # new Set #중복제거
  category = [...new Set(category)];
  console.log(category);

  const handleCategory = (c:string) => {
    console.log("handleCategory", c)

    let tm = (fooddata as Fooddata[]).filter((item: Fooddata) => item["운영주체 분류"].replace(/ /g, '') == c)
                                    .map((item:Fooddata) => <FoodCard key={item["사업장명"]} obj={item} />);

    setTags(tm);
    console.log("handleCategory", tm);
  }

  const bts = category.map(bt => <TailButton
    key={bt}
    caption={bt}
    color="lime"
    // bt를 넣으니까 handleCategory의 c에 선택한 분류가 콘솔 나옴
    onClick={() => { handleCategory(bt) }}
  />);

  return (
    <div>
      <div className="flex justify-center items-center mb-2">
        {bts}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
      </div>
    </div>
  )
}
