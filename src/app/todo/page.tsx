'use client'
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import { useEffect, useState } from "react"
import axios from "axios"
//import 

import { Todo, CompletedT } from "@/types/Todo"

const baseUrl = "http://localhost:3000/api/todo"

export default function TodoList() {
    //state 변수 //❗state타입 정의: 제너릭으로 해야함
    const [tdata, setTdata] = useState<Todo[]>(); 
    const [tags, setTags] = useState<React.ReactNode[]>([]);

    //GET(select)
    const getData =async()=>{
        const resp = await axios.get(baseUrl);
        setTdata(resp.data);//resp #전체 data #항목
        //console.log("data= ",tdata); 
    }

    //POST(insert) //❗인수 타입정의
    const addTodo = async(text:string, completed:CompletedT) =>{
        await axios.post(baseUrl, {text: text, completed: completed});
        getData();
    }

    //DELETE 
    const handleDelete = async(id:string)=>{
        await axios.delete(baseUrl+`/${id}`);
        getData();
    }

    //UPDATE
    const handleToggle = async(id:string, completed: CompletedT) =>{ //매개변수 completed넣어주면 한번더 패치안해줘도됨-----------------!
        //const resp = await axios.get(baseUrl+`/${id}`);
        //const todo = resp.data;
        
        const done = completed == 'O' ? 'X' : 'O'; //O면 X로
        await axios.patch(baseUrl + `/${id}`, {completed : done});
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        if(tdata == null) return;

        console.log("ttttdata= ",tdata);

        if(tdata){
            setTags(tdata.map((item: Todo) => <TodoItem key={item.id} //Tdata의 배열이 tags---------------------------------------❕
                                            //todo={item}하면 하나씩 안줘도 됨-------------------------------------------!
                                            id={item.id}
                                            text={item['text']}
                                            completed={item['completed']}
                                            putData ={handleToggle}
                                            delData={handleDelete}/> ))
        }

    },[tdata])


  return (
    <div className="w-full flex flex-col justify-center">
        <TodoForm addData={addTodo} />
        {tags}
    </div>
  )
}
