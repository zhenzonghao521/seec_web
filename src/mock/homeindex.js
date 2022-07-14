//mock.js
let Mock=require("mockjs")
let dayjs=require("dayjs")

//栏截aa
let arr= [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "李小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "张小虎",
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "赵小虎",
      address: "上海市普陀区金沙江路 1516 弄",
    }
  ]

// })//第三个参数就是数据

//请求
Mock.mock("/api/all","get",(options)=>{
    console.log("ab",options);
    return {
        status:"200",
        message:"success",
        data:arr
    }
})//第三个参数就是数据

//增加
Mock.mock("/api/add","post",(options)=>{
    console.log("增加",options);
    let body=JSON.parse(options.body)
    body.date=dayjs(new Date(body.date)).format("YYYY-MM-DD");
    console.log("增加body",body);
    arr.push(body)
    return {
        status:"200",
        message:"success",
        data:arr
    }
})//第三个参数就是数据

//删除
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    console.log("删除",options);
    let url=options.url
    let index=url.split("=")[1]
    console.log("需要删除的下标",index);
    let newarr=arr.splice(index,1)
    console.log("新的数组",arr);//返回删除的数据
    return {
        status:"200",
        message:"删除成功",
        data:arr
    }
})//第三个参数就是数据

//修改
Mock.mock("/api/update","put",(options)=>{
    console.log("修改",options);
    let body=JSON.parse(options.body)
    console.log("xiugai",body);
    let {date,name,address,index}=body
    arr[index].date=date,
    arr[index].name=name,
    arr[index].address=address
    return {
        status:"200",
        message:"success",
        data:arr
    }
})//第三个参数就是数据