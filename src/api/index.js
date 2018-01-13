import ajax from './ajax'
export const requestHome=()=>ajax('/api')
export const requestHomeB=()=>ajax('/test')
export const requestMenuL=()=>ajax('/menuL/menuL')
export const requestBrands=()=>ajax('/brands/brands')
export const requestPet=(obj)=>ajax('/pet',obj)

// 短信验证登录
export const mobileCode = phone =>ajax('/login/sendcode', {phone} )
//手机登录
export const phoneLogin = (phone,code) => ajax('/login/login', {phone,code})
