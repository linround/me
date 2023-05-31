'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import TextTransform = Property.TextTransform;

export function TextTransform(){
  const [textTransform,setTextTransform] = useState<TextTransform>()
  const TextTransforms:TextTransform[] = [
    'none','uppercase','lowercase','capitalize','full-width'
  ]
  return (
    <>
      <h2>text-transform</h2>
      <div className={commonStyle.options}>
        {TextTransforms.map(font=>{
          return (<button key={font} onClick={()=>setTextTransform(font)}>{font}</button>)})}
      </div>
      <article style={{textTransform}}>
        <p>中文文本</p>
        <p>English text</p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
