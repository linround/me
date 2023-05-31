import React from "react";
import {SideMenus} from "@/app/posts/css/sideMenus";
import style from './layout.module.css'

export default function layout(props:React.PropsWithChildren) {
  return (
    <div className={style.container}>
      {props.children}
      <SideMenus />
    </div>
  )
}
