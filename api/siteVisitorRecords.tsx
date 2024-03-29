'use client'
import {useEffect} from "react";
import {addRecords, getRecords} from "@linround/commonapi";

export function SiteVisitorRecords() {
  useEffect(  ()=>{
    getRecords().then((response:any)=>{
      console.log('getRecords',response)
    })
    return ()=>{}
  })
  return (
    <></>
  )
}

export function AddSiteVisitorRecords() {
  useEffect(() => {
    addRecords().then((response:any)=>{
      console.log('addRecords',response)
    })
  });
  return (
    <></>
  )

}
