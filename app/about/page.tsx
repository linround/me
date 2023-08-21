import style from "./page.module.css";
import Link from "next/link";
export const metadata = {
  title: 'About',
}
export default function About() {
  return (
    <ul className={style.container}>
      <li>I got my bachelor degree in
        Electronic and Information Engineering from
        Communication University of China
        .</li>
      <li style={{margin:'10px 0'}}>I am a front-end developer.</li>
      <li className={style.line}></li>
      <li className={style.information}>
        <Link
          className={style.contact}
          target={'_blank'}
          href={'https://github.com/linround'}>
          GitHub</Link>
        ·
        <Link
          className={style.contact}
          href={'mailto:yuanlincuc@gmail.com'}>
          Gmail</Link>
      </li>
    </ul>
  )
}
