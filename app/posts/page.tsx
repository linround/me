import {Post} from "@/app/posts/post";
import style from './page.module.css'
import {posts} from "@/lib/posts";
export const metadata = {
  title: 'Posts',
}


export default function page() {
  return (
    <div className={style.container}>
      {posts.map(post =>{
          return (<Post key={post.id} post={post} />)
        })}
    </div>
  )
}
