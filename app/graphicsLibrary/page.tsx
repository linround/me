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
  }
]
export default function Page() {
  return (
    <div>
      <h1 className={style.title}>{graphicsLibraryRouter.description}</h1>
      <p className={style.caption}>
        人的幸福感，最终只能源自内心的安宁。
      </p>
      <div className={style.content}>
        {
          graphicsLibraryLinks.map(link=>{
            return (
              <div key={link.url} className={style.linkUrl}>
                <Link
                  className={style.linkText}
                  href={link.url}
                  target={'_blank'}>{link.url}</Link>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
