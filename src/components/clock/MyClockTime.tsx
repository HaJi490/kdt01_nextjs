'use client'
import { useState, useEffect } from "react";
//modulecss 사용
import styles from "./MyClockTime.module.css"


function MyClockTime() {
    const [currentTime, setCurrentTime] = useState< Date >(new Date());

    useEffect(()=>{
        const tm = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000); //1초에 한번씩 실행

        //콜백함수로 clearInterval적용
        return ()=>{
            clearInterval(tm)
        };
    }, []);
 
    //const time = new Date();

    return(
        <div className="p-5 text-red-400 font-bold">
          <p className="pst"> 
            현재시각 
            </p>
            <p className={styles.pst}>
             {currentTime.toLocaleTimeString()}
             </p>
           
        </div>
    )
}

export default MyClockTime
