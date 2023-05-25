import {Item} from "@/lib/routes";
import Link from "next/link";
import React from "react";

interface IProp {
  item:Item
}
export function NavItem(prop:IProp){
  const {item} = prop

  return (
    <Link href={`/${item.slug}`}>
      {item.name}
    </Link>
  )
}
