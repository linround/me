'use client'
import commonStyle from "@/app/posts/css/common.module.css"
export function Summary(){
  return (
    <>
      <h2>小结</h2>
      <article>
        <p>
          本篇记录了在开发中关于文本样式的基础和常用组合。
        </p>
      </article>
      <div className={commonStyle.hr} />
    </>
  )
}
