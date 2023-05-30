'use client'
import style from './pageTitle.module.css'
import {Item, items} from "@/lib/routes";
import {usePathname, useSelectedLayoutSegment} from "next/navigation";
export function PageTitle(){
  const segment = useSelectedLayoutSegment()|| ''
  const item:Item = items.find(i=>i.slug===segment)!
  return (
    <div className={style.container}>
      <h1 className={style.name}>
        {item.name}
      </h1>
    </div>
  )
}
