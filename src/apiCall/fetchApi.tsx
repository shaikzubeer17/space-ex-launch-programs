import axios from 'axios'

export default async function fetchApi(url: string) {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw error.response
  }
}