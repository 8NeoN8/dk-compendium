<template>
  <div class="side-bar" style="z-index: 10;">

      <Drawer v-model:visible="visible" header="DKompendium" position="right">

          <div class="panel-menu">
            <PanelMenu :model="navItems">
              <template #item="{ item }">
                <div v-if="item.route == 'none'">
                  <a class="side-router-link cursor-pointer text-primary-700 dark:text-primary-0 px-4 py-4">
                      <span :class="item.icon" />
                      <span class="side-link-label ml-2">{{ item.label }}</span>
                  </a>
                </div>
                <router-link v-else v-slot="{ href, navigate }" :to="item.route" custom>
                    <a class="side-router-link cursor-pointer text-primary-700 dark:text-primary-0 px-4 py-4" :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="side-link-label ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
              </template>
            </PanelMenu>
          </div>
          <div class="dko-chart">
            <Image :src="dkoChart" alt="pDKO-Chart" preview  width="225px" />
          </div>

      </Drawer>

      <Dialog class="matchup-dialog" v-model:visible="showMuSearch" modal header="Select Matchup" :style="{ width: '50%' }">

        <div class="autocomplete-container">
          <AutoComplete class="autocomplete-field" v-model="selectedCharacter" optionLabel="label" :suggestions="filteredChars" @complete="searchChar($event)" @option-select="goToMatchup($event.value.label.toLowerCase())" />
          <Button class="autocomplete-button" icon="pi pi-search" @click="goToMatchup(selectedCharacter.label.toLowerCase())"></Button>
        </div>
        
        <PanelMenu :model="characters">
          <template #item="{ item }">
            <router-link v-slot="{ href, navigate }" :to="item.route" custom>
                <a class="side-router-link cursor-pointer text-primary-700 dark:text-primary-0 px-4 py-4" :href="href" @click="navigate">
                    <span :class="item.icon" />
                    <span class="side-link-label ml-2">{{ item.label }}</span>
                </a>
            </router-link>
          </template>
        </PanelMenu>

      </Dialog>

      <Button icon="pi pi-bars" @click="visible = !visible"/>
      <Button icon="pi pi-cog" @click="visible = !visible;"/>

  </div>
</template>

<script>

import router from '../router/router'
import imgUrl from '../assets/pDKO-Chart.png'
export default {
  name:'NavBar',
  data() {
    return {
      visible: false,
      showMuSearch: false,
      selectedCharacter: null,
      dkoChart: imgUrl,
      navItems:[
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/dk-compendium',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Summary',
          icon: 'pi pi-home',
          route: '/dk-compendium/summary',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Glossary',
          icon: 'pi pi-home',
          route: '/dk-compendium/glossary',
          command: () => {
            this.visible = false
          }
        },
        {
          label: "Combos",
          icon: 'pi pi-home',
          route: '/dk-compendium/combos',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Fundamentals',
          icon: 'pi pi-home',
          route: '/dk-compendium/fundamentals',
          command: () => {
            this.visible = false
          }
        },
        {
          label: "Cranky's Corner",
          icon: 'pi pi-home',
          route: '/dk-compendium/crankyscorner',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Tech Guides',
          icon: 'pi pi-home',
          route: '/dk-compendium/techs',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Resources',
          icon: 'pi pi-home',
          route: '/dk-compendium/resources',
          command: () => {
            this.visible = false
          }
        },
        {
          label: 'Match-up Guides',
          icon: 'pi pi-home',
          command: () => {
            this.showMuSearch = true
          },
          route: 'none'
        },
      ],
      characters:[
        {
          label: 'Mario',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups/mario',
          command: () => {
            this.visible = false
            this.showMuSearch = false
          }
        },
        {
          label: 'Bayonetta',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups/bayonetta',
          command: () => {
            this.visible = false
            this.showMuSearch = false
          }
        },
        {
          label: 'Kazuya',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups/kazuya',
          command: () => {
            this.visible = false
            this.showMuSearch = false
          }
        },
        {
          label: 'Cloud',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups/cloud',
          command: () => {
            this.visible = false
            this.showMuSearch = false
          }
        },
        {
          label: 'Steve',
          icon: 'pi pi-home',
          route: '/dk-compendium/matchups/steve',
          command: () => {
            this.visible = false
            this.showMuSearch = false
          }
        }
      ],
      filteredChars: []
    }
  },
  methods: {
    test(a){
      console.log(a.value);
    },
    goToMatchup(char){
      router.push(`/matchups/${char}`)
      this.closeSide()
    },
    closeSide(){
      this.visible = false
      this.showMuSearch = false
    },
    searchChar(event){
      setTimeout(() => {
        if(!event.query.trim().length){
          this.filteredChars = [...this.characters]
        }else{
          this.filteredChars = this.characters.filter((character) => {
            return character.label.toLowerCase().startsWith(event.query.toLowerCase())
          })
        }
      }, 250);
    }
  },
}
</script>

<style>
@import './SideBar.css'
</style>