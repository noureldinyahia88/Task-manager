import axios from 'axios'

const baseURL = axios.create({ baseURL: "http://3.126.203.127:8084"})

export default baseURL