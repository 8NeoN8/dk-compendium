<template>
  <main class="main-container">
    <NavBar v-if="!isMobile"></NavBar>
    <div class="main-content">
      <RouterView :key="$route.fullPath" :isMobile="isMobile"></RouterView>
      <SideBar v-if="isMobile"></SideBar>
    </div>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  data() {
    return {
      sideVisible: true,
      isMobile: false,
    }
  },
  components:{
    NavBar,
    SideBar
  },
  methods: {
    checkDevice(){
      screen.width < 760 ? this.isMobile = true : this.isMobile = false
    }
  },
  created() {
    this.checkDevice()
    window.addEventListener("resize", this.checkDevice());
  },
  destroyed() {
    window.removeEventListener("resize", this.checkDevice());
  },
}
</script>

<style scoped>
@import './style.css';
</style>
