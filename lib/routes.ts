export type Item = {
  name:string
  slug:string
  description:string
}

export const mainRoute:Item[] = [
  {
    name:'Projects',
    slug:'projects',
    description:'一些项目'
  },{
    name:'render',
    slug:'',
    description:'一些灵感'
  },{
    name:'About',
    slug:'about',
    description:'一些经历'
  },
]

export const graphicsLibraryRouter = {
  name:'graphicsLibrary',
  slug:'graphicsLibrary',
  description:'收集图形库'
}
export const calendarDemo = {
  name:'calendarDemo',
  slug:'https://ucalendar.cn/',
  description:'开源的日历web'
}
