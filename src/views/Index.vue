<template>
  <div>
    <h3>数据的增删改查</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" align="center" width="100px">
      </el-table-column>
      <el-table-column label="姓名" prop="name" align="center" width="100px">
      </el-table-column>
      <el-table-column label="地址" prop="address" align="center" width="400px">
        <template slot="header" slot-scope="scope">
          <!-- slot 和slot-scope干什么的 -->
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          <el-button @click="search1">搜索</el-button>
        </template>
      </el-table-column>
      <el-table-column label="修改" align="right" width="300px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
   <div>
     <button @click="addfn()">增加新用户</button>
   </div>


    <!-- 增加的弹窗 -->
    <AddDialog :addform="addform" :formLabelWidth="formLabelWidth" :incrementform="incrementform" @my_addcancelfn="addcancelfn" @my_addconfirmfn="addconfirmfn"></AddDialog>
   
    <!-- 表单 -->
    <MyDialog :form="form" :dialogFormVisible="dialogFormVisible" :formLabelWidth="formLabelWidth" @confirmfn_my="confirmfn" @my_cancelfn="cancelfn"></MyDialog>
    <button @click="getkan">看数据库数据改了没</button>

  
  </div>
</template>

<script>
import dayjs from "dayjs"
import instance from "../api/api";
import MyDialog from "../components/MyDialog.vue"
import AddDialog from "../components/AddDialog.vue"
export default {
  name: "Index",
  data() {
    return {
      search: "",
      tableData: [],
      dialogFormVisible: false, //表单的显示隐藏
      form: {
        index:0,
        date: null,
        name: "",
        address: "",
      }, //表单的内容
      formLabelWidth: "120px",
      incrementform:false,
      addform:{
        date:null,
        name:"",
        address:""
      }
    };
  },
  components:{
    MyDialog,
    AddDialog
  },
  created() {
    this.getall(); //
  },
  methods: {
    search1(){
      console.log(this.search);
      this.getall();
    },
    addcancelfn(){
      //增加弹窗的取消
    },
    addconfirmfn(){
     //增加弹窗的确定
     this.increaredin()
     
     .then(()=>{
        this.$message({
          type:"success",
          message:"添加成功",
          duration:3000,
          onClose:()=>{
            this.incrementform=false
            this.getall()
          },
          
        })
     })
     .catch(()=>{

     })
    },
    addfn(){
      this.incrementform=true
    },
    getkan(){
      instance.get("/all").then(res=>{console.log(res);})
    },
    handleEdit(scope) {
      console.log("edit", scope);
      this.form = scope.row;
      // this.form.date= println(this.form.date)
      this.form.index=scope.$index
      this.dialogFormVisible = true;
    },//fu
    handleDelete(scope) {
      console.log("scope", scope);
      this.$confirm("确定删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //确定
          this.deletefn(scope.$index).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          //取消
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },//fu

    //删除业务
    async deletefn(index) {
      let { data } = instance.delete("/delete", { params: { index } });
      this.getall();
      console.log("delete", data);
    },
    //请数据的业务
    async getall() {
      let { data } = await instance.get("/all");
      console.log(data);
      this.tableData = data.data;
    },
    cancelfn(){
      this.dialogFormVisible=false
    },
    async confirmfn(){
      this.dialogFormVisible=false
      this.form.date=dayjs(this.form.date).format("YYYY-MM-DD");
      this.updatefn()
    },
  //修改业务
    async updatefn(){
      let {date,name,address,index}=this.form
      let { data } = await instance.put("/update",{date,name,address,index});
      console.log("修改",data);
    },
  //增加业务的函数
    async increaredin(){
      let{date,name,address}=this.addform
      let {data}=await instance.post("/add",{date,name,address})//传参
      console.log("add",data);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
