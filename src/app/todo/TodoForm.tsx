import TailButton from '@/components/ui/TailButton';
import { CompletedT } from '@/types/Todo';

import { useRef } from 'react';

//Props 타입정의
interface TodoFormProps {addData: (text:string, completed:CompletedT) => void}

//Props 타입지정
export default function TodoForm({addData}:TodoFormProps) {
    //ref 변수
    const todoRef = useRef<HTMLInputElement>(null);
    const selRef = useRef<HTMLSelectElement>(null);
   
    //클릭했을 때
    const handleClick=()=>{
        if(todoRef.current?.value == ''){
            alert("할일을 입력하세요");
            todoRef.current.focus();
            return;
        }

        //입력값이 undefined될것을 고려하여 'as CompletedT' <- completed타입 'O'|'X'로 선언했을때만-------------------------------------!
        if (todoRef.current) addData(todoRef.current.value, selRef.current?.value as CompletedT);
    }

    const handleCancel = () =>{
        if (todoRef.current) todoRef.current.value = ''; //null이 아닐때만 값을 삭제-------------------------------!
    }

  return (
    <>
        <div className="w-full py-6 mb-3 border rounded-2xl border-blue-100
                        flex flex-row justify-center 
                        bg-blue-50 bg-opacity-70 ">
        <div className="w-7/10 h-13 mr-5 border-1 border-blue-200 rounded-lg shadow-xs bg-white
                        flex">
            <select ref={selRef} 
                    defaultValue="X"
            className="block py-2.5 px-3 w-25 border-0 border-r-2 border-blue-200 focus:bg-yellow-50 peer rounded-l-lg
                        text-sm text-gray-500 
                        focus:outline-none focus:ring-0 ">
                <option value='O'> O</option>
                <option value='X' > X</option>
            </select>
            <input type="text" ref={todoRef} placeholder="todo____✏" className="w-full h-full pl-4 focus:outline-blue-300 rounded-r-lg"/>
        </div>
        <TailButton caption="확인" color="blue" onClick={handleClick}/>
        <TailButton caption="취소" color="lgray" onClick={handleCancel}/>
        </div>
        
    </>
  )
}
