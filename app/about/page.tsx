import style from "./page.module.css";
import {ArticleLink} from "@/ui/articleLink";

export const metadata = {
  title: 'About',
}
export default function About() {
  return (
      <ul className={style.container}>
        <li className={style.listItem}>I got my bachelor degree in
          Electronic and Information Engineering from .
        </li>
        <li className={style.listItem}>I am a front-end developer.</li>

        <img className={style.profile} src={'/profile.svg'}/>
        <li className={style.caption}>
          看了一些非技术类的书籍，例如一些心理学，社会学，人物传记。此时，我对因果深信不移。我也打算在此种下因的种子，希望可以由此给你带来一些帮助。
        </li>

        <li className={style.listItem}>
          <ArticleLink href={'https://three.ucalendar.cn/'}>Shader与图形学</ArticleLink>
        </li>
    </ul>

  )
}
