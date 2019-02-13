<template>
  <header class="header">
    <div class="header-logo">
      <!-- <i class="fa fa-bars"></i> -->
      <img src="../../../assets/qianduanxiaozhen.png" alt="前端小镇" >
    </div>
    <!-- <all-nav class="header-all-nav" v-if="false"></all-nav> -->
    <div class="header-list">
      <ul>
        <li>前端教程</li>
        <li>前端教程1</li>
      </ul>
    </div>
    <div class="header-search">
      <el-popover
        placement="top-start"
        title="热门搜索"
        width="200"
        trigger="focus">
        <div class="header-seach-list">
          <el-tag class="header-seach-list-tag" size="small" v-for="(item,index) in searchList" :key="index" @click.native="handleSearchListClick(item)">{{item.name}}</el-tag>
        </div>
        <el-input 
          placeholder="搜索"
          v-model="searchData"
          size="small"
          slot="reference"
          >
          <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i></el-input>
      </el-popover>
    </div>
    <div class="header-sign">
      <el-button class="header-sign-in" type="primary" size="small">登录</el-button>
      <el-button class="header-sign-up" size="small">注册</el-button>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return {
      searchData: '',
      searchList: ''
    }
  },
  methods: {
    getSearchList(){
      this.$http({
        url: '/getSearchList',
        method: 'get'
      }).then((res) => {
        console.log(res);
        if(res.data.success === true){
          this.searchList = res.data.data;
        } else {
          this.$message({
            type: 'error',
            message: res.error.errMessage
          });
        }
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '操作出错'
        })
      });
    },
    handleSearch(){
      console.log(this.searchData);
    },
    handleSearchListClick(item){
      console.log(item);
      // this.$http({
      //   url: '/getSearchList',
      //   method: 'get'
      // }).then((res) => {
      //   console.log(res);
      //   if(res.data.success === true){
      //     this.searchList = res.data.data;
      //   } else {
      //     this.$message({
      //       type: 'error',
      //       message: res.error.errMessage
      //     });
      //   }
      // }).catch(() => {
      //   this.$message({
      //     type: 'error',
      //     message: '操作出错'
      //   })
      // });
    }
  },
  created(){
    this.getSearchList();
  }
}
</script>
<style scoped>
.header{
  height: 58px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
}
.header-logo{
  padding-left: 50px; 
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo img{
  height: 50%;
}
.header-list ul li{
  list-style: none;
  display: inline-block;
  margin-right: 5px;
}
.header-search{
  width: 160px;
}
.header-search i{
  cursor: pointer;
}
.header-seach-list-tag{
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
} 
.header-sign{
  display: flex;
  justify-content: center;
  align-content: center;
  padding-right: 50px;
}
.header-sign-in{
  margin-right: 10px;
}
</style>


