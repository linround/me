'use client'
import {Item, mainRoute} from "@/lib/routes";
import {NavItem} from "@/ui/NavItem";
import style from './globalNav.module.css'
import {PageTitle} from "@/ui/PageTitle";
import {useSelectedLayoutSegment} from "next/navigation";
export function GlobalNav(){
  const segment = useSelectedLayoutSegment() || '';
  const item:Item = mainRoute.find(i=>i.slug===segment)!
  return  item &&(
    <>
      <PageTitle item={item} />
      <div className={style.navItem}>
        {mainRoute.map((item,index)=>{
          return (<NavItem key={index} item={item} />)
        })}
      </div>
    </>
  )
}
