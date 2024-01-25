'use client'
import style from './calendarDemo.module.css'
import clsx from "clsx";
export function CalendarDemo() {
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  const dayNames= [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
  const newDate = new Date()
  return (
    <div className={clsx([style.container,style.signboard,style.outer])}>
      <div className={clsx([style.signboard,style.front,style.inner,style.anim04c])}>
        <li className={clsx([style.year,style.anim04c])}>
          <span>2024</span>
        </li>
        <ul className={clsx([style.calendarMain,style.anim04c])}>
          <li className={clsx([style.month,style.anim04c])}>
            <span>January</span>
          </li>
          <li className={clsx([style.date,style.anim04c])}>
            <span>25</span>
          </li>
          <li className={clsx([style.day,style.anim04c])}>
            <span>Thursday</span>
          </li>
        </ul>

        <li className={clsx([style.clock,style.minute,style.anim04c])}>
          <span>55</span>
        </li>

        <li className={clsx([style.calendarNormal,style.date2,style.anim04c])}>
          <span>25</span>
        </li>
      </div>
      <div className={clsx([style.signboard,style.left,style.inner,style.anim04c])}>

        <li className={clsx([style.clock,style.hour,style.anim04c])}>
          <span>17</span>
        </li>

        <li className={clsx([style.calendarNormal,style.day2,style.anim04c])}>
          <span>Thursday</span>
        </li>
      </div>
      <div className={clsx([style.signboard,style.right,style.inner,style.anim04c])}>

        <li className={clsx([style.clock,style.second,style.anim04c])}>
          <span>28</span>
        </li>

        <li className={clsx([style.calendarNormal,style.month2,style.anim04c])}>
          <span>January</span>
        </li>
      </div>
    </div>
  )
}
