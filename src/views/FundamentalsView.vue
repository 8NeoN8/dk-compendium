<template>
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

          <h3 class="fundamental-title" id="ort">Keeping track of Opponent's Resources</h3>
          
          <div class="fundamental-text">
            When juggling an opponent, <b>keep track of their remaining resources.</b> Keep track of their remaining double jump(s), air dodge, and other unique properties (e.g. Peach / Daisy float, ZSS Flip Jump, etc). They only have a limited number of resources that they can use to mix up their landing. 
            <br><br>
            When your opponent burns their double jump, they are susceptible to many more powerful followups they can no longer escape from. 
            <br><br>
            Your opponent also only has <i>one air dodge</i> before landing or being hit again. If they burn their air dodge, they have no way to escape DK's awaiting USmash, Punch, etc. 
            USmash in particular is important because almost no aerial can beat it directly from above. It can also trigger counters while being generally safe from retaliation because of DK's head + arm intangibility.
            <br><br>
            Here are a few examples:
            <ul class="oos-list">
              <li>
                <a href="https://clips.twitch.tv/PlausibleTentativeToadFunRun" target="_blank" rel="noopener noreferrer">PlausibleTentativeToadFunRun</a>
              </li>
              <li>
                <a href="http://clips.twitch.tv/RoundSpikyKimchiAsianGlow" target="_blank" rel="noopener noreferrer">RoundSpikyKimchiAsianGlow</a>
              </li>
              <li>
                <a href="http://clips.twitch.tv/SillyEndearingSpaghettiKappaPride" target="_blank" rel="noopener noreferrer">SillyEndearingSpaghettiKappaPride</a>
              </li>
              <li>
                <a href="http://clips.twitch.tv/UnusualReliableHerringSoBayed" target="_blank" rel="noopener noreferrer">UnusualReliableHerringSoBayed</a>
              </li>
              <li>
                <a href="http://clips.twitch.tv/DependableColdbloodedDurianDBstyle" target="_blank" rel="noopener noreferrer">DependableColdbloodedDurianDBstyle</a>
              </li>
              <li>
                <a href="http://twitter.com/SSBU_Salmon/status/1089129623097696256?s=19" target="_blank" rel="noopener noreferrer">SSBU_Salmon</a>
              </li>
            </ul>
            <!-- <>
            <https://>
            <https://>
            <https://>
            <https://>
            <https://></https:> -->
          </div>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="ledge">Ledge Trapping</h3>
          
          <ol class="fundamental-text ledge-list">
            <li class="ledge-list-item">
              Often the most underlooked portion of DK's advantage state, though he still has the tools to ledge trap consistently with a solid gameplan. How would DK go about this?
            </li>
            <li class="ledge-list-item">
              <u><b>Do NOT let them cross you up!</b></u> No matter how you ledge trap, this is your primary goal. It's not to hit them. It's not to cover every ledge option. It's to not let them cross you up, so that you don't get reversaled so that YOU'RE trapped in the corner. And we all know, when we're big and trapped in the corner, getting launched offstage and getting edgeguarded will be inevitable. 
            </li>
            <li class="ledge-list-item">
              <u><b>Corner pressure!</b></u> Oftentimes it is not as important to cover every ledge option, but more important to allow them back on stage while preventing them from getting center. At this point, you're essentially playing neutral, except now that the opponent doesn't have the option to dash back (they can run offstage + double jump aerial, but this is a big commitment + callout). Oftentimes simply walling with <u>Bair</u> will do the trick, especially if they're at high percents.
              <br><br>
              Note that it's even fine if you keep dashing back in anticipation of a burst option, to the point where you two end up resetting to true neutral -- just don't let this happen too often.
              <br><br>
              Now with actual ledge trapping tips:
            </li>
            <li class="ledge-list-item">
              <u><b>Stand right outside of their ledge drop aerial burst range</b></u>
              This range is DK's ideal position when ledge trapping, which makes it imperative to understand your opponent's range in every matchup. Samus Fair. Bayonetta ABK. Diddy Kong Monkey Flip. Mega Man ledge drop, wall jump Bair. Be sure to think about this before going into each game. The most important thing about this is being in position so that <u>you don't need to shield</u>, giving flexibility to do literally anything, and on reaction too.
              <br><br>
              Note that if their burst range or their overall toolkit is a bit too much to handle, like Bayonetta (ABK), Sephiroth (biggest sword in the game), or King Dedede (inhale, multiple jumps, Gordo, hammer disjoint), you will likely need to forgo ledge trapping and resort to corner pressure (#2) instead.
            </li>
            <li class="ledge-list-item">
              <u><b>Ftilt, Bair, gHS, and grab on reaction</b></u> will be your go-to moves. Ftilt can punish ledge getup (be sure to practice this, especially with the training mod pack if available, due to opponents only being vulnerable for one frame, but it can be perfected). Bair can catch ledge jumps. gHS can catch both ledge rolls and ledge getups (very good vs opponents with ambiguous animations, like Mr. Game and Watch), though the latter has a chance of being shielded -- which is fine for most matchups (remember point #1). Grabbing ledge rolls on reaction is a bit more difficult, but still reliable with much bigger reward.
            </li>
            <li class="ledge-list-item">
              <u><b>Down-angled Ftilt and aHS to punish ledge hangs</b></u> Ftilt is your easiest option. aHS is best when combined with a b-reverse or wavebounce, with DK jumping toward stage giving them a false sense of safety.
            </li>
            <li class="ledge-list-item">
              <u><b>Close ledgetraps</b></u> are still important to be used on occasion. The two biggest pros to doing a close ledgetrap as DK:
              <ol>
                <li>Preemptively cover ledge jumps DK can especially do this well with both Nair and Bair. Be sure to fast fall your aerials here to minimize risk.</li>
                <li>Easier + Bigger punish on neutral getup</li>
              </ol>
              Note that whether or not you shield in this position will change the way you ledge trap here.
              <ol>
                <li>
                  Shielding will allow you to beat ledge drop aerials -- though note that if they can cross you up with it, unless they're tall enough for DK to Bair OOS, DK can't punish. If they can cross you up, then shielding (and maybe close ledgetrapping in general) is discouraged. If they're tall enough for Bair OOS, DK can also cover ledge roll in shield.
                </li>
                <li>
                  No shield means you can still cover ledge roll on reaction (again, given they're too short for Bair). With shield, shield dropping will make punishing on reaction too slow. Note that you can still shield on reaction vs getup attacks.
                </li>
              </ol>
            </li>
            <li class="ledge-list-item">
              <u><b>Standing on a platform facing center</b></u>
              is an underutilized ledge trapping position for stages that allow it (notably (Small) Battlefield). PS2's platforms can be a bit too far away from the ledge to use this effectively, but is still fine vs bigger opponents.
              <br><br>
              With this position, you can much more reliably <u>cover ledge jumps on reaction</u> with Bair, while still punishing ledge rolls on reaction. If they do a neutral getup, you can also punish them with a platform drop Bair -- the timing is strict, but worst case this Bair will be safe if they shield. It's also much more difficult for people to cross you up, since dropping through the platform is much less committal than doing a regular full hop from the ground. It's also practically impossible for opponents to jump over you while you're on the platform.
            </li>
            <li class="ledge-list-item">
              <u><b>Move around between points 3, 6 and 7</b></u>
              (referring to the numbered items above), to ensure they're never too comfortable with any given option. Whether you're moving about during a single ledge trap (i.e. moving around while they're hanging on ledge), or you do a different position every time they grab ledge, to keep them guessing on your intentions. That said, #3 will be your primary position (I personally stick to that position maybe 80% of the time, mostly going for close ledgetraps if I see them ledge jumping often), since remember, #1 is the most important point of them all.
            </li>
            <li class="ledge-list-item">
              <u><b>Ledge Trumps</b></u>
              aren't vital, but are a fantastic way to call out people who consistently hang on ledge for a bit. With an early ledge trump (the sooner you trump them after they grab ledge, the more frame advantage you get), you can take out their entire stock with a <u>Dair</u> Otherwise you can always rely on <u>Bair</u> to set up an edgeguard.
            </li>
          </ol>
        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="tripping">Trip Confirmig D-tilt</h3>
          
          <div class="fundamental-text">
            <b>Learn to tripconfirm d-tilt.</b> This will turn DK into a much more fearsome character if you're able to confirm a trip into a headbutt (and thus a full combo), but be ready to defend against them if the attack is blocked or does not trip. This will render the move always safe on block and massively rewarding on trip, allowing you to score KO's at 45%. 
            <br><br>
            <u>D-tilt has 18f cooldown + 10f hitlag = 28f + a distinct animation from your opponent.</u> There is also a distinct <u>audio cue</u> which can help in reacting as well, given humans react faster to audio than visuals. Use these to react to the trip. 
            <br><br>
            This is a key skill. <b><u>DO NOT SKIMP OUT ON PRACTISING THIS IN TRAINING MODE.</u></b>
            <ul class="trip-list">
              <li class="trip-list-item">
                A simple training program for hitconfirming d-tilt I'd recommend is as follows:
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, jab them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, dash attack them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, dash grab them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, buffered d-air them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, Headbutt them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
              <li class="trip-list-item">
                D-tilt them. If it trips, Giant Punch them. If it does not trip, do nothing. Get this 10/10 times.
              </li>
            </ul>
            <br>
            As of patch 13.0.1: at mid percents, <u>dtilt non-trip true combos into itself!</u> Given that, try the following:
            <ul class="trip-list">
              <li>
                Set Mario to 50%
              </li>
              <li>
                Repeat the above regimen, but replace <u>do nothing</u> with <u>dtilt again</u>
              </li>
            </ul>
            <br>
            Examples: 
            <ul class="trip-list">
              <li class="trip-list-item">
                <a href="http://clips.twitch.tv/RelatedAmusedClintThisIsSparta-XHqzsXer-4MRcWd-" target="_blank" rel="noopener noreferrer">
                  HIKARU practicing trip confirming Punch in training mode
                </a>
              </li>
              <li class="trip-list-item">
                <a href="http://clips.twitch.tv/RacyPreciousPartridgeAsianGlow-aLNmdBnU0JNhEo72" target="_blank" rel="noopener noreferrer">
                  D-tilt Punch as seen in practice
                </a>
              </li>
              <li class="trip-list-item">
                <a href="http://twitter.com/hikaru_ssbu/status/1534892276836880386" target="_blank" rel="noopener noreferrer">
                  HIKARU trip confirming into Punch in bracket
                </a>
              </li>
              <li class="trip-list-item">
                <a href="http://twitter.com/Sirove_/status/1654958201110921222" target="_blank" rel="noopener noreferrer">
                  Sirove trip confirming into pDKO in bracket
                </a>
              </li>
              <li class="trip-list-item">
                <a href="http://youtube.com/clip/Ugkx3PeqfPM2mTCPQ2pAfrNdnN9O80oHIG2L" target="_blank" rel="noopener noreferrer">
                  Aposl on Tweek Talks about trip confirming
                </a>
                
              </li>
              <li class="trip-list-item">
                <a href="http://clips.twitch.tv/BelovedHonorableWitchItsBoshyTime-I4omD9gdkrAMnw4M" target="_blank" rel="noopener noreferrer">
                  <u><b>THIS is what happens when you DON'T trip confirm</b></u>
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="nopummel">No Pummels!</h3>
          
          <p class="fundamental-text">
            <u><b>Avoid pummeling opponents as DK!</b></u>
            <br><br>
            Donkey Kong's grappling prowess in this game is dependent on holding the opponent for as long as possible. pDKO requires DK to hold his opponent for a decent period of time, and CFT / CDT require an even longer hold time. Wasting time pummeling generally accomplishes very little, as you give your opponent a much easier window to break out before you can even throw them. Note that <u>the time the opponent is held in cargo is shared with the time the opponent is held in a grab</u>. This is new to Ultimate, so Smash 4 competitors will need to adjust to this new mechanic.
            <br><br>
            Even b-throw. If they fail to DI b-throw, they'll die ~20% sooner than normal. Pummeling your opponent gives them more time to DI correctly pre-emptively, which causes more harm than whatever meager benefit that the pummel would have provided.
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="gpc">Giant Punch Charge</h3>
          
          <p class="fundamental-text">
            Keep your <b>Giant Punch windups</b> in mind at all times and make sure to wind up whenever you have any free time to do so. The reward for a successful Giant Punch is massive in this game, dealing 35.8% fresh and allowing DK to easily confirm kills off d-tilt trips (d-tilt trip -> Punch / d-tilt trip -> Headbutt -> Punch), raw Headbutts, AC n-air, aHS and much more. This move is pivotal to DK's success.
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="rcc">Reverse Charge Cancel</h3>
          
          <p class="fundamental-text">
            A key aspect to playing Donkey Kong in any Smash Bros game is to learn how to **Reverse Charge Cancel.** The main thing to keep in mind is that this is <b><u>not a B reverse.</u></b> You can B reverse the Punch itself, but not the windups. To reverse the windups, you must perform a manual reverse.

            The inputs are as follows: <u>Backwards -> Neutral -> B</u>
            This is different from a B reverse, which is: <u>Neutral B -> Backwards</u>
            <br><br>
            Here is a <a href="http://www.youtube.com/watch?v=ixQ7axGsjJo" target="_blank" rel="noopener noreferrer">clip</a> from Sealer visually showcasing how to perform this tech. It includes slowed down inputs near the end, so pay attention! (Appears to use default controls)
            <br><br>

            Here's a <a href="http://clips.twitch.tv/PlayfulCoyWerewolfM4xHeh" target="_blank" rel="noopener noreferrer">clip</a> from Will discussing the technique as well (<b>NOTE: This clip is from Smash 4. This just explains the fundamentals of performing a manual reverse</b>):
            <br><br>
            The next level is to practise <b>RCC b-air from ledge.</b> This will be important to have locked down in your muscle memory, as it gives DK a new ledge option.
            <br>
            Make sure you can do this 10/10 times on both sides.
            <br>
            <a href="https://youtu.be/vDQYpKvAGjQ" target="_blank" rel="noopener noreferrer">Video</a>
            <br>
            (Shoutouts to Plague von Karma)
            <br><br>
            A <a href="http://clips.twitch.tv/ProudZealousAubergineGOWSkull" target="_blank" rel="noopener noreferrer">tip</a> from Will is that it's best to use <b>NEUTRAL double jump</b> (jumping with no horizontal drift), then DI towards stage than it is to use backwards double jump. This is because DK jumping into the stage reduces his jump height. Neutral double jump avoids this, allowing maximum jump height:
            <br><br>
            
            <a href="http://www.youtube.com/watch?v=F6CtAKRTjXQ" target="_blank" rel="noopener noreferrer">Plague von Karma demonstrates that it's indeed possible in ANY Smash game</a>
            
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="acb">Attack Cancel Bair</h3>
          
          <p class="fundamental-text">

            Attack Cancel (AtkC) Bair is arguably one of the most important advanced techs you want to learn as a DK main. Its most important use is out of dash attack, which allows you to confirm into a large amount of damage, or even a kill at the right percents (typically 10-30%).
            <br><br>
            <a href="http://www.youtube.com/watch?v=v1kjQtMaPkE" target="_blank" rel="noopener noreferrer">Here is a video from My Smash Corner explaining the concept</a>
            <br><br>
            First, you want to change some controls around. Your right stick needs to be set on tilt stick, and you either need to set a shoulder button to jump or use a claw grip (not recommended).
            <br><br>
            Now, to do a <b>dash attack</b> into AtkC bair, start with the dash attack, and keep holding the left stick towards the opponent. Then, when the dash attack animation is completely over, hit the right stick away from where you're facing, and hit jump immediately after. You have two frames to hit jump after inputting the tilt. It is imperative that the dash attack animation is completely over before starting the attack cancel inputs because those inputs cannot be buffered. An easy visual cue for telling when the dash attack animation is over is seeing DK's open mouth at end of the animation.
            <br><br>
            Now it may seem difficult at first, but it becomes second nature once you've practiced it a bit. You can also tell what you're doing wrong based on the outcome.
            <br>
            A fair comes out instead of a bair: You're either pressing the tilt stick before the dash attack animation is over (most common), or you're pressing jump the same time you hit the tilt stick.
            <br>
            A turnaround tilt comes out: You're not pressing jump soon enough after hitting the tilt stick.
            <br><br>
            <a href="http://drive.google.com/file/d/1wq4oiLMdNCUBjp3whWo3oMFgfnDR80Lg/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Here is an example of what you can do when you master this technique</a>
            <br>
            (Shoutouts to Nefarious Bear)
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="ibair">IRAR Bair</h3>
          
          <p class="fundamental-text">
            Instant Reverse Aerial Rush (IRAR) is also an important way to set up b-airs. mustydog420 provides us with a comparison between the two pieces of tech below:
            <br><br>
            <b>Attack Cancel and IRAR Benefits</b>
            <br><br>
            Attack cancelling has fewer inputs. If you ONLY want to sh rising bair, this may benefit you because the execution is typically agreed upon to be easier. It is available when standing still, walking, or running
            <br><br>
            IRAR has many more benefits than attack cancelled bair, since it can do everything it can and more at the cost of two additional inputs. DK now has access to more dynamic followups due to being able to IRAR any time during his dash and having all of his aerial options open. Followups that would normally be impossible by attack cancelling can now be accessed by IRARing.
            <br>
            <a href="http://youtu.be/j7Jx2MVXxw8?t=134" target="_blank" rel="noopener noreferrer">Take a look at this clip of Gluttony's DK</a>
            <br><br>
            Gluttony dashes for 5 frames, does a fh IRAR bair twice, and converts that one dash attack into a stock which closes out the game. If he had chosen to attack cancel instead, his sh bair would have missed completely because he did not dash forward and joker was too high, being out of reach of a sh aerial. This could have easily cost him the game.
            <br><br>
            This is only one application of using IRAR over attack cancel, but you have every aerial option open in your arsenal that could be used. Increasing the range bairplanes connect is only the beginning of its potential.
            <br><br>

            <b><u>Cost of Execution Errors</u></b>
            <br>
            Yeah, everyone messes up their inputs. The cost of messing up these inputs should be calculated as well when deciding between the two.
            <br><br>

            <b><u>Attack Cancel</u></b>
            <br>
            If you miss your two frame window on attack cancel, the cost would be an ftilt facing the other way. This would likely forfeit your advantage state from landing the dash attack and both players will reset to neutral. Pressing both inputs at the same time gives you a rising fair, which is much slower and the opponent can act before you depending when you hit your dash attack or how much percent theyve accumulated. If your opponent opts for a counter-aggressive option, they will be able to hit you during your startup frames and you have given up your advantage and entered disadvantage yourself. 
            <br><br>

            <b><u>IRAR</u></b>
            <br>
            If you dash for too long before entering reverse jumpsquat, you may miss your bair due to the opponent having enough time to airdodge. However, you should still have the frame advantage after their airdodge (mario neutral airdodges typically having a FAF of 52 vs bair's 32) and can maintain your advantage state. Those 20 frames of advantage can be a guaranteed punch or dair.
            <br>
            If you miss the reverse jumpsquat, it could also result in a fair. The issue with this is addressed in attack cancelling.
            <br><br>

            <b><u>Conclusion</u></b>
            <br>
            Attack cancelled bair is only another means of performing a sh rising reverse bair. It is a method of performing it, but it is not the method. IRAR is overall more versatile and should be pushed further into DK's meta. 
            <br><br>

            <b><u>Aside</u></b>
            <br>
            DK's forward facing aerial options are not known to be potent at approaching, namely losing access to bair and getting it replaced with fair. Knowing that IRAR can be used ANY TIME in a dash allows dk to have access bair when approaching. DK no longer has to commit the entirety of his 16 dash frames before performing a RAR, but any time from frames 1-15. This is a huge change to DKs neutral.

          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="nair">Nair Autocancel</h3>
          
          <p class="fundamental-text">
            Make sure you are aware of <u><b>N-air's autocancel frames.</b></u> This move autocancels <b>EVERY FRAME IT'S NOT ACTIVE</b> and has 5f AC lag compared to 10f landing lag. It can be great for setting up small combos into dash grab, dash attack, etc.
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="ahs">Mixing aHS</h3>
          
          <div class="fundamental-text">
            To perform a b-reversed aHS:
            <ul class="ahs-list">
              <li class="ahs-list-item">
                Angle down and <b>slightly in</b>, in the direction you're initially facing (less than a 45 degree angle in).
              </li>
              <li class="ahs-list-item">
                Press B.
              </li>
              <li class="ahs-list-item">
                Immediately rotate your control stick in the opposite direction (the direction where you want to shift your momentum) by about a quarter-circle.
              </li>
            </ul>
            E.g.: Initially facing right, then b-reversing left: ↘️ + 🅱️ > ↙️
            <br><br>
            The slightly in angle is important, as if you try to hold straight down instead, accidentally doing it just one degree in the opposite direction will create a __turnaround__ aHS instead, where DK instead keeps his forward momentum but turns around.
            <br><br>
            >You: <u>What about wavebouncing aHS?</u>
            <br>
            >Cranky: Ready for the next level, eh? Take the above three steps, but in the first step, <u>replace "the direction you're initially facing" with the opposite direction.</u>
            <br><br>
            E.g.: Initially falling right, facing left, then wavebouncing left: ↘️ + 🅱️ > ↙️
            <br><br>
            This can be used either when falling backwards -> wavebouncing forward, or falling forward -> wavebouncing backwards -- the inputs will be the same. Play around with it and see how you can improve your general movement and whiff punishes with this!
            <br><br>
            Note that some people this input easier if they set a shoulder button to special. Try it out and see if it works for you!
            <br><br>
            Related, here are some slowed-down GIFs of DKwill doing wavebouncing <b>Giant Punch.</b> For aHS, instead of flicking to the opposite direction, rotate the stick downward instead.
            <br> <br>
            <div class="punch-gifs">
              <img class="gif" src="https://cdn.discordapp.com/attachments/440724236265586688/974135026671304734/Wavebounce_Punch_Forward_to_the_Right_Slow.gif?ex=68484030&is=6846eeb0&hm=2e0bbd6d0136498d7e02ab053eed8211c2f91fb3051dd8f229670a4ee3376b2f&" width="420px">
              <img class="gif" src="https://cdn.discordapp.com/attachments/440724236265586688/974135027665342544/Wavebounce_Punch_Backwards_to_the_Right_Slow.gif?ex=68484031&is=6846eeb1&hm=a39b7bff2fcbea8af9449eaf6fdb5d8da2bd0791a1d94c0ad1fc8ef347331a96&" width="420px">
              <img class="gif" src="https://cdn.discordapp.com/attachments/440724236265586688/974135028374196294/Wavebounce_Punch_Backwards_to_the_Left_Slow.gif?ex=68484031&is=6846eeb1&hm=87a59d16a6d736ba91a16baa5cf8fffb454af59cc9b4cd5fbc97a47294719179&" width="420px">
            </div>
          </div>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="pahs">Perfect Landing aHS</h3>
          
          <p class="fundamental-text">
            <b>Practise landing on frames 19-21 / 28-30 of aHS</b> to maximize your reward on hit / safety on block, landing right after making contact with the opponent.
            <br><br>
            Landing on frame 27 of aHS can set up mixup attempts if the opponent is looking to parry hit 2.
          </p>

        </li>

        <li class="fundamental-item">

          <h3 class="fundamental-title" id="gsk">Hold back gSK at Ledge</h3>
          
          <p class="fundamental-text">
            When you catch an opponent with gSK near the ledge, make sure you <b><u>hold back on the analogue stick</u></b> before you get to the edge. This will mitigate the odds of the opponent falling out of the move in front of you.
          </p>

        </li>
        
        <li class="fundamental-item">

          <h3 class="fundamental-title" id="sideb">Headbutt Ledge Snap</h3>
          
          <p class="fundamental-text">
            Make sure that you're aware of <b>Headbutt's ledge snap properties.</b> It can allow you to snap ledge after performing an aerial faster than you could otherwise. 
            <br><br>
            For example, b-air's animation is 50f total, but can be interrupted on frame 32. This means if you do not use Headbutt, you must wait 50f, but if you do use Headbutt, you only need to wait 32.
            <br><br>
            Also worth keeping in mind is that aSK snaps ledge starting f14, but Headbutt is f1
            <br><br>
            <a href="http://clips.twitch.tv/SolidSinglePuddingGOWSkull" target="_blank" rel="noopener noreferrer">Here's a clip from Will showcasing how it works</a>
            <br>
            <a href="http://clips.twitch.tv/MoralGrossMosquitoOptimizePrime" target="_blank" rel="noopener noreferrer">You can also have it snap to ledge immediately after the hitbox comes out, as demonstrated here</a>
          </p>

        </li>
        
        <li class="fundamental-item">

          <h3 class="fundamental-title" id="cgpl">Charge Giant Punch from Ledge</h3>
          
          <p class="fundamental-text">
            Adding on to the previous post, make sure that you are able to **Charged Giant Punch back onstage from ledge.**
            <br><br>
            The inputs I would recommend are as follows: __Backwards (to get off ledge) -> Double Jump forward -> wait just a bit -> neutral -> B__
            <br><br>
            Make sure that you are comfortable doing this 10/10 times on both sides.
            <br><br>
            <a href="http://www.youtube.com/watch?v=ckdp4GNIEvk" target="_blank" rel="noopener noreferrer">Here's a clip from Plague von Karma </a>
          </p>

        </li>
        
        <li class="fundamental-item">

          <h3 class="fundamental-title" id="cdt">CDT Stage Spiking</h3>
          
          <p class="fundamental-text">

            Practice pivoting before falling offstage when you have them in Cargo so that you can Cargo stage spike them. You need to input a turnaround slightly before falling off the stage. DK will slide off the stage with his remaining momentum, but will have turned around. It takes ~3f for DK to turnaround, so make sure you have a little space. Therefore, you cannot do this if you grab them when you're standing over the very corner of the stage. 
            <br><br>
            <a href="http://clips.twitch.tv/HeadstrongRepleteGuanacoGingerPower" target="_blank" rel="noopener noreferrer">When done right, it will look like this</a>
            <br><br>
            >Cranky: <b>When going for a stage spike, only go for CDT.</b> CDT's animation keeps DK floating in place for a split second, which stop opponents who tech the stage spike from reversing the situation; DK will still be in an advantageous position where you can bair, uair, or aSK their tech. If DK goes for CFT or CBT, he continues to fall while throwing, which makes it very likely for the opponent to footstool or spike DK after a tech.
            <br>
            >You: But I wanna go for CBT to mix up the timing!
            <br>
            >Cranky: It isn't worth it! You're gonna regret going for it every single time it doesn't work out. You wouldn't dare risk going for it at <strike>EVO</strike> Genesis grand finals, would you? If you want to trick your opponent with timing, delay your CDT for just a bit instead. As long as your reactions and follow-ups are on point, CDT should never put you in a bad position even if the opponent does tech your throw.
            <br><br>
            The most important thing here: <u>consistency.</u> If you rely on CBT, you <i>can</i> snag a few early stocks even against the best players here and there. But you also risk losing your stock to people who do not even play this game competitively. Ultimately, taking that risk is all up to you.
            <br>
            <a href="http://clips.twitch.tv/FaithfulFurryGorillaBloodTrail-ty_7S1T1F5-RwkHs" target="_blank" rel="noopener noreferrer">Important clip</a>
          </p>

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
        {
          icon:'pi pi-home',
          label: "Opponent Resource Tracking",
          link: '#ort'
        },
        {
          icon:'pi pi-home',
          label: "Ledge Trapping",
          link: '#ledge'
        },
        {
          icon:'pi pi-home',
          label: "Trip confirming D-tilt",
          link: '#tripping'
        },
        {
          icon:'pi pi-home',
          label: "No Pummels",
          link: '#nopummel'
        },
        {
          icon:'pi pi-home',
          label: "Giant Punch Charge",
          link: '#gpc'
        },
        {
          icon:'pi pi-home',
          label: "Reverse Charge Cancel",
          link: '#rcc'
        },
        {
          icon:'pi pi-home',
          label: "Attack Cancel Bair",
          link: '#acb'
        },
        {
          icon:'pi pi-home',
          label: "Irar Bair",
          link: '#ibair'
        },
        {
          icon:'pi pi-home',
          label: "Nair Autocancel",
          link: '#nair'
        },
        {
          icon:'pi pi-home',
          label: "Mixing Aerial Hand Slap",
          link: '#ahs'
        },
        {
          icon:'pi pi-home',
          label: "Perfect Landing aHS",
          link: '#pahs'
        },
        {
          icon:'pi pi-home',
          label: "Hold Back on gSK at Ledge",
          link: '#gsk'
        },
        {
          icon:'pi pi-home',
          label: "Side B Ledge Snap",
          link: '#sideb'
        },
        {
          icon:'pi pi-home',
          label: "Charged Giant Punch From Ledge",
          link: '#cgpl'
        },
        {
          icon:'pi pi-home',
          label: "CDT Stage Spiking",
          link: '#cdt'
        }
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

.ledge-list{
  padding: 1rem 2rem;
}

.ledge-list-item{
  margin-bottom: 1rem;
}

.ledge-list-item > ol{
  list-style:lower-alpha;
  padding: 0.3rem 1rem;
}

.trip-list{
  padding: 0rem 2rem;
}

.ahs-list{
  padding: 0.3rem 2rem;
}
.punch-gifs{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>  