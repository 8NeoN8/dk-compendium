<template>

  <section class="view-container matchups-container">
    <template v-if="Object.keys(charInfo).length > 1">
      <h1 class="character-header">{{ charInfo.name == '' ? 'No character selected' : charInfo.name}}</h1>
    </template>

    <div class="">
      <Accordion :value="['0']" multiple>

        <AccordionPanel value="0">
          <AccordionHeader>Key Notes</AccordionHeader>
          <AccordionContent>
            <ul class="notes-list p-1">
              <template v-for="(note, index) in charInfo.matchupInfo?.keyNotes" :key="index">
                <li class="note mb-05">
                  {{ note }}
                </li>
              </template>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader>General Consensus</AccordionHeader>
          <AccordionContent>
            <template v-for="(consensusPart, index) in charInfo.matchupInfo?.generalConsensus" :key="index">

              <template v-if="consensusPart.type == 'description'">
                <div class="consensus-description mb-1">
                  {{ consensusPart.content }}
                </div>
              </template>
      
              <template v-if="consensusPart.type == 'dkHas'">
                <h3 class="character-has">DK has:</h3>
                <ul class="has-list p-1">
                  <template v-for="(item, index) in consensusPart.content" :key="index">
                    <li class="has-item mb-05">{{ item }}</li>
                  </template>
                </ul>
              </template>
      
              <template v-if="consensusPart.type == 'enemyHas'">
                <h3 class="character-has">{{ charInfo.name }} has:</h3>
                <ul class="has-list p-1">
                  <template v-for="(item, index) in consensusPart.content" :key="index">
                    <li class="has-item mb-05">{{ item }}</li>
                  </template>
                </ul>
              </template>
              
            </template>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="2">
          <AccordionHeader>Stage Selection</AccordionHeader>
          <AccordionContent>
            <ul class="stages-list p-1">
              <template v-for="(stageType, index) in charInfo.matchupInfo?.stageSelection" :key="index">
                <li class="stage-item mb-05">
                  <h4>{{ stageType.stageType }}</h4>
                  <ul class="p-1">
                    <template v-for="(item, index) in stageType.stageTypeExplanation" :key="index">
                      <li class="mb-05">
                        {{ item }}
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="3">
          <AccordionHeader>How We Win</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="4">
          <AccordionHeader>How We Lose</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="5">
          <AccordionHeader>Other Notes</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="6">
          <AccordionHeader>Sets To Study</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="7">
          <AccordionHeader>Extra Resources</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="8">
          <AccordionHeader>Moves</AccordionHeader>
          <AccordionContent>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- <h2 class="notes-header">Key Notes</h2>
    <article class="key-notes article-container p-05">
      <ul class="notes-list p-1">
        <template v-for="(note, index) in charInfo.matchupInfo?.keyNotes" :key="index">
          <li class="note mb-05">
            {{ note }}
          </li>
        </template>
      </ul>
    </article>

    <h2 class="consensus-header">General Consensus</h2>
    <article class="general-consensus article-container p-05 mb-1">


      <template v-for="(consensusPart, index) in charInfo.matchupInfo.generalConsensus" :key="index">

        <template v-if="consensusPart.type == 'description'">
          <div class="consensus-description mb-1">
            {{ consensusPart.content }}
          </div>
        </template>

        <template v-if="consensusPart.type == 'dkHas'">
          <h3 class="character-has">DK has:</h3>
          <ul class="has-list p-1">
            <template v-for="(item, index) in consensusPart.content" :key="index">
              <li class="has-item mb-05">{{ item }}</li>
            </template>
          </ul>
        </template>

        <template v-if="consensusPart.type == 'enemyHas'">
          <h3 class="character-has">{{ charInfo.name }} has:</h3>
          <ul class="has-list p-1">
            <template v-for="(item, index) in consensusPart.content" :key="index">
              <li class="has-item mb-05">{{ item }}</li>
            </template>
          </ul>
        </template>
        
      </template>
    </article>
 -->
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
    if(this.character != '') this.getCharacterInfo(this.character)
  },
}
</script>

<style>

.matchups-container{
  font-size: 0.8rem;
}
.character-header{
  font-size: 2rem;
  margin-bottom: 1rem;
}

.notes-list{
}

.note{
}

.article-container{
}

.p-accordionheader{
  padding: 0.5rem !important;
}

.p-accordioncontent-content{
  padding: 0.5rem !important;
}
</style>