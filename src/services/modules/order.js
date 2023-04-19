/*
 * @Description: 订单页处理
 * @Author: 86
 * @Date: 2023-04-17 18:09:02
 * @LastEditTime: 2023-04-19 19:47:52
 * @LastEditors: Please set LastEditors
 * @FilePath: \hy-trip\src\services\modules\order.js
 */
import hyRequest from "../request/index";
// 获取收藏数据
export function getOrderList() {
    return hyRequest.get({
        url: '/order/list?type=all'
    })
}
