import axios from 'axios'


export const postAPI = async (url: string, post: object, token?:string) => {
  const res = await axios.post(`/api/${url}`, post, {
    headers: { Authorization: token as string }
  })

  return res
}

export const getAPI = async (url: string, token?:string) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token as string }
  })

  return res
}
