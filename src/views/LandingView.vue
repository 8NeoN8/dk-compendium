<template>

  <section class="view-container landing-container" :class="isMobile ? null : 'view-container-non-mobile'">
    <article class="hero-section mb-2">

       <img class="hero-img" src="https://www.vice.com/wp-content/uploads/sites/2/2025/04/Donkey-Kong-Bonanza-is-a-Nintendo-Switch-2-Exclusive-that-Proves-You-Cant-Judge-a-Character-Model-by-its-Blurry-Debut.jpg">

       <h1 class="landing-title">
        DK COMPENDIUM
       </h1>
       
       <h3 class="landing-subtitle"> Collection of <b>Knowledge</b>, <i>Strategy</i>, and <u>Gameplan</u> <br v-if="!isMobile"> for Donkey Kong in Smash Ultimate </h3>
       
    </article>
      
    <article class="middle-section mb-2">
      <p class="middle-section-text">
        First of all, all credits to the wonderful people from the discord that have researched and labbed everything you will see here, 
        this project has just been the idea of one guy (me) that wanted to see the information in a different format and not need discord,
        but if you have any suggestion or change you would like to tell me don't be afraid to dm me on <a href="https://www.x.com"> Twitter </a> or open an issue on the <a href="https://www.github.com">Github.</a>
        <br>
        <br v-if="isMobile">
        Without further <a href="https://www.youtube.com/@Ado1024" target="_blank" class="ado-joke"><i>Ado</i></a>, here is what this website offers:
      </p>
      
    </article>

    <article class="app-sections-cards">
      <div class="card-container">
        <template v-for="(section, index) in routes" :key="index">
          <RouterLink :to="section.route" class="section-link">
            <Card class="app-section-card">
              <template #header>
                  <img class="card-header-img" alt="user header" src="../assets/placeholder-horizontal-image.webp" />
              </template>
              <template #title>
                {{ section.name }}
              </template>
              <template #content>
                  <p class="m-0">
                      {{ section.description }}
                  </p>
              </template>
            </Card>
          </RouterLink>
        </template>
      </div>

      
    </article>
  </section>


</template>

<script>


export default {
  name: "LandingView",
  data() {
    return {
      routes:[
        {
          name: 'Fundamentals',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Combos',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Matchups',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Techs',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Resources',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Summary',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: "Cranky's Corner",
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Glossary',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Change Notes',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
        {
          name: 'Credits',
          route: '/dk-compendium/fundamentals',
          description: 'WIP Text'
        },
      ]
    }
  },
  components:{
  },
  methods: {
    
  },
  props:{
    isMobile:{
      type: Boolean,
      deafult: false
    }
  }
}
</script>

<style>
@import '../style.css';
@import '../styles/landingView.css';
</style>