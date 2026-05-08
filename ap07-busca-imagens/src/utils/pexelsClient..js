import axios from 'axios'
export default axios.create({
    baseURL:'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'qiZh9wwyjrIbYVFZPPM9ebcZ4TOhaGjDLyECly79IRnkscWY1npzS3qJ'
    }
})