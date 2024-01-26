/**
 * 文档
 * https://dayjs.gitee.io/docs/zh-CN/display/format
 *
 * */
import dayjs from "dayjs";

export function formatTime(timestamp:number):string {
  return dayjs(timestamp).format('YYYY/MM/DD')
}
