import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5c96c496717b4014b73ce22dcd3e8ff4'
  }
})