import { RefObject, ChangeEvent } from "react";//❗Ref마이그레이션 0

interface TailSelectProps {
  id: string; 
  refSel: RefObject<HTMLSelectElement | null>; //❗Ref 마이그레이션1//Ref타입 ///Select의 HTML
  ops: React.ReactNode[];
  handleChange?: (e:ChangeEvent<HTMLSelectElement>) => void;}

export default function TailSelect({id, refSel, ops, handleChange}:TailSelectProps) {
    return (
      //max-w-? #최대너비 xm-auto #하니까 중간으로 옴
    // <form className="max-w-md mx-auto mb-3">
      <select id={id} ref={refSel} onChange={handleChange}
      //bg-transparent #투명
              className="block py-2.5 px-0 mb-3 w-50 bg-transparent border-0 border-b-2 border-stone-200
                        text-sm text-gray-500 
                        focus:outline-none focus:ring-0 focus:border-gray-200 peer dark:text-gray-400 dark:border-gray-700 ">
          {/* <option selected>선택</option> */}
          {/* ops.map((item:string) => <option key={item} value={item}>{item}</option>) */}
         { ops }
      </select>
  // </form>
    )
  }
  