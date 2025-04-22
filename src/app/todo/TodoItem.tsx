import { RiDeleteBin6Line } from "react-icons/ri";
import { CompletedT } from "@/types/Todo";

//Props 타입정의
interface TodoItemProps { 
  id: string;
  text: string; 
  completed: CompletedT; 
  putData: (text:string, completed:CompletedT)=>void; 
  delData: (id:string)=>void; //void: 해당함수 리턴값이 없다
}

//Props 타입지정
export default function TodoItem({ id, text, completed, putData, delData}:TodoItemProps) {

  return (
    <div className="w-9/10 mx-auto flex justify-between p-3 bg-white border-0 border-b-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <div onClick={()=>putData(id, completed)}>
        <span className="pr-5 pl-2">{completed == 'O' ? "✅": "⬜" }</span>
        <span className={completed == 'O' ? "text-gray-400 line-through" : "" }>{text}</span> 
      </div>
        <button onClick={()=>delData(id)} className="px-5 pr-2 border-0 border-l-1 border-l-gray-200 text-gray-400 cursor-pointer" ><RiDeleteBin6Line /></button>
    </div>
  )
}
