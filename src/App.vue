<template>
  <main class="main-container">
    <!-- <NavBar></NavBar> -->
    <div class="main-content">
      <SideBar></SideBar>
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

export default {
    data() {
      return {
        sideVisible: true
      }
    },
    components:{
      NavBar,
      SideBar
    },
    methods: {
      
    },
}
</script>

<style scoped>
@import './style.css';

.main-content{
  display: flex;
  position: relative;
  max-height: 100vh;
  overflow-y: hidden;
}
</style>
