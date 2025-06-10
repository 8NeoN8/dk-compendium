<template>

  <section class="view-container combos-container">

    <article class="top-section mb-1">
      <h1 class="page-title mb-05">Bread & Butter Combos</h1>
    </article>

    <article class="combos">
      <div class="simple-wrapper combos-intro">
        This channel is here for those who wish to learn more about DK's combo potential! I'll be posting some simple bread and butter combos for DK with very general ranges, so please experiment further to get a better grasp of them!
        <br>
        <a href="http://youtu.be/n4wO7hOEeZ8" target="_blank" rel="noopener noreferrer">Please check out this guide courtesy of Barbados</a>
      </div>
      <ul class="combos-list">
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            D-tilt Trip
          </h3>

          D-tilt has a +40% bonus trip chance and can trip characters until a certain % depending on their weight and DK's rage. For example, Mario can be tripped between 0 - 71.3% if DK has no rage. A d-tilt trip lets DK combo into any attack that hits on frame 20 or faster, including:
          <ul>
            <li>Dash Attack</li>
            <li>Dash Grab</li>
            <li>Giant Punch (this can be used as a KO confirm near ledges)</li>
            <li>Grounded Spinning Kong (this can be used as a tighter KO confirm near ledge)</li>
            <li>Turn-around U-tilt</li>
            <li>Buffered Turn-around B-air (VS tall characters only)</li>
            <li>Headbutt</li>
          </ul>
          and some other less useful options like f-tilt, D-smash, jabs, gHS, another d-tilt (this one cannot trip)
          <br><br>
          <b>Note that you cannot combo off a d-tilt that does not trip an opponent! Please see <router-link to="fundamentals">Fundamentals</router-link> for more info!</b>
        </li>

        <li class="combo-item simple-wrapper">
          
          <h3 class="combo-title">
            Cargo Up Toss
          </h3>
          
          CUT -> U-air is DK's main bread and butter combo. From 0 all the way until their max pDKO range, DK can combo into u-air for as long as he can combo off CUT. This leaves the opponent above you, primed for further pressure (be careful at very low %'s, as you're still slightly negative on hit, but you can FF and AC the u-air), but comes with the obvious downside of staling u-air for your kill confirm
          <br><br>
          GCUT -> B-air -> B-air is one of DK's optimal followups. This starts working after a grab at 15-20ish%, you do a GCUT, do a slight dash forward, then you get a double b-air followup for excellent damage. This is one of the more difficult DK BnB combos, but it is well worth it to practise the execution.
          <br>
          <a href="http://www.youtube.com/watch?v=O91jsPlxmKo" target="_blank" rel="noopener noreferrer">A video example courtesy of <b><u>Proctavia</u></b> can be seen here</a>
          <br>
          <a href="http://clips.twitch.tv/OilyAbrasiveGerbilDatBoi" target="_blank" rel="noopener noreferrer">Another clip of the combo showcases the microdash</a>
          <br><br>
          ACUT -> F-air has a tight window, but does nice damage on hit and knocks your opponent offstage in most cases. Generally not a great position for DK to continue pressuring post-hit because of the sheer amount of cooldown. Useful if this will put your opponent into pDKO %.
          <br><br>
          CUT -> N-air is a fairly easy combo that lets DK keep his u-air fresh. Keeps the opponent fairly close to you, but keep in mind that n-air is negative on hit until ~ mid-30ish %. Can be combined with its autocancel property on platforms for interesting pressure situations.
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            Aerial Handslap
          </h3>
          
          aHS1 has set knockback, pops them upwards and has been 15-19f hitstun depending on their weight. On a perfect landing, DK is between +5 to +9 depending on their weight. You can combo u-tilt, grab, u-air, or press your frame advantage and go for something bigger.
          <br><br>
          aHS2 by itself is a weak meteor and can net DK great combo potential. It has a +20% trip chance, which can give DK many more frames of advantage compared to a d-tilt trip. You're up to +28 with a perfect landing aHS2 trip. If aHS2 does not trip, you can still combo into many things like grab, dash attack, b-airs, u-air, d-air, USmash, Punch, etc. depending on their %'s (Please help me fill in some approximate ranges for these VS Mario)
          <br><br>
          You can kill confirm with the following aHS2 combos VS Mario:
          <ul>
            <li>aHS2 > Punch      41-95% (starts at 63% from center stage)</li>
            <li>aHS2 > Usmash  80-125%</li>
            <li>aHS2 > Uair         120-200+%</li>
          </ul>
          aHS12 is an interesting combo.
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            Headbutt 
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            Dash Attack
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            D-air
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            U-air
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            B-air
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            N-air
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            Tech Chase Setups
          </h3>
        </li>
        <li class="combo-item simple-wrapper">
          <h3 class="combo-title">
            Edgeguard Setups
          </h3>
        </li>
      </ul>
    </article>

  </section>

</template>

<script>

export default {
  name: "CombosView",
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

<style scoped>

.combos-intro{
  font-size: 1.3rem;
}

.combo-item > ul{
  padding: 0.3rem 2rem;
}
.combo-title{
  text-align: center;
  background-color: var(--p-primary-color);
  padding: 1rem;
  font-size: 2rem !important;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.combos-list > li{
  margin-bottom: 1.5rem;
}


</style>