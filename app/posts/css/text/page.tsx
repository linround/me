import style from './page.module.css'
import {text} from "@/lib/css";
import {FontFamily} from "@/app/posts/css/text/fontFamily";
import {FontStyle} from "@/app/posts/css/text/fontStyle";
export const metadata = {
  title: 'FontFamily',
}
export default function page() {
  return (
    <div className={style.container}>
      <h1 className={''}>{text.desc}</h1>
      <FontFamily />
      <FontStyle />
    </div>
  )
}
