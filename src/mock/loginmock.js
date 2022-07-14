//mock.js
let Mock=require("mockjs")

Mock.mock("/api/login","post",(config)=>{
    console.log("login",config);//string 
    let body=JSON.parse(config.body)//转成对象
    console.log("body",body);
    // let username=body.username
    if(body.username==="admin"&&body.password==="123456"){
        return{
            status:200,
            message:"success",
            data:{username:body.username,password:body.password,
            token:"8465231dasdashhjknm"
        }
    }
    }else{
        return{
            status:501,
            message:"fail",
        }
    }
    
})//第三个参数就是数据
