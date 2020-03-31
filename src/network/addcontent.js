import {request} from "./request"
export function postcontent(config) {
    return request({
        url:'/bank-contents',
        method:'post',
        data:config
    })
}
