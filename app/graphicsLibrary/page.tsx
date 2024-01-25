import {graphicsLibraryRouter} from "@/lib/routes";
import style from './page.module.css'
import Link from "next/link";
export const metadata = {
  title: graphicsLibraryRouter.name,
}
const graphicsLibraryLinks = [
  {
    url:'https://github.com/leaferjs/leafer',
    name:'leafer'
  },
  {
    url: 'https://github.com/ecomfe/zrender',
    name:'zrender'
  },
  {
    url: 'https://github.com/konvajs/konva',
    name:'konva'
  },
  {
    url: 'https://github.com/rough-stuff/rough',
    name:'rough'
  },
  {
    url: 'https://github.com/fabricjs/fabric.js',
    name:'fabric'
  }
]
export default function Page() {
  return (
    <div>
      <h1 className={style.title}>{graphicsLibraryRouter.description}</h1>
      <p className={style.caption}>
        人的幸福感，最终只能源自内心的安宁。
      </p>
      <article className={style.content}>
        {
          graphicsLibraryLinks.map(link=>{
            return (
              <p key={link.url} className={style.linkUrl}>
                <Link
                  className={style.linkText}
                  href={link.url}
                  target={'_blank'}>{link.url}</Link>
              </p>
            )
          })
        }
      </article>

      <footer className={style.footer}>
        以上是基于
        <strong>
          canvas
        </strong>
        实现的
        <strong>
          2D
        </strong>
        图形库，在很多数据可视化的项目中起到很大的作用。
        <br/>
        <strong>
          <Link className={style.linkText} href={'https://github.com/apache/echarts'} target={'_blank'}>echart</Link>
        </strong>是基于
        <strong>
          <Link className={style.linkText} href={'https://github.com/ecomfe/zrender'} target={'_blank'}>zrender</Link>
        </strong>；<br/>
        <strong>
          <Link className={style.linkText} href={'https://github.com/VisActor/VChart'} target={'_blank'}>vchart</Link>
        </strong>
        部分源码参考了
        <strong>
          <Link className={style.linkText} href={'https://github.com/konvajs/konva'} target={'_blank'}>konva</Link>
        </strong>；<br/>
        <strong>
          <Link className={style.linkText} href={'https://github.com/fabricjs/fabric.js'} target={'_blank'}>fabric</Link>
        </strong>
        的交互非常全面。
      </footer>


    </div>
  )
}
