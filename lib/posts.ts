export interface IPost{
  id:number
  title:string
  timestamp:number
  author:string
  link:string
}
export const brightMoon:IPost = {
  id: 1,
  title: '明朝那些事儿',
  timestamp: 1685435914456,
  author:'lin',
  link:'https://zh.wikipedia.org/wiki/%E6%98%8E%E6%9C%9D%E9%82%A3%E4%BA%9B%E4%BA%8B%E5%85%92'
}


export const posts:IPost[] = [
  brightMoon,brightMoon,
]
