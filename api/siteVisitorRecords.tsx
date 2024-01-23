'use client'
import {useEffect} from "react";
import {addRecords, getRecords} from "@/api/index";

export function SiteVisitorRecords() {
  useEffect(  ()=>{
    getRecords().then(response=>{
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
    addRecords().then(response=>{
      console.log('addRecords',response)
    })
  });
  return (
    <></>
  )

}
