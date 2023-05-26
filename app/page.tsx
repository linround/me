import Link from "next/link";
import style from './page.module.css'


export default function Home() {
  return (
    <ul className={style.container}>
      <li>In 2020, I got my BEng degree in Electronic and Information Engineering form <Link
          className={style.link}
          target={'_blank'}
          href={'https://www.cuc.edu.cn/'}>
          Communication University of China
        </Link>
        .</li>
      <li>In 2020, Start learning front-end.</li>
      <li></li>
    </ul>

  )
}
