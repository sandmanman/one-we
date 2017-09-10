//
// axios
// 
import axios from 'axios'
// import store from '../store'
// import router from '../router'

import { docCookies } from '@/utils'


axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// `validateStatus`定义是否解析或拒绝给定的promise
// HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被拒绝。
axios.defaults.validateStatus = function(status) {
    console.log(status)
    console.log(status >= 200 && status < 300)
    return status >= 200 && status < 300
}

// 创建一个axios实例
const service = axios.create({
    timeout: 5000, // 如果请求超过 `timeout` 的时间，请求将被中断
    baseURL: 'http://localhost:1128',
    //withCredentials: true, // `withCredentials`指示是否跨站点访问控制请求
})


//
// 请求时的拦截器
//
service.interceptors.request.use(
    config => {
        console.log('axios.interceptors.request')
        return config
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

//
// 请求完成后的拦截器
//
// service.interceptors.response.use(
//     response => {
//         // 对响应数据做点什么
//         return response
//     },
//     error => {
//         // 对响应错误做点什么

//         // 默认除了2XX之外的状态码都是错误的，就会走这里
//         if(error.response) {
//             switch(error.response.status) {
//                 case 401:
//                     store.dispatch('userLogout') // 可能token过期了，清除它
//                     router.replace({
//                         path: '/login', // 跳转到登录页面
//                         query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//                     })

//             }
//         }

//         return Promise.reject(error.response)
//     }
// )

export default service