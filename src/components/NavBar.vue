<template>
  <Menubar :model="items" class="nav-bar">
    <template #item="{ item, props, hasSubmenu }">
      <!-- <RouterLink to={{item.route}}></RouterLink> -->
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
          </a>
      </router-link>
  </template>
  </Menubar>
</template>

<script>


export default {
  name:'NavBar',
  data() {
    return {
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
}
</script>

<style>
@import './navBar.css';
</style>