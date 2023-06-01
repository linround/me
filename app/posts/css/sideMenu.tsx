import React from "react";
import {IPost} from "@/lib/posts";
import Link from "next/link";
import style from './sideMenu.module.css'

export function SideMenu({post}:{post:IPost}) {
  return (
    <div className={style.container}>
      <Link className={style.link} href={post.route}>{post.title}</Link>
    </div>
  )
}
