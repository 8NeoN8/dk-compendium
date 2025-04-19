<template>

  <section class="view-container matchups-container">
    <template v-if="Object.keys(charInfo).length > 1">
      <h1 class="character-header">{{ charInfo.name == '' ? 'No character selected' : charInfo.name}}</h1>
    </template>

    <div class="character-image">
      <img v-if="charInfo.portraitLocation" :src="charPortrait" width="100px" height="100px">
      <img v-if="false" :src="charIcon" width="25px" height="25px">
    </div>

    <article class="character-matchup-spread">
      <Accordion :value="['none']" multiple>

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
            <template v-for="(section, index) in charInfo.matchupInfo?.howWeWin" :key="index">
              <h4>{{ section.sectionName }}</h4>
              <ul class="section-points-list p-1">
                <template v-for="(sectionPoint, index) in section.sectionPoints" :key="index">
                  <template v-if="typeof(sectionPoint) == 'object'">
                    <li class="mb-05">{{ sectionPoint.subSectionDesc }}</li>
                    <ul class="p-1">
                      <template v-for="(point, index) in sectionPoint.subSectionPoints" :key="index">
                          <li class="mb-05"> {{ point }} </li>
                      </template>
                    </ul>
                  </template>

                  <template v-else>
                    <li class="mb-05">{{ sectionPoint }}</li>
                  </template>
                </template>
              </ul>
            </template>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="4">
          <AccordionHeader>How We Lose</AccordionHeader>
          <AccordionContent>
            <template v-for="(section, index) in charInfo.matchupInfo?.howWeLose" :key="index">
              <h4>{{ section.sectionName }}</h4>
              <ul class="section-points-list p-1">
                <template v-for="(sectionPoint, index) in section.sectionPoints" :key="index">
                  <template v-if="typeof(sectionPoint) == 'object'">
                    <li class="mb-05">{{ sectionPoint.subSectionDesc }}</li>
                    <ul class="p-1">
                      <template v-for="(point, index) in sectionPoint.subSectionPoints" :key="index">
                          <li class="mb-05"> {{ point }} </li>
                      </template>
                    </ul>
                  </template>

                  <template v-else>
                    <li class="mb-05">{{ sectionPoint }}</li>
                  </template>
                </template>
              </ul>
            </template>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="5">
          <AccordionHeader>Other Notes</AccordionHeader>
          <AccordionContent>

            <ul class="section-points-list p-1">
              <template v-for="(item, index) in charInfo.matchupInfo?.otherNotes" :key="index">
                <li class="mb-05">
                  {{ item }}
                </li>
              </template>
            </ul>
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
    </article>
  </section>

</template>

<script>

export default {
  name: "MatchupView",
  data() {
    return {
      charInfo: {
        name: ''
      },
      charPortrait: '',
      charIcon: '',
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
          this.getCharacterImages()
        })

  

        
      } catch (error) {
        console.log('Theres no file for that character yet');
      }
    },
    getCharacterImages(){

      import(this.charInfo.portraitLocation)
      .then((json) => {
        this.charPortrait = json.default
        
      })
      

      //! this is for later, it should work by putting the svgs in the /public directory
      /* this.charIcon = () => fetch(this.charInfo.iconLocation)
      .then((res) => {
        if(!res.ok) throw res
        return res.text()
      }) */
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

li.mb-05{
  word-wrap: break-word;
}

.character-image{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>