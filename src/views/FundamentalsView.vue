<template>

  <div v-if="false">

    REORDER OF FUNDAMENTALS FROM MOST BASIC TO MORE ADVANCED IMO

    Walk dont run
    landing options
    OoS game
    Opponent Resource tracking
    Ledge trapping
    trip confirm dtilt
    No pummels
    Giant punch charge
    RCC
    attack cancel Bair
    Irar Bair
    Nair AutoCancel
    b-reverse/wavebounce aHS
    perfect aHS
    hold back on gsk at ledge
    SideB ledge snap
    Charged GP from ledge
    CDT stage spikes

  </div>

  <Drawer v-model:visible="visible" header="Fundamentals" position="left">
    <div class="panel-menu">
      <PanelMenu :model="fundiesList">
        <template #item="{ item }">
          <div>
            <a class="fundies-link text-primary-700 dark:text-primary-0 px-4 py-4" :href="item.link">
                <span :class="item.icon" />
                <span class="fundies-link-label ml-2">{{ item.label }}</span>
            </a>
          </div>
        </template>
      </PanelMenu>
    </div>
  </Drawer>
  <Button id="fundies_menu" icon="pi pi-search" @click="visible = !visible"/>

  <section class="view-container fundamentals-container">

    <article class="top-section mb-1">
      <h1 class="page-title">DK Fundamentals</h1>
    </article>

    <article class="fundamentals-list-wrapper" id="walkDontRun">

      <ul class="fundamentals-list">

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="walk">Walk, Don't Run</h3>
          
          <p class="fundamental-text">
            Learn to familiarize yourself with <b>DK's amazing walk.</b>
            DK's horribly commital dash is counterbalanced by his top tier walk speed. <br>
            When you initiate a dash, DK cannot shield until frame 16 which can open him up to many unnecessary hits (meanwhile characters like Sheik can shield starting frame 8).
            On the other hand, DK has the 10th fastest walkspeed on the entire roster.
            He walks faster than 4 characters can even run. He also walks faster than the fastest standard airspeed in the game.
            The best part of walking is that you can shield at any time and if need be, you can also dash at any time.
    
            <br>
            <br>
    
            >You: But what about dash walking?
    
            <br>
            <br>
    
            >Cranky. The main reason for you to walk is to <b>avoid</b> the initial committal dash. While it can be useful at times, notably to close in on a huge space into regaining walking benefits, dash walking is not a substitute for the safety of walking.
          </p>
        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="landing">Landing Options</h3>
          
          <p class="fundamental-text">
            Donkey Kong is unfortunately well-known for his atrocious disadvantage state, so there will be plenty of moments where you'll simply take over 100% from combos and juggles. That said, there's a few things you can try do to mitigate this.
            <br><br>
            Preserve your double jump. Sometimes it's better to take hits while saving your double jump, especially mid-string where they may potentially hit you out of your jump. Your double jump is a single-use tool that can get you out when used correctly, so be sure to make it count.
            <br><br>
            Mix up your DI to juke your opponents. Consider for example initially drifting left, then suddenly switching your drift to the right (and continue switching if desired). While DK doesn't have the best air acceleration (i.e. how fast it takes for him to switch directions), juking at the last second when your opponent doesn't expect it might just be enough for you to land and reset to neutral. You could even juke with a directional air dodge into the opposite direction, even better if you can land on a platform.
            <br><br>
            Empty landing. Don't be afraid to sometimes just land without swinging, especially since DK's landing aerials are rather subpar. Oftentimes opponents are looking to block an aerial then punish OOS -- you can bypass this by simply landing (potentially with a last-second fast fall) then choosing another defensive option: shield, jump, spot dodge, roll, or run away. Perhaps maybe even go for an empty landing into grab to punish their shielding.
            <br><br>
            Mix up fast fall + air dodge timing. Be mindful of when you input a fast fall -- do you want to do it high up, or when you're at a full hop height? Maybe not at all? Mixing up this timing can help with your air dodge as well.
            <br><br>
            aHS. Being able to immediately switch your momentum via b-reverses and wavebounces can help tremendously when landing. Despite that, note its major weaknesses: significant startup, significant cooldown (before landing), and predictability. Just be sure to be mindful when using this!
            <br><br>
            Headbutt. Its super armor can help you land vs grounded attacks, which can be pretty niche. That said, a good portion of the cast prefers to kill off a landing with a grounded attack rather than aerial (e.g. Min Min Usmash and Ike Dash Attack), so if you're at death percent consider this as a potential trump card.
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="oos">Out of Shield Game</h3>
          
          <div class="fundamental-text">

            In Ultimate, it's best to treat shielding as a last-minute resort. Especially with DK whose out-of-shield (OOS) options are lackluster, if you're shielding, you're effectively in disadvantage. Since shield drops take 11 frames (without jumping), that leaves time for your opponent to continue on pressuring you without you being able to do anything. (Note that this does not apply as much when using walk + shield strategies vs spammable projectiles, per <router-link to="/dk-compendium/crankyscorner">Cranky's Corner</router-link>, such as against Young Link or Villager.) 
            <br>
            Instead, make use of DK's great movement and typically superior range to avoid letting your opponent getting that close in on you in the first place. Dash backs, microspacing with walks, jumps, b-reverses / wavebounces, and even well-timed rolls are all excellent alternatives to shielding.
            <br><br>
            If you <b>are</b> forced to shield, more often than not, DK's out of shield options will not work, especially in a game where most of the roster mashes landing aerials whose safety on block is in single digits. Your go-to option as DK should be to <b>reset to neutral</b>, not to counterattack. However, if you see an opportunity for a counterattack, go for it! (Completed matchup channels will typically list viable OOS options vs key moves as well.)
            <br><br>
            Alternatively, if you have a good understanding of your opponents' habits, you may want to try punish what they like to do <b>after</b> you block their attack. For example, if you block a Fox's landing Nair, you may think they'll follow up with a rapid jab. If you know this: hold shield, block everything, then punish the jab instead. Jabs and spot dodges are some of the most common follow-ups after a blocked move, so keep an eye out for those!
            <br>
            Here's a rundown of what situations each OOS option covers, ordered by startup:
            <br>
            <ul class="oos-list">
              <li><b>Aerial Spinning Kong (aSK) (Frame 7 OOS):</b> DK's fastest option and best move vs cross-ups. See: <router-link to="/dk-compendium/techs">Tech Guides</router-link></li>
              <li><b>Up Air (Frame 9 OOS):</b> Typically too high to punish anything except rising aerials, and even then Nair is typically more reliable (against rising aerials, the speed advantage Uair provides isn't really significant).</li>
              <li><b>Back Air (Frame 10 OOS):</b> Whiffs against most landing aerials (sometimes even including <b>Bowser's</b> Nair). Excellent if they don't pancake (meaning their animation flattens them, making moves whiff).</li>
              <li><b>Grab (Frame 12 OOS):</b> Typically too slow against most landing aerials. Be sure to study your opponents' most common moves and see if you have time to guarantee a shield grab. Also note that lots of spaced moves may make shield grabs fail as well, despite the frame data.</li>
              <li><b>Neutral Air (Frame 13 OOS):</b> Excellent against rising aerials and big bodies' grounded attacks. </li>
              <li><b>Up Smash (Frame 14 OOS):</b> Similar uses to Nair, but with less range in exchange for much more power.</li>
              <li><b>Jab (Frame 16 OOS):</b> Can catch opponents' jumps and spot dodges (if you delay jab 2) without needing to commit to a jump yourself.</li>
              <li><b>Down Air (Frame 17 OOS):</b> Typically only usable against very punishable grounded attacks (buffered short hop Dair), *or* if you try to read a spot dodge after you block an attack (where a full hop landing Dair is preferred)</li>
              <li><b>Grounded Spinning Kong (gSK) (Frame 19 OOS, Frame 5-17 Armor):</b> Excellent for opponents who mash grounded attacks on your shield, e.g. Ken, Ryu, and ROB tilts.</li>
              <li><b>Aerial Hand Slap (aHS) (Frame 22 OOS):</b> Despite the frame data, the positioning this move provides is rather unique given OOS options. A forward short hop into b-reversed aHS (or backwards short hop into wavelanding aHS) eats up spot dodges and makes lots of grounded moves whiff during your startup.</li>
              <li><b>Headbutt (Frame 23 OOS, Frame 8-18 Armor OOS):</b> If you have the time for it, such as against a Smash attack, or if you read a mash or weak shield coming up, then short hop Headbutt can be quite effective. Note that gSK is typically the more reliable option regarding super armor, as the armor comes out sooner and lasts longer. Example from ChunkyKong: <a target="_blank" href="https://twitter.com/Kong9Chunky/status/1743002665527943432">twitter clip</a></li>
              <ul class="oos-list">
                <li>Headbutt however can be much more lethal. In the above clip, Headbutt could lead to a kill as soon as 70%, whereas gSK would send them across the stage while easily making it back.</li>
              </ul>
              <li><b>Grounded Hand Slap (gHS) (Frame 23 OOS):</b> One of DK's slowest options, but the range makes up for this, plus it covers many options as well (shield, spot dodge, roll)</li>
            </ul>
          </div>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title"></h3>
          
          <p class="fundamental-text"></p>

        </li>
        
      </ul>

    </article>

  </section>
</template>

<script>

export default {
  name: "FundamentalsView",
  data() {
    return {
      visible: false,
      fundiesList:[
        {
          icon:'pi pi-home',
          label: "Walk, Don't Run",
          link: '#walk'
        },
        {
          icon:'pi pi-home',
          label: "Landing Options",
          link: '#landing'
        },
        {
          icon:'pi pi-home',
          label: "Out of Shield Game",
          link: '#oos'
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
.fundamentals-list-wrapper{
  border-radius: 8px;
  background-color: rgb(39,39,39);
  padding: 0.5rem;
  line-height: 1.5rem;
}

.page-title{
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid var(--p-primary-color);
}

.fundamentals-list{
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fundamental-title{
  text-align: center;
  background-color: var(--p-primary-color);
  padding: 1rem;
  font-size: 2rem !important;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.fundamental-text{
  padding: 1rem;
  border: 1px solid var(--p-primary-color);
  border-radius: 8px;
}

.oos-list{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-list{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
  height: 10rem;
  z-index: 10;
  background-color: var(--p-primary-color);

}

#fundies_menu{
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 100;
  max-height: 5rem !important;
  background-color: var(--p-button-secondary-background);
  color: var(--p-button-primary-background);
  opacity: 0.6;
}

#fundies_menu:hover{
  opacity: 1;
}

.fundies-link{
  display: flex;
  justify-content: left;
  padding: 0 1rem;
  gap: 1rem !important;
  color: var(--p-primary-color);
}

.fundies-link-label{
 display: inline-block;
}

</style>