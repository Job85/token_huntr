import Axios from 'axios'


// export const BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001/api' : 'https://token-huntr.com/api'
export const BASE_URL = 'http://localhost:3001/api'
console.log(BASE_URL, "You're in BASE_URL")
const TokenHuntr = Axios.create({ baseURL: BASE_URL })

TokenHuntr.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
            config.headers['access-control-allow-origin'] = '*'
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default TokenHuntr