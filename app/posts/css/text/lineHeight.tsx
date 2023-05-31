'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import TextTransform = Property.TextTransform;

export function LineHeight(){
  const [lineHeight,setLineHeight] = useState<string>('')
  const lineHeights = ['24px','2em','1rem','1','2']
  return (
    <>
      <h2>line-height</h2>
      <p className={commonStyle.desc}>
        设置文本每行之间的高。可使用单位；也可使用一个无单位的值作为乘数。推荐行高大约是1.5-2（双倍间距）
      </p>
      <div className={commonStyle.options}>
        {lineHeights.map(font=>{
          return (<button key={font} onClick={()=>setLineHeight(font)}>{font}</button>)})}
      </div>
      <article style={{lineHeight}}>
        <p>
          Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat.
          Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.
          Truly a wonder of nature this urban predator — Tommy the cat had many a story to tell.
          But it was a rare occasion such as this that he did.
        </p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
