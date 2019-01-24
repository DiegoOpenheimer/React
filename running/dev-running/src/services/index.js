import axios from 'axios'
const PORT = 3001

const instance = axios.create({
    baseURL: 'http://localhost:'+PORT,
    timeout: 10 * 1000
})

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = 'Bearer '+token
    }
    return config
}, err => console.log("ERROR: ", err))

export default instance