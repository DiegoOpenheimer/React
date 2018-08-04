import instance from './index'
export const requestLogin = (user) => instance.post('/users/login', user)