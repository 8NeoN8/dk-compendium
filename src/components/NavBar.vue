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
          route: '/dk-compendium'
        },
        {
          label: 'Summary',
          icon: 'pi pi-home',
          route: '/dk-compendium/summary'
        },
        {
          label: 'Glossary',
          icon: 'pi pi-home',
          route: '/dk-compendium/glossary'
        },
        {
          label: 'Fundamentals',
          icon: 'pi pi-home',
          route: '/dk-compendium/fundamentals'
        },
        {
          label: "Cranky's Corner",
          icon: 'pi pi-home',
          route: '/dk-compendium/crankyscorner'
        },
        {
          label: "Combos",
          icon: 'pi pi-home',
          route: '/dk-compendium/combos'
        },
        {
          label: 'Tech Guides',
          icon: 'pi pi-home',
          route: '/dk-compendium/techs'
        },
        {
          label: 'Resources',
          icon: 'pi pi-home',
          route: '/dk-compendium/resources'
        },
        {
          label: 'Match-ups',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups'
        },
      ]
    }
  },
}
</script>

<style>
@import './navBar.css';
</style>