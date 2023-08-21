export interface IPost{
  id:number
  title:string
  timestamp:number
  author:string
  link:string
  route:string
  desc:string
}
export const brightMoon:IPost = {
  id: 1,
  title: '明朝那些事儿',
  timestamp: 1685435914456,
  author:'lin',
  route:'/posts/bright-moon',
  link:'https://zh.wikipedia.org/wiki/%E6%98%8E%E6%9C%9D%E9%82%A3%E4%BA%9B%E4%BA%8B%E5%85%92',
  desc:''
}

export const mShapedSociety:IPost = {
  id: 2,
  title: 'M型社会',
  timestamp: 1685499769579,
  author:'lin',
  route:'/posts/m-shaped-society',
  link:'',
  desc:''
}

export const css:IPost = {
  id: 3,
  title: 'CSS',
  timestamp: 1685499769579,
  author:'lin',
  route:'/posts/css',
  link:'',
  desc:''
}

export const posts:IPost[] = [
  brightMoon,
]
