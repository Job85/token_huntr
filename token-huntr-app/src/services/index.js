import Axios from 'axios'

const TokenHuntr = Axios.create({ baseURL: 'http://localhost:3001' })


export default TokenHuntr