'use client'
import commonStyle from "@/app/posts/css/common.module.css"
import {useState} from "react";
export function FontStyle(){
  const [fontStyle,setFontStyle] = useState<string>('')
  const fontStyles = [
    'normal','italic','oblique'
  ]
  return (
    <>
      <h2>font-style</h2>
      <div className={commonStyle.options}>
        {fontStyles.map(font=>{
          return (<button key={font} onClick={()=>setFontStyle(font)}>{font}</button>)})}
      </div>
      <article style={{fontStyle}}>
        <p>中文文本</p>
        <p>English text</p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
