/*
 * @Description: 
 * @Author: 86
 * @Date: 2023-05-04 20:12:52
 * @LastEditTime: 2023-05-06 00:09:27
 */
import Mock from 'mockjs'

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        username: 'admin',
        token: Mock.Random.guid()
      }
    }
  } else {
    return {
      code: 400,
      message: '用户名或密码错误',
    }
  }
})