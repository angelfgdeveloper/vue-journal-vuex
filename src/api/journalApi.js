import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-d239a-default-rtdb.firebaseio.com'
})

export default journalApi