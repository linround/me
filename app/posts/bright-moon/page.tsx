import {Metadata} from "next";
import {brightMoon} from "@/lib/posts";
import {formatTime} from "@/utils/dayjs";
import Link from "next/link";
import style from './page.module.css'
export const metadata = {
  title: 'bright-moon',
}
export default function page(){
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <Link href={brightMoon.link} target={'_blank'}>
            {brightMoon.title}
          </Link>
        </div>
        <div>{brightMoon.author}{formatTime(brightMoon.timestamp)}</div>
      </div>
      <article className={style.content}>
        <p>&quot;我只是个平民，没有受命，只是穿着布衣，拿着拐杖，穿着草鞋，凭借自己，游历天下，故虽死，无憾。&ldquo;</p>
        <p>现在你不明白，将来你会明白，将来不明白，就再等将来，如果一辈子都不明白，也行。</p>
         <p>而最后讲述的这件东西，它超越上述的一切，至少在我看来。</p>
        <p>但这件东西，我想了很久，也无法用准确的语言，或是词句来表达，用最欠揍的话说，是只可意会，不可言传。</p>
        <p>然而，我终究是不欠揍的，在遍阅群书，却无从开口之后，我终于从一本不起眼，且无甚价值的读物上，找到了这句适合的话。</p>
        <p>这是一本台历，一本放在我面前，不知过了多久，却从未翻过，早已过期的台历。</p>
        <p>我知道，是上天把这本台历放在了我的桌前，它看着几年来我每天的努力，始终的坚持，它静静地、耐心地等待着终结。</p>
        <p>它等待着，在即将结束的那一天，我将翻开这本陪伴我始终，却始终未曾翻开的台历，在上面，有着最后的答案。</p>
        <p>我翻开了它，在这本台历上，写着一句连名人是谁都没说明白的名人名言。
          是的，这就是我想说的，这就是我想通过徐霞客所表达的，足以藐视所有王侯将相，最完美的结束语：</p>
        <p>成功只有一个——按照自己的方式，去度过人生。</p>
      </article>
    </div>
  )
}
