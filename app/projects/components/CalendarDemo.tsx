'use client'
import style from './calendarDemo.module.css'
import clsx from "clsx";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
type Value = number |string |null
export function CalendarDemo() {
  const monthNames = [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ]
  const dayNames= [ "周日","周一","周二","周三","周四","周五","周六" ]
  const newDate = new Date()

  const [year,setYear] = useState<Value>(null)
  const [month,setMonth] = useState<Value>(null)
  const [date,setDate] = useState<Value>(null)
  const [day,setDay] = useState<Value>(null)
  const [hours,setHours] = useState<Value>(null)
  const [minute,setMinute] = useState<Value>(null)
  const [second,setSecond] = useState<Value>(null)

  useEffect(()=>{
    const intervalID = setInterval(()=>{
      setYear(dayjs().format('YYYY'))
      setMonth(monthNames[+dayjs().format('M') -1])
      setDate(dayjs().format('DD'))
      setDay(dayNames[+dayjs().format('d')])
      setHours(dayjs().format('HH'))
      setMinute(dayjs().format('mm'))
      setSecond(dayjs().format('ss'))

    },1000)
    return ()=>{
      clearInterval(intervalID)
    }
  })
  return (
    <div className={clsx([style.container,style.signboard,style.outer])}>
      <div className={clsx([style.signboard,style.front,style.inner,style.anim04c])}>
        <li className={clsx([style.year,style.anim04c])}>
          <span>{year}</span>
        </li>
        <ul className={clsx([style.calendarMain,style.anim04c])}>
          <li className={clsx([style.month,style.anim04c])}>
            <span>{month}</span>
          </li>
          <li className={clsx([style.date,style.anim04c])}>
            <span>{date}</span>
          </li>
          <li className={clsx([style.day,style.anim04c])}>
            <span>{day}</span>
          </li>
        </ul>

        <li className={clsx([style.clock,style.minute,style.anim04c])}>
          <span>{minute}</span>
        </li>

        <li className={clsx([style.calendarNormal,style.date2,style.anim04c])}>
          <span>{date}</span>
        </li>
      </div>
      <div className={clsx([style.signboard,style.left,style.inner,style.anim04c])}>

        <li className={clsx([style.clock,style.hour,style.anim04c])}>
          <span>{hours}</span>
        </li>

        <li className={clsx([style.calendarNormal,style.month2,style.anim04c])}>
          <span>{month}</span>
        </li>
      </div>
      <div className={clsx([style.signboard,style.right,style.inner,style.anim04c])}>

        <li className={clsx([style.clock,style.second,style.anim04c])}>
          <span>{second}</span>
        </li>

        <li className={clsx([style.calendarNormal,style.day2,style.anim04c])}>
          <span>{day}</span>
        </li>
      </div>
    </div>
  )
}
