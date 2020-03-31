import {request} from './request'
// 获取一级类目
export function getNavData() {
    return request({
        url:'/bank-categorys',
        params:{
            isLeaf:false
        }
    })
}
// 获取二级类目
export function getSecNavData(pid) {
    return request({
        url:'/bank-categorys/parent',
        params:{
            pid
        }
    })
}