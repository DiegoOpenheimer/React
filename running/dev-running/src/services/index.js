import axios from 'axios'
const PORT = 3001

const instance = axios.create({
    baseURL: 'http://192.168.0.102:'+PORT,
    timeout: 10 * 1000
})

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
}, err => console.log("ERROR: ", err))

export default instance