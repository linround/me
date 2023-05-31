'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import TextOrientation = Property.TextOrientation;
import WritingMode = Property.WritingMode;

export function TextOrientation(){
  const [textOrientation,setTextOrientation] = useState<TextOrientation>('initial')
  const textOrientations:TextOrientation[] = [
    "mixed",'upright','sideways',
  ]
  const [writingMode,setWritingMode] = useState<WritingMode>()
  const writingModes :WritingMode[]= [
    'vertical-lr','vertical-rl','initial'
  ]
  return (
    <>
      <h2>text-orientations</h2>
      <p className={commonStyle.desc}>
        旋转已经垂直布局的文本
      </p>
      <div className={commonStyle.options}>
        {textOrientations.map(font=>{
          return (<button key={font} onClick={()=>setTextOrientation(font)}>{font}</button>)})}
      </div>
      <h3>writing-mode</h3>
      <p className={commonStyle.desc}>
        定义文本水平布局还是垂直布局
      </p>
      <div className={commonStyle.options}>
        {writingModes.map(font=>{
          return (<button key={font} onClick={()=>setWritingMode(font)}>{font}</button>)})}
      </div>
      <article style={{textOrientation,writingMode}}>
        <p>中文文本</p>
        <p>English text</p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
