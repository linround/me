'use client'
import {useState} from "react";
import commonStyle from "@/app/posts/css/common.module.css";
import {Property} from "csstype";
import LetterSpacing = Property.LetterSpacing;
import WordSpacing = Property.WordSpacing;

export function TextSpace(){
  const [letterSpacing,setLetterSpace] = useState<LetterSpacing>()
  const letterSpaces:LetterSpacing[] = ['24px','5px','normal']
  const [wordSpacing,setWordSpacing] = useState<WordSpacing>()
  const wordSpacings :WordSpacing[]= ['24px','5px','normal']
  return (
    <>
      <h2>letter-space</h2>
      <p className={commonStyle.desc}>
        设置每个字母之间的间距
      </p>
      <div className={commonStyle.options}>
        {letterSpaces.map(font=>{
          return (<button key={font} onClick={()=>setLetterSpace(font)}>{font}</button>)})}
      </div>

      <h3>word-space</h3>
      <p className={commonStyle.desc}>
        设置每个单词之间的间距
      </p>
      <div className={commonStyle.options}>
        {wordSpacings.map(font=>{
          return (<button key={font} onClick={()=>setWordSpacing(font)}>{font}</button>)})}
      </div>
      <article style={{letterSpacing,wordSpacing}}>
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
