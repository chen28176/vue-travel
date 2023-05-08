/*
 * @Description: 网络配置
 * @Author: 86
 * @Date: 2023-02-23 22:10:10
 * @LastEditTime: 2023-05-08 00:44:40
 */
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        }),
        this.instance.interceptors.request.use(config => {
            // 当发送网络请求时更新加载动画
            mainStore.isLoading = true
            return config
        },err =>{
            return err
        }),
        this.instance.interceptors.response.use(res =>{
            mainStore.isLoading = false
            return res
        },res =>{
            mainStore.isLoading = false
            return err
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new HYRequest(BASE_URL, TIMEOUT)