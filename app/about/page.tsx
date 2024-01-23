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
        .</li>
      <li style={{margin:'10px 0'}}>I am a front-end developer.</li>
      <li className={style.caption}>
        看了一些非技术类的书籍，例如一些心理学，社会学，人物传记。此时，我对因果深信不移。我也打算在此种下因的种子，希望可以由此给你带来一些帮助。
      </li>
      <li className={style.information}>
        <Link
          className={style.contact}
          target={'_blank'}
          href={'https://github.com/linround'}>
          GitHub</Link>

        <Link
          className={style.contact}
          href={'mailto:yuanlincuc@gmail.com'}>
          Gmail</Link>
      </li>
    </ul>
  )
}
