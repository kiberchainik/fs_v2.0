import axios, {CreateAxiosDefaults} from 'axios'
import { getContentType } from './api.helpers'
import { SERVER_URL } from '../config'

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    withCredentials: true
}

const axiosPublic = axios.create(options)
export const axiosPrivate = axios.create(options)

