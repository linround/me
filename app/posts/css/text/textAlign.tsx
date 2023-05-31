'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import TextAlign = Property.TextAlign;
import Hyphens = Property.Hyphens;

export function TextAlign(){
  const [textAlign,setTextAlign] = useState<TextAlign>()
  const [hyphens,setHyphens] = useState<Hyphens>()
  const textAlignOptions:TextAlign[] = [
    'left','right','center','justify'
  ]
  const hyphensOptions :Hyphens[]= ['none','manual','auto']
  return (
    <>
      <h2>text-align</h2>
      <div className={commonStyle.options}>
        {textAlignOptions.map(font=>{
          return (<button key={font} onClick={()=>setTextAlign(font)}>{font}</button>)})}
      </div>
      <h3>hyphens</h3>
      <p className={commonStyle.desc}>告知浏览器在换行时如何使用浏览器连字符连接单词</p>
      <div className={commonStyle.options}>
        {hyphensOptions.map(font=>{
          return (<button key={font} onClick={()=>setHyphens(font)}>{font}</button>)})}
      </div>
      <div></div>
      <article style={{textAlign,hyphens}}>
        <p>中文文本</p>
        <p>English text</p>
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
