'use client'
import { useAtom } from "jotai";
import { isLogin } from "@/atoms/IsLoginAtom"; //@: src폴더 밑에서 찾음
import Link from "next/link";
import Image from "next/image";

import { GoHome } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";

export default function Nav() {
    const [login, setLogin] = useAtom(isLogin);

    const handleClick = ()=>{
        setLogin(false);
        localStorage.setItem('id', '');
    }

  return (
    <div className="w-full flex">
      <div className="">
        <Image src="/react.svg" alt="react" width={32} height={32}/> 
        <Image src="/next.svg" alt="react" width={100} height={32} className=""/>
      </div>
        <Link href='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link>
        <Link href='/clock' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Clock</Link> 
        <Link href='/lotto' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Lotto</Link> 
        <Link href='/food' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Food</Link> 
        <Link href='/todo' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Todo</Link> 
        <Link href='/subway' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Subway</Link> 
        {/* { localStorage.getItem('id') != '' 
        ? <div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link> 
            <Link to='/clock' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Clock</Link> 
            <Link to='/lotto' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Lotto</Link> 
            <Link to='/food' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Food</Link> 
            <Link to='/subway' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Subway</Link> 
            <Link to='/todo' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Todo</Link> 
            <Link to='/login' onClick={handleClick}
              className='px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600 flex justify-center'>Logout</Link>
          </div>
        : <div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link> 
            <Link to='/login' 
            className='px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600 flex justify-center'>Login</Link>
            </div>} */}

        
    </div>
  )
}
