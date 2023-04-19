/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-02-25 17:49:17
 * @Description: 
 */
import { onMounted, onUnmounted, ref } from 'vue'

import { throttle } from 'underscore'
export default function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    // 监听页面滚动到底部 做一个节流操作
    const scrollListener = throttle(() => {
        // console.log('🚀 ', scrollTop.value, clientHeight.value, scrollHeight.value)
        // console.log('页面滚动')
        // 判断是window对象，还是元素
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = Math.ceil(document.documentElement.scrollTop) // 需要做一个向上取整，不然是小数永远不能大于滚动条高度
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            // 否则监听元素内部滚动
            clientHeight.value = el.clientHeight
            scrollTop.value = Math.ceil(el.scrollTop) // 向上取整
            scrollHeight.value = el.scrollHeight
        }
        // client + scrollTop >=scrollHeight 说明已经滚动到底部
        if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
            isReachBottom.value = true
            console.log('滚动到了底部')
        }
    }, 200)

    // 挂载
    onMounted(() => {
        if (elRef) el = elRef.value
        el.addEventListener("scroll", scrollListener)
    })
    // 卸载
    onUnmounted(() => {
        el.removeEventListener("scroll", scrollListener)
    })

    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}