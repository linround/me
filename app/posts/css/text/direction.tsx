'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import Direction = Property.Direction

export function Direction(){
  const [direction,setDirection] = useState<Direction>()
  const directions:Direction[] = ['ltr','rtl']
  return (
    <>
      <h2>direction</h2>
      <div className={commonStyle.options}>
        {directions.map(font=>{
          return (<button key={font} onClick={()=>setDirection(font)}>{font}</button>)})}
      </div>
      <article style={{direction}}>
        <p>中文文本</p>
        <p>English text</p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
