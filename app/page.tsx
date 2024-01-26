'use client'
import css from "./page.module.css";
import {useEffect} from "react";
import {IframeComponent} from "@/ui/Iframe";



const Shaders = [
  {
    url:'https://www.shadertoy.com/embed/dddyDB?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/mtByWc?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/dtfyRl?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/DlSyDW?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/mlfBWB?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/DtsfRB?gui=true&t=10&paused=true&muted=false'
  },
  {
    url:'https://www.shadertoy.com/embed/DlSBzz?gui=true&t=10&paused=true&muted=false'
  },
]
export default function Home() {
  useEffect(()=>{
  })
  return (
    <div className={css.container}>
      {Shaders.map(shader=>{
        return (<IframeComponent src={shader.url} key={shader.url}/>)
      })}
    </div>

  )
}
