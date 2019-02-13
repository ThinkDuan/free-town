<template>
  <div class="body">
    <duo-header></duo-header>
    <duo-main></duo-main>
    <duo-footer></duo-footer>
  </div>  
</template>
<script>
import DuoHeader from './header/header';
import DuoFooter from './footer/footer';
import DuoMain from './main/main.vue'
export default {
  components:{
    DuoHeader,
    DuoFooter,
    DuoMain
  }
}
</script>
<style scoped>
.body{
  font-size: 16px;
}
</style>

