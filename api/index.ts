const baseUrl:string = 'https://ucalendar.cn/api'
const POST:string = 'POST'
export async function getRecords() {
  const url:string = '/monitoring/records'
  return fetch(`${baseUrl}${url}`).then(response=>response.json())
}

export async function addRecords() {
  const url:string = '/monitoring/add'
  const data = {
    category:'visit',
    timePoint:Date.now(),
  }
  return fetch(`${baseUrl}${url}`,{
    method:POST,
    body:JSON.stringify(data),
    headers:{
      'content-type': 'application/json'
    }
  }).then(response=>response.json())

}
