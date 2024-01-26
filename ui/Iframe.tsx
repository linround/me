'use client'
import {createRef, useEffect, useState} from "react";
import style from './iframe.module.css'
import clsx from "clsx";

interface IProps {
  src:string
}
export function IframeComponent(props:IProps) {
  const {src} = props
  const ref = createRef<HTMLIFrameElement>()
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    if(ref.current){
      const iframe = ref.current
      iframe.onload = function () {
        setLoading(false)
      }
    }
  },[ref])
  return (
    <iframe
      className={clsx([style.normal,loading && style.iframe])}
      ref={ref}
      width="640"
      height="360"
      frameBorder="0"
      src={src}
      allowFullScreen/>
  )
}
