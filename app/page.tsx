import Link from "next/link";
import style from './page.module.css'


export default function Home() {
  return (
    <ul className={style.container}>
      <li>In 2020, I got my BEng degree in
        Electronic and Information Engineering from <Link
          className={style.link}
          target={'_blank'}
          href={'https://www.cuc.edu.cn/'}>
          Communication University of China
        </Link>
        .</li>
      <li style={{margin:'10px 0'}}>In 2020, Start learning front-end.</li>
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
