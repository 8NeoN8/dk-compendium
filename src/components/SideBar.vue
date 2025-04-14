<template>
  <div class="side-bar" style="z-index: 10;">

      <Drawer v-model:visible="visible" header="DKompendium" position="right">
          <div class="panel-menu card flex justify-center">
            <PanelMenu :model="itemsTest">

              <template #item="{ item }">
                <router-link v-slot="{ href, navigate }" :to="item.route" custom>
                    <a class="side-router-link cursor-pointer text-primary-700 dark:text-primary-0 px-4 py-4" :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="side-link-label ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>


            </PanelMenu>
          </div>
      </Drawer>

      <Button icon="pi pi-bars" v-Tooltip.left="'Open Menu'" @click="visible = !visible"/>
      <Button icon="pi pi-cog" v-Tooltip.left="'Open Settings'" @click="visible = !visible"/>

      <Dialog v-model:visible="showMuSearch" modal header="Select Matchup" :style="{ width: '50%' }">
        <button @click="showMuSearch = false">close this shi</button>
      </Dialog>

  </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {
      visible: false,
      showMuSearch: false,
      itemsTest:[
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Summary',
          icon: 'pi pi-home',
          route: '/summary',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Glossary',
          icon: 'pi pi-home',
          route: '/glossary',
          command: () => {
            this.visible = false
          }
        },
        {
          label: "Combos",
          icon: 'pi pi-home',
          route: '/combos',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Fundamentals',
          icon: 'pi pi-home',
          route: '/fundamentals',
          command: () => {
            this.visible = false
          }
        },
        {
          label: "Cranky's Corner",
          icon: 'pi pi-home',
          route: '/crankyscorner',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Tech Guides',
          icon: 'pi pi-home',
          route: '/techs',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Resources',
          icon: 'pi pi-home',
          route: '/resources',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Match-up Guides',
          icon: 'pi pi-home',
          command: () => {
            this.showMuSearch = true
          }
        },
      ],
    }
  },
  props:{
  }
}
</script>

<style>
.side-bar{
  height: 100vh;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0 !important;
}

.p-drawer-content{
    background-color: none;
    display: flex;
    flex-direction: column;
    padding: 0 !important;
}

.side-router-link{
  text-decoration: none;
  color: var(--text-color);
  width: 100% !important;
  gap: 0.5rem !important;
  display: flex;
}

.side-link-label{
  width: 100%;
  display: inline-flex;
}
</style>