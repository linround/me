import {Heart} from "@/icon/Heart";
import {Clock} from "@/icon/Clock";
import style from './flexBoxExercise.module.css'

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
      <a href="#" className={style.cardLink}>
        <div className={style.cardImgHover}></div>
      </a>
      <div className={style.cardInfo}>
        <span className={style.cardCategory}> 种类</span>
        <h3 className={style.cardTitle}>Crisp Spanish tortilla Matzo brei</h3>
        <span className={style.cardBy}>
          by <a href="#" className={style.cardAuthor} title="author">Celeste Mills</a></span>
      </div>
    </article>
  )
}
