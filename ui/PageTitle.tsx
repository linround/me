'use client'
import style from './pageTitle.module.css'
import {Item, mainRoute} from "@/lib/routes";
interface IProps{
  item:Item
}
export function PageTitle(props:IProps){
  const {item} = props
  return (
    <div className={style.container}>
      <h1 className={style.name}>
        {item?.name}
      </h1>
    </div>
  )
}
