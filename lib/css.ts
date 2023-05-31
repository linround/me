import {IPost} from "@/lib/posts";

export const text:IPost = {
  id: 3,
  title: 'Text',
  timestamp: 1685499769579,
  author:'lin',
  route:'/posts/css/text',
  link:'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text',
  desc:'记录字体的样式使用'
}
export const css:IPost[] = [
  text,
]
