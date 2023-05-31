'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import TextTransform = Property.TextTransform;

export function LineHeight(){
  const [textShadow,setTextTransform] = useState<string>('')
  const textShadows = ['6px 8px 10px red']
  return (
    <>
      <h2>line-height</h2>
      <div className={commonStyle.options}>
        {textShadows.map(font=>{
          return (<button key={font} onClick={()=>setTextTransform(font)}>{font}</button>)})}
      </div>
      <article style={{textShadow}}>
        <ul>
          <li>阴影与原始文本的水平偏移，6px；值必须指定</li>
          <li>阴影与原始文本的垂直偏移，8px；值必须指定</li>
          <li>模糊半径-更高的值意味着阴影分散的更加广泛，10px；默认为0</li>
          <li>阴影的基础颜色，red；默认为black</li>
        </ul>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
