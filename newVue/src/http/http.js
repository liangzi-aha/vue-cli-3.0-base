import axios from "axios";
import router from '../router/index'

// axios 配置
axios.defaults.timeout = 60000
// // 默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// // 默认请求地址
axios.defaults.baseURL = '/api'

// 请求拦截  可以判断用户是否在登录状态  判断token等
axios.interceptors.request.use((config) => {
    
    return config;
}, (err) => {
    return Promise.reject(err)
})

// 响应拦截 根据不同响应 做不同处理，比如响应status 为404，我们跳转到404页面
axios.interceptors.response.use((config) => {
    if (config.status == 404) {
        // 跳转到404页面
        router.push({ path: '/404' })
    }
    return config.data;
}, (err) => {
    // 错误我们返回一个Promise对象
    return Promise.reject(err)
})

// post请求
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, param)
            .then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
            .catch(error => {
                reject(error)
            })
    }
    )
}

// get请求
export function post(url, param) {
    return new Promise((resolve, reject) => {
        axios.post(url, param)
            .then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
            .catch(error => {
                reject(error)
            })
        }
    )
}

export default {
    //所有接口
    test(params) {
        return get('/get', params)
    }
}