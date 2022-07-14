//mock.js
let Mock=require("mockjs")
//栏截aa
let arr=["1","2","3","4"]
//api/aa
// Mock.mock("/ab","post",(options)=>{
//     console.log("1",options);//url:"/api/aa",type:"get",body:null
//     return arr
// })//第三个参数就是数据
Mock.mock(/\/api\/acd/,"post",(options)=>{
    console.log("acd",options);
    return arr
})//第三个参数就是数据
Mock.mock("/asd","post",(options)=>{
    console.log("asd",options);
    return {
        status:"200",
        message:"success",
        data:arr
    }
})//第三个参数就是数据
