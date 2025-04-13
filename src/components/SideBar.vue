<template>
  <div class="side-bar" style="z-index: 10;">
      <Drawer v-model:visible="visible">
          test
      </Drawer>
      <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script>


export default {
  name:'NavBar',
  data() {
    return {
      visible: false,
      items:[
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/'
        },
        {
          label: 'Summary & Attributes',
          icon: 'pi pi-home',
          route: '/summary'
        },
        {
          label: 'Glossary',
          icon: 'pi pi-home',
          route: '/glossary'
        },
        {
          label: "Combos",
          icon: 'pi pi-home',
          route: '/combos'
        },
        {
          label: 'Fundamentals',
          icon: 'pi pi-home',
          route: '/fundamentals'
        },
        {
          label: "Cranky's Corner",
          icon: 'pi pi-home',
          route: '/crankyscorner'
        },
        {
          label: 'Tech Guides',
          icon: 'pi pi-home',
          route: '/techs'
        },
        {
          label: 'Resources',
          icon: 'pi pi-home',
          route: '/resources'
        },
        {
          label: 'Match-up Guides',
          icon: 'pi pi-home',
          route: '/matchups'
        },
      ]
    }
  },
  props:{
    /* visible:{
      type: Boolean,
      default: false
    } */
  }
}
</script>

<style>
.side-bar{
  height: 100vh;
  background-color: blue;
  width: 10%;
}
.p-drawer-content, .p-drawer-header{
    background-color: yellow;
}
</style>