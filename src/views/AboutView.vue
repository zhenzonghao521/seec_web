<template>
  <div>
    about
  </div>
</template>

<script>
import instance from "@/api/api"
export default {
  name:"AboutView",
  created() {
    //api/aa ===> 127.0.0.1:2222/aa
    // instance.get("/aa").then(res=>console.log(res))
    // instance.post("/asd",{name:"zz"}).then(res=>console.log(res))//name是传的参数
    instance.post("/acd").then(res=>console.log(res))//name是传的参数
    instance.get("/acd").then(res=>console.log(res))//name是传的参数

  },
}
</script>

<style scoped lang="scss">
  
</style>
