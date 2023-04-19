/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-26 22:27:02
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-02-26 22:38:03
 * @Description: 
 */
import hyRequest from "../request"

export function getFavor(){
    return hyRequest.get({
    url: '/favor/list'
    })
} 

