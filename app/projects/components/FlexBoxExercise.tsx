import style from './flexBoxExercise.module.css'
import {graphicsLibraryRouter} from "@/lib/routes";

/**
 *
 * 参考链接：
 * https://codepen.io/veronicadev/pen/WJyOwG
 *
 * */

export function FlexBoxExercise() {
  return (
    <article className={style.card}>
      {/*<div className={style.cardInfoHover}>*/}
      {/*  <Heart className={style.cardLike}/>*/}
      {/*  <div className={style.cardClockInfo}>*/}
      {/*    <Clock className={style.cardClock}/>*/}
      {/*    <span className={style.cardTime}>15 min</span>*/}
      {/*  </div>*/}

      {/*</div>*/}
      <div className={style.cardImg} ></div>
      <span  className={style.cardLink}>
        <div className={style.cardImgHover}></div>
      </span>
      <div className={style.cardInfo}>
        <span className={style.cardCategory}> Tag</span>
        <h3 className={style.cardTitle}>{graphicsLibraryRouter.description}</h3>
        <span className={style.cardBy}>
          by <span className={style.cardAuthor} title="author">linround</span></span>
      </div>
    </article>
  )
}
