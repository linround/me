import Link from "next/link";
import style from "./layoutFooter.module.css";


export function LayoutFooter() {
  return (
    <footer className={style.container}>
        联系与帮助：
        <Link
          className={style.contact}
          target={'_blank'}
          href={'https://github.com/linround'}>
          GitHub
        </Link>
        <Link
          className={style.contact}
          href={'mailto:yuanlincuc@gmail.com'}>
          Gmail
        </Link>
    </footer>
  )
}
