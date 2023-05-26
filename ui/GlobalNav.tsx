import {items} from "@/lib/routes";
import {NavItem} from "@/ui/NavItem";
import style from './globalNav.module.css'
import {PageTitle} from "@/ui/PageTitle";
export function GlobalNav(){
  return (
    <>
      <PageTitle />
      <div className={style.navItem}>
        {items.map((item,index)=>{
          return (<NavItem key={index} item={item} />)
        })}
      </div>
    </>
  )
}
