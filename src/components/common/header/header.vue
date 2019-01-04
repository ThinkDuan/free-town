<template>
  <header class="header">
    <div class="header-logo">
      <img src="../../../assets/qianduanxiaozhen.png" alt="前端小镇" >
    </div>
    <all-nav class="header-all-nav"></all-nav>
    <div>search</div>
    <div>
      <div>课程</div>
    </div>
  </header>
</template>
<script>
import AllNav from './allNav'
export default {
  name: 'Header',
  components: {
    AllNav
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped>
.header{
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsla(0,0%,100%,.15);
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
.header-all-nav{
  position: absolute;
  left: 0;
  top: 0;
}
</style>


