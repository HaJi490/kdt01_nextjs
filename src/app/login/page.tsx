'use client'
import { useAtom } from 'jotai'
import { isLogin } from '@/atoms/IsLoginAtom'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react';

import axios from 'axios'
import { useSearchParams } from 'next/navigation'

const baseUrl = "http://localhost:3000/api/login"

export async function Logindb(){
    const response = await axios.get(`${baseUrl}`);
    const user = response.data;

    //사용자 확인
    if(!user){
        alert('사용자가 존재하지 않습니다.');
        return;
    }
    if (user.pwd != refPwd.current?.value ){
        alert( '비밀번호가 일치하지 않습니다.');
        return;
    }

}

export default function Login() {
    //ref변수
    const refId = useRef<HTMLInputElement>(null);  
    const refPwd = useRef<HTMLInputElement>(null);

    //전역변수 사용
    const [, setLogin] = useAtom(isLogin); 

    //navi 변수(home으로 가기 위해서)
    const navi = useRouter();

    //db에서 아이디 정보확인
    //const searchParams = useSearchParams();
    //const email = searchParams.get('id');

    
    //아이디, 비밀번호 입력안하면 알림
    const handleClick =async(e:MouseEvent<HTMLButtonElement>)=>{ 
        try{
            e.preventDefault(); // 다시 돌아오는거 막음
            
            if(refId.current?.value == ''){ 
                alert('아이디를 입력하세요');
                refId.current.focus(); 
                return;
            }
            if(refPwd.current?.value == ''){
                alert('비밀번호를 입력하세요');
                refPwd.current.focus();
                return;
            }

            // //아이디, 비밀번호 확인
            // if(refId.current?.value != 'ha@naver.com'){
            //     alert('해당 이메일이 존재하지 않습니다.');
            //     refId.current?.focus();
            //     return;
            // }
            // if(refPwd.current?.value != '1234'){
            //     alert('비밀번호를 다시 입력해주세요.');
            //     refPwd.current?.focus();
            //     return;
            // }

            localStorage.setItem('id', user.id );
            setLogin(true);
            window.location.reload();
            navi.push('/');

        }catch(err: any){
            if(err.response?.status == 404){
                alert('존재하지 않는 사용자입니다.');
            }else{
                alert('로그인 중 오류각 발생했습니다.');
            }
            return;
        }
    }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" ref={refId} placeholder='name@go.kr' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  required='' "/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" ref={refPwd} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required=''" />
            </div>
            {/* onClick에 'handleClick' or '()=>handleClick()' */}
            {/* <TailButton caption="Sign in" color="blue" onClick={handleClick} />  */}
            <button  color="blue" onClick={handleClick} className="cursor-pointer w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"> 
                Sign in 
            </button>
        </form>
    </div>

  )
}
