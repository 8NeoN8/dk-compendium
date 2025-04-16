<template>

  <section class="view-container landing-container">
    <h1>DK discord Kong Kollege PWA</h1>
    <h3>All credits to the people from the discord that have researched and labbed everything you will see here</h3>
    <p class="page-intro">

    </p>

    <article class="app-sections-display">
      
      <div class="app-section">Fundamentals</div>
      <div class="app-section">Combos</div>
      <div class="app-section">Matchups</div>
      <div class="app-section">Techs</div>
      <div class="appp-section">Resources</div>
      <div class="app-section">Cranky's Corner</div>
      <div class="app-section">Summary</div>
      <div class="app-section">Glossary</div>
      <div class="app-section">Change Notes</div>

      
    </article>
  </section>


</template>

<script>

export default {
  name: "LandingView",
  data() {
    return {
      
    }
  },
  components:{
  },
  methods: {
    
  },
}
</script>

//*make grid 4/4 split and then the notes in the middle
<style>

.app-sections-display{  
  display: flex; 
  flex-wrap: wrap;
  gap: 1rem;
}
</style>