import axios from 'axios'
export function request(config) {
    //环境的切换
    // if (process.env.NODE_ENV == 'development') {
    //     axios.defaults.baseURL = 'https://www.baidu.com';}
    // else if (process.env.NODE_ENV == 'debug') {
    //     axios.defaults.baseURL = 'https://www.ceshi.com';
    // }
    // else if (process.env.NODE_ENV == 'production') {
    //     axios.defaults.baseURL = 'https://www.production.com';
    // }
    // 创建axios 实例
    const instance= axios.create({
        baseURL:'http://192.168.1.102:8080/bak',
    })
    // 发送真正的网络请求
    return instance(config)
}

// export function request1(config) {
//     // 创建axios 实例
//     const instance= axios.create({
//         baseURL:'http://123.207.32.32:8000/api/wh'
//     })
//     // 发送真正的网络请求
//     return instance(config)
// }
