/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-25 16:36:03
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-02-25 16:40:16
 * @Description: 
 */

// * 配置打包内容尺寸
module.exports = {
    plugins: {
        //   'autoprefixer': {
        //     browsers: ['Android >= 4.0', 'iOS >= 7']
        //   },
        //   'postcss-pxtorem': {
        //     rootValue: 37.5,
        //     propList: ['*']
        //   }
        // }
        'postcss-px-to-viewport': {
            viewportWidth: 375,
        }
    }
}