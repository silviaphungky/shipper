import axios from 'axios'

const baseUrl = 'https://randomuser.me/api'

const RandomUserApi = {
  get: async ({ params }) => {
    const response = await axios.get(
      baseUrl,
      { params }
    ) 

    return response
  }
}

export default RandomUserApi
