import Link from "next/link";
import style from "./layoutFooter.module.css";


export function LayoutFooter() {
  return (
    <footer className={style.container}>
      <div>
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
      </div>
      <div>
        版权所有：
        <Link
          className={style.contact}
          target={'_blank'}
          href={'https://beian.miit.gov.cn/#/Integrated/index'}>

          湘ICP备2023007031号-1
        </Link>
      </div>
    </footer>
  )
}
