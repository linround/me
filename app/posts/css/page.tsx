import style from '../bright-moon/page.module.css'
import Link from "next/link";
import {css} from "@/lib/posts";
import {formatTime} from "@/utils/dayjs";
export default function page() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.title}>
          <Link href={css.link} className={style.link} target={'_blank'}>
            {css.title}
          </Link>
        </div>
        <div className={style.introduction}>{css.author}{formatTime(css.timestamp)}</div>
      </div>
      <article className={style.content}>
        <p>&quot;我只是喜欢界面。我很好奇，电脑上的图形是如何形成的？浏览器是如何将这么多奇妙的图形渲染出来的？----真是伟大的创造者&ldquo;</p>
        <p>磁场存在自然界。有人在磁场中发现了电；有人在在数学中发现了规律；有人利用这些创造了新的规则···</p>
      </article>
    </div>
  )
}
