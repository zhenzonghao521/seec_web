//统一管理我们的开发 接口 api
import axios from "axios"
let instance = axios.create({
    baseURL:"/api",//基本地址
    timeout:5000
})
//请求响应栏截
instance.interceptors.request.use((config)=>{
    // console.log(config);
    return config
})

instance.interceptors.response.use(response=>{
    return response
    //是后台发回的数据
})
export default instance