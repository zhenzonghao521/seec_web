//mock.js
let Mock=require("mockjs")
//栏截aa
let arr=["zhangsan","lisi","wangwu","zhaoliu"]
//api/aa
// Mock.mock("/ab","post",(options)=>{
//     console.log("1",options);//url:"/api/aa",type:"get",body:null
//     return arr
// })//第三个参数就是数据
Mock.mock(/\/api\/aa/,"get",(options)=>{
    console.log("aa",options);
    return arr
})//第三个参数就是数据
Mock.mock("/ab","post",(options)=>{
    console.log("ab",options);
    return {
        status:"200",
        message:"success",
        data:arr
    }
})//第三个参数就是数据
