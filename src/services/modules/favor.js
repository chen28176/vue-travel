/*
 * @Description: 
 * @Author: 86
 * @Date: 2023-04-17 18:09:02
 * @LastEditTime: 2023-04-19 19:46:58
 * @LastEditors: Please set LastEditors
 * @FilePath: \hy-trip\src\services\modules\favor.js
 */
import hyRequest from "../request/index";
// 获取收藏数据
export function getFavorList() {
    return hyRequest.get({
        url: '/favor/list'
    })
}
