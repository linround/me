import React from "react";
import {IPost} from "@/lib/posts";
import Link from "next/link";

export function SideMenu({post}:{post:IPost}) {
  return (
    <div>
      <Link href={post.route}>{post.title}</Link>
    </div>
  )
}
