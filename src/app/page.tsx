'use client' //❗이게 안붙으면 ssr로 인식(서버에서 실행) / 맨 첫줄에 작성
import { useState, useEffect } from "react";
import { useAtom } from 'jotai'
import { isLogin } from '../atoms/IsLoginAtom'
import { useRouter } from "next/navigation";

export default function Home() {
  //전역변수 사용
  const [, setLogin] = useAtom(isLogin);
  //state 변수
  const [ email, setEmail] = useState<string | null>();

  //navi
  const navi = useRouter();

  useEffect(()=>{
    const localEmail : string | null = localStorage.getItem("id");

    if(localEmail){
      setLogin(true);
      setEmail(localEmail);
    }
    else{
      navi.push("/login");
    }
  }, [setLogin, setEmail])

  return (
    <div>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center">
        <span className="font-bold">
          {`${email}`}
          </span>님, 로그인이 되었습니다👋
      </div> 
    </div>
  );
}
