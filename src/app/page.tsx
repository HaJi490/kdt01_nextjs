'use client' //❗이게 안붙으면 ssr로 인식(서버에서 실행) / 맨 첫줄에 작성
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center">
        <span className="font-bold">{`${localStorage.getItem('id')}`}</span>님, 로그인이 되었습니다👋
      </div> 
    </div>
  );
}
