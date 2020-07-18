import axios from 'axios'
import { BASE_URL as baseURL } from '~/api/constants'

const apiClient = axios.create({ baseURL })

const { get, post, put, delete: destroy } = apiClient

export { get, post, put, destroy }
