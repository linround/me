import style from './post.module.css'
import Link from "next/link";
import {IPost} from "@/lib/posts";
import {formatTime} from "@/utils/dayjs";
export function Post(prop: {post:IPost} ){
  const {post} = prop
  return (
    <Link className={style.container} href={post.route}>
      <div className={style.title}>{post.title}</div>
      <div className={style.date}>{formatTime(post.timestamp)}</div>
    </Link>
  )
}
