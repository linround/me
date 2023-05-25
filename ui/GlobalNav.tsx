import {items} from "@/lib/routes";
import {NavItem} from "@/ui/NavItem";
export function GlobalNav(){
  return (
    <div>
      {items.map((item,index)=>{
        return (<NavItem key={index} item={item} />)
      })}
    </div>
  )
}
