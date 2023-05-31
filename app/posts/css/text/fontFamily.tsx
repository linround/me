'use client'
import commonStyle from "@/app/posts/css/common.module.css"
import {useState} from "react";

export function FontFamily(){
  const [fontFamily,setFontFamily] = useState<string>('')
  const fontFamilies = ['Arial','Courier New','Times New Roman','Trebuchet MS','Verdana',]
  return (
    <>
      <h2>font-family</h2>
      <p className={commonStyle.desc}>
        当修改字体样式时，对于中文字体的影响可以忽略；对于英文字体样式影响较大.
      </p>
      <div className={commonStyle.options}>
        {fontFamilies.map(font=>{
          return (<button key={font} onClick={()=>setFontFamily(font)}>{font}</button>)})}
      </div>
      <article style={{
        fontFamily
      }}>
        <p>中文文本</p>
        <p>English text</p>
        <p>“”</p>
        <p>&quot：&quot;</p>
        <p>&#34: &#34;</p>
        <p>&ldquo：&ldquo;</p>
        <p>&rdquo：&rdquo;</p>
        <p>HTML实体组成：一个与符号(&) + (实体名称 或 #和一个ASCII码) + 分号(;)</p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
