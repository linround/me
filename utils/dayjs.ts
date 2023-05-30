import dayjs from "dayjs";

export function formatTime(timestamp:number):string {
  return dayjs(timestamp).format('YYYY/MM/DD')
}
