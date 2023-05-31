import style from './sideMenus.module.css'
import {css} from "@/lib/css";
import {SideMenu} from "@/app/posts/css/sideMenu";
import {posts} from "@/lib/posts";
export function SideMenus(){
  return (
    <div className={style.container}>
      {css.map(post=>{
        return (
          <SideMenu post={post} key={post.id} />
        )
      })}
    </div>
  )
}
