<template>

  <section class="view-container matchups-container">
    <template v-if="Object.keys(charInfo).length > 1">
      <h1 class="character-header">{{ charInfo.name == '' ? 'No character selected' : charInfo.name}}</h1>
    </template>

    <div class="character-image">
      <img :src="`/dk-compendium/src/assets/character/portraits/${character}.png`" width="100px" height="100px">
    </div>

    <article class="character-matchup-spread">

      <Accordion :value="['none']" multiple v-if="charInfo.version != 'new'">

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

      <Accordion :value="['none']" multiple v-else>
        <template v-for="(section, index) in charInfo.matchupInfo" :key="index">
          <AccordionPanel :value="index">
            <AccordionHeader>{{ section.sectionName }}</AccordionHeader>
            <AccordionContent>
              <ul class="p-1">
                <template v-for="(point, index) in section.sectionPoints" :key="index">         
                    <li v-if="point.type == 'text'" class="mb-05">
                      {{ point.content }}
                    </li>

                    <li v-if="point.type == 'list'" class="unlisted">
                      {{ point.title }}
                      <br>
                      <ul class="p-05">
                        <template v-for="(item, index) in point.items" :key="index">
                          
                            <li v-if="item.type == 'text'" class="mb-05">
                              {{ item.content }}
                            </li>
                          
                        </template>
                      </ul>
                    </li>

                    <li v-if="point.type == 'description'" class="mb-05 unlisted" :class="point.type == 'description' ? 'unlisted' : null">
                      {{ point.content }}
                    </li>

                    <li v-if="point.type == 'subsection'" class="unlisted">
                      <h4 class="subsection-header">
                        {{ point.header }}
                      </h4>

                      <ul class="p-1">
                        <template v-for="(item, index) in point.subpoints" :key="index">
                          
                          <li v-if="item.type == 'text'" class="mb-05">
                            {{ item.content }}
                          </li>

                          <li v-if="item.type == 'list'">
                            {{ item.title }}
                            <br>
                            <ul class="p-05">
                              <template v-for="(subitem, index) in item.items" :key="index">
                              
                                  <li v-if="subitem.type == 'text'" class="mb-05">
                                    {{ subitem.content }}
                                  </li>

                                  <li v-if="subitem.type == 'linkTwitch'">
                                    <a :href="subitem.content">{{ subitem.content }}</a>
                                  </li>
                                
                              </template>
                            </ul>
                          </li>
                        </template>
                      </ul>
                    </li>
                </template>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </template>
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
    },
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

.p-accordionheader{
  padding: 0.5rem !important;
}

.p-accordioncontent-content{
  padding: 0.5rem !important;
}

li.mb-05{
  word-wrap: break-word;
}

.unlisted{
  list-style: none;
  margin-left: -1rem;
}

.character-image{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>