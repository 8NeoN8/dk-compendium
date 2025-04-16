<template>

  <section class="view-container matchups-container">
    <template v-if="Object.keys(charInfo).length > 0">
      <h1>{{ charInfo.name == '' ? 'No character selected' : charInfo.name}}</h1>

    </template>
  </section>

</template>

<script>

export default {
  name: "MatchupView",
  data() {
    return {
      charInfo: {
        name: ''
      }
    }
  },
  props:{
    isMobile:{
      type: Boolean,
      default: false
    },
    character:{
      type: String,
      default: ''
    }
  },
  methods: {
    getCharacterInfo(charName){
      try {
        import(`../assets/character/matchups/${charName}.json`)
        .then((json) => {
          this.charInfo = json.default
        })
      } catch (error) {
        console.log('Theres no file for that character yet');
      }
    }
  },
  created() {
    if(this.character != '') this.getCharacterInfo(this.character)
  },
  mounted() {
  },
}
</script>