<template>

  <section class="view-container summary-container">

    <article class="top-section mb-1">
      <h1 class="page-title">Character Summary and Attributes</h1>
    </article>

    <article class="character-summary">
      <h3 class="sub-title mb-05">Summary</h3>

      <p class="summary-text mb-1">
        DK is a straightforward character with notable strengths and clear weaknesses that is mostly considered to be a mid tier character. 
        <br><br>
        His weight, reach, damage, speed, and KO power are all above average.
        <br><br> 
        Despite all those strengths, DK is held back by his bottom tier defensive game; Poor landing options, exploitable recovery, awful OoS options, laggy attacks, and an awkwardly large body all keep DK in check.
        <br><br>
        Playing around these weaknesses and abusing your strengths is the key to winning as DK.
      </p>

      <p class="summary-text mb-1">
        One of the most common misconceptions is that DK is slow. So, how does the first member of the DK crew actaully stack up against the majority of the cast?
        <br>
        Well...he's bigger, faster, and stronger too. Only 7 characters have both faster air speed and ground speed than DK (Mewtwo, ZSS, Greninja, Roy, Chrom, Yoshi, and CF), but they are much lighter and/or weaker than him.
        <br><br>
        DK isn’t very agile or slippery due to low air acceleration and having one of the most commital dashes, but in terms of raw speed he is definitely not lacking.
      </p>

      <p class="summary-text mb-1">
        DK's general game plan is to overpower and outlast the enemy.
        <br><br>
        Few characters can trade hits with DK and come out ahead, so taking a few extra hits is usually not that big a deal.
        <br><br>
        DK even has 3 special moves with super armor, perfect for making favorable trades. His tilts and smashes are also very hard to challenge directly, so with good spacing few attacks are able to beat them cleanly.
        <br><br>
        Top it off with the best air-to-air Bair in the game and you have a recipe for success. As a character without a projectile, DK is usually the one who has to approach. 
      </p>

      <p class="summary-text mb-1">
        However, charging his Neutral B can be used to provoke your opponents, giving them a reason to approach you instead. Once you get a good hit or a grab, you transition to his top tier advantage state where stocks just...evaporate.
      </p>

      <p class="summary-text mb-1">
        DK's punish game is where he really shines. With his cargo throws he can start a juggle chain, set up devastating edgeguards, or just outright KO them.
        <br><br>
        He can start combos with Dtilt trips, Side B, Dash Attack, or one of his many vertical launchers. He can threaten shield breaks with his specials. His Uair is an excellent juggle tool that is hard to deal with for many characters.
        <br><br>
        Despite having a poor vertical recovery, DK can still go surprisingly deep to intercept and deny recovery attempts. His deadly spikes, lingering aerials, and solid Ledge Trump game are all valuable tools that make him a force to be reckoned with offstage. - Big O     
      </p>
    </article>

    <article class="character-attributes">

      <h3 class="sub-title">Attributes</h3>

      <div class="summary-table">

        <div class="row desc-row">
          <div class="col stat">Stat</div>
          <div class="col">Value</div>
          <div class="col">Placement</div>
        </div>
        

        <div class="row">
          <div class="col stat">Weight:</div>
          <div class="col">127</div>
          <div class="col">[3rd]</div>
        </div>

        

        <div class="row">
          <div class="col stat">Walk speed:</div>
          <div class="col">1.365</div>
          <div class="col">[10th]</div>
        </div>

        <div class="row">
          <div class="col stat">Run speed:</div>
          <div class="col">1.873</div>
          <div class="col">[29th]</div>
        </div>

        <div class="row">
          <div class="col stat">Initial Dash Speed:</div>
          <div class="col">2.09</div>
          <div class="col">[21th]</div>
        </div>

        <div class="row">
          <div class="col stat">Air speed:</div>
          <div class="col">1.208</div>
          <div class="col">[13th]</div>
        </div>

        <div class="row">
          <div class="col stat">Fall speed:</div>
          <div class="col">1.63</div>
          <div class="col">[39th]</div>
        </div>

        <div class="row">
          <div class="col stat">Traction:</div>
          <div class="col">0.123</div>
          <div class="col">N/A</div>
        </div>

        <div class="row">
          <div class="col stat">Jumpsquat:</div>
          <div class="col">3f</div>
          <div class="col">Universal</div>
        </div>

        <div class="row">
          <div class="col stat">Cargo jumpsquat:</div>
          <div class="col">5f</div>
          <div class="col">N/A</div>
        </div>

        <div class="row">
          <div class="col stat">Soft landing lag:</div>
          <div class="col">2f</div>
          <div class="col">Universal</div>
        </div>

        <div class="row">
          <div class="col stat">AC/Hard landing lag:</div>
          <div class="col">5f</div>
          <div class="col">Universal</div>
        </div>

        <div class="row">
          <div class="col stat">SH air duration:</div>
          <div class="col">27-40f</div>
          <div class="col">N/A</div>
        </div>

        <div class="row">
          <div class="col stat">Jump air duration:</div>
          <div class="col">37-53f</div>
          <div class="col">N/A</div>
        </div>

        <div class="row">
          <div class="col stat">Initial dash duration:</div>
          <div class="col">14-19f</div>
          <div class="col">N/A</div>
        </div>

      </div>

    </article>
  </section>
</template>

<script>

export default {
  name: "SummaryView",
  data() {
    return {
      
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
.sub-title, .page-title{
  text-align: center;
}

.page-title{
  font-size: 2rem;
}

.sub-title{
  font-size: 1.6rem;
}
.summary-text{
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgb(39, 39, 39);
  line-height: 1.5rem;
  text-align: justify;
}

.summary-table{
  background-color: rgb(39, 39, 39);
}

.row{
  width: 100%;
  display: flex;
  border-bottom: 2px solid black;
  justify-content: space-around;
  line-height: 1.7rem;
}

.col{
  width: 5rem;
  
}

.stat{
  width: 10rem;
}

.desc-row{
  font-weight: bold;
  line-height: 2.2rem;
}

@media screen and (min-width: 1080px) {
  .character-summary{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .summary-text{
    width: 80%;
  }

  .summary-table{
    width: 50%;
    
    justify-self: center;
  }
}

</style>