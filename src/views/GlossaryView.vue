<template>

  <section class="view-container glossary-container">


    <article class="top-section mb-1">
      <h1 class="page-title">Terms & Acronyms Glossary</h1>
    </article>


    <article class="smash-lingo mb-1 simple-wrapper">
      <p>
        <b>General Smash Lingo:</b>
        Study up on general Smash terms here on this Smashboards link:
        
        <a target="_blank" href="https://smashboards.com/threads/the-smash-dictionary.374538/">Smash Dictionary</a>
      </p>
    </article>

    <article class="main-glossary mb-1">


      <template v-for="(term, index) in termsArray" :key="index">
        <div class="term-container simple-wrapper mb-1" :aria-name="term.name">

          <div class="term-name"> {{ term.name }}</div>

          <div class="term-description"> {{ term.description }}</div>

          <div class="term-subpoint" v-if="term.subpoint"> <br> {{ term.subpoint }}</div>

          <div v-if="term.link != ''" class="term-display-link">
            <a :href="term.link"> {{term.name}} </a>
          </div>

        </div>
      </template>

      <p v-if="false">

        From @mustydog420:
  
        Attack Cancel vs IRAR
  
        Attack Cancel (in context of dash attack -> bair)
  
        After your dash attack, input an ftilt in the opposite direction. If you cancel your ftilt with a jump within the first two frames, you will enter a reverse jumpsquat with a rising shorthop bair buffered. If you cancel on the first possible frame, the frame data will look like the following:
  
        Frame 1: Ftilt
        Frame 2: Jump (enter reverse jumpsquat with sh bair buffered)
        Frame 3: Reverse Jumpsquat
        Frame 4: Reverse Jumpsquat
        Frame 5: Airborne and starting bair
  
  
        IRAR
  
        After your dash attack, input a dash and immediately enter reverse jumpsquat. You can instantly enter reverse jumpsquat within any of your dash frames (for DK, anywhere between frames 1-16). If you enter reverse jumpsquat on the first possible frame, the frame data will look like the following:
  
        Frame 1: Dash ➡️
        Frame 2: Back + Jump (enter reverse jumpsquat) ↙️ + jump
        Frame 3: Reverse Jumpsquat
        Frame 4: Reverse Jumpsquat
        Frame 5: Airborne with your back turned
  
        You can input bair any time during the reverse jumpsquat to buffer a sh bair or you can just retain forward momentum with your back facing forward without committing to an option, so you have all airborne options open (sh, fh, specials, any aerials).
  
        As you can see, both versions of bair start on the same frame. Whichever you choose to do for the combo is up to preference.
      </p>

    </article>
  </section>
</template>

<script>

export default {
  name: "GlossaryView",
  data() {
    return {
      termsArray:[
        {
          name: "AC_T / GC_T",
          description: 'Donkey Kong is a unique character who has access to 7 different throws when he grabs an opponent instead of the usual 4. Additionally, his 4 cargo tosses can be initiated on the ground or in the air. These acronyms help describe the cargo toss DK decides to use. They stand for "Aerial Cargo __ Toss" and "Grounded Cargo __ Toss" respectively.',
          subpoint: "They each have their own advantages over each other, making it very important to distinguish between them. For example, GCUT gives DK access to both his jumps after tossing the opponent, but ACUT leaves DK closer to the opponent since he retains upward momentum during the toss.",
          link:"",
        },
        {
          name: "SHCUT",
          description: `This acronym stands for "Short Hop Cargo Up Toss". DK can jump with an opponent in cargo, but he can also short hop which allows for different followups. Because DK doesn't jump as high, the distance between him and his opponent is increased, which allows him to combo into late hit n-air / b-air more easily at lower %'s.`,
          link:"",
        },
        {
          name: "SHFFAC",
          description: `This acronym stands for "Short Hop FastFall AutoCancel". Donkey Kong has two aerials capable of this: n-air and u-air, which greatly reduces their cooldown and allows for excellent followup potential at the right %'s.`,
          link:"",
        },
        {
          name: "Ding Dong / DKO",
          description: `The names for DK's throw confirm - Aerial Cargo Up Toss -> U-air. Ding Dong is the more popular name, but it's generally referred to DKO here since we're meme free. DKO is just a portmanteau of DK and KO. Combined, it sounds pretty similar to Randy Orton's RKO or a boxing TKO. Figured it's a neat nickname in its own right`,
          link:"",
        },
        {
          name: "gDKO",
          description: "GCUT to jump -> DJ u-air as a kill confirm. Starts killing about when aDKO stops killing and kills for a fair bit longer",
          link:"",
        },
        {
          name: "aDKO",
          description: "ACUT -> DJ u-air as a kill confirm. Kills earlier than gDKO, but lacks its consistency at higher %'s.",
          link:"",
        },
        {
          name: "pDKO",
          description: `Cargo -> jump -> CUT -> land on platform during cooldown -> jump -> DJ -> u-air. This seems to be the optimal method of executing DKO in Smash Ultimate. We toss before landing on the platform to avoid landing lag. "Short for platform DKO". Here's a Youtube vid with 3 examples, courtesy of @ଳ Andrew `,
          link:"https://www.youtube.com/watch?v=A_gbI0p-mvM&feature=youtu.be",
        },
        {
          name: "gSK / aSK",
          description: "Grounded / Aerial Spinning Kong (DK's up special / up B)",
          link:"",
        },
        {
          name: "gHS# / aHS#",
          description: "Grounded / Aerial Hand Slap (DK's down special / down B). The number afterward refers to either hit 1 or 2, which have differing properties / followups.",
          link:"",
        },
        {
          name: "DA / DG",
          description: "Dash Attack / Dash Grab",
          link:"",
        },
        {
          name: "Liberate",
          description: `When patch 1.1.0 hit in Smash 4 and DKO became a vital part of DK's gameplan, DK's refused to use u-air outside of killing because they did not wish to stale the move for the critical KO blow. The term "liberate" basically refers to using u-air liberally to juggle with and not preserving it solely as a KO move.`,
          link:"",
        },
        {
          name: "SA",
          description: "Super Armor. DK has 3 attacks with this property. Charged Giant Punch, Headbutt and Grounded Spinning Kong (gSK)",
          link:"",
        },
        {
          name: "RCC",
          description: "Reverse Charge Cancel. Demonstrated in Fundamentals->",
          link:"../dk-compendium/fundamentals",
        },
        {
          name: "IASA / FAF",
          description: "Interruptable As Soon As / First Actionable Frame. In Smash Bros, characters are able to act before the entirety of a move's animation is complete. For example, DK's Charged Giant Punch is 63f, but he can act on the 47th frame. We describe DK's Charged Punch as having IASA / FAF of 47. Both are interchangable in most cases. The distinction between the two is when a move is interruptable only by certain actions. Then its IASA will be lower than its FAF.",
          link:"",
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
      default: false
    }
  }
}
</script>

<style>


.simple-wrapper{
  background-color: rgb(39, 39, 39);
  padding: 0.5rem;
  border-radius: 8px;
  line-height: 1.5rem;
  border: 1px solid var(--p-primary-color)
}

.page-title{
  text-align: center;
  font-size: 2rem;
  
}

.term-name{
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--p-primary-color);
  background-color: var(--p-primary-color);
  padding: .02rem 0;
  border-radius: 5px;
  padding: 0.2rem;
  text-align: center;

}

.top-section{
  width: 100%;
}

@media screen and (min-width: 1080px) {

  .smash-lingo{
    width: 80%;
  }
  .glossary-container{
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  .main-glossary{
    width: 80.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .term-container{
    width: 49%;
  }

}
</style>