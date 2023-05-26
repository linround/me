'use client'
import {Item} from "@/lib/routes";
import Link from "next/link";
import React from "react";
import style from './navItem.module.css'
import {usePathname, useSelectedLayoutSegment} from "next/navigation";
import clsx from "clsx";

interface IProp {
  item:Item
}
export function NavItem(prop:IProp){
  const {item} = prop
  const pathname = usePathname();
  const isActive = pathname === item.slug
  return (
    <Link href={item.slug} className={clsx([style.link,isActive && style.active])}>
      {item.name}
    </Link>
  )
}
