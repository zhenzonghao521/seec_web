//防抖
let debounce=(fn)=>{//fn是业务函数
    let timer
    
    return function(){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn()
        },2000)
    }
}
export default debounce