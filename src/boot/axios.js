import { boot } from 'quasar/wrappers'
import axios from 'axios'
import {useRouter} from 'vue-router'

const router = useRouter()
const url = "https://blogadonis-production.up.railway.app"
const api = axios.create({ baseURL: url,
  headers: {
    "content-type": "application/json"
},
})

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = api
})

export { api, url }
