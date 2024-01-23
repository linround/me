import React from "react";
import style from './article.module.css'

interface IProps {
  href:string
}
export function ArticleLink(props:React.PropsWithChildren<IProps>) {
  const {children,href} = props
  return (
    <a href={href}
       className={style.link}
       target={'_blank'}>
      {children}
    </a>
  )

}
