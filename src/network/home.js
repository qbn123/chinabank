import {request} from "./request"
export function getBanner() {
    return request({
        url:'/bank-banners'
    })
}
export function conServiceBanner(params) {
    // return request1({
    //     url:'/home/multidata'
    // })
    return request({
        url:'/bank-contents',
        params
    })
}