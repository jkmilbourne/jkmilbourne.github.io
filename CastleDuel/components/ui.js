/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *10/12/20
*Version:                                         *
*Date Last Modified:                              *
*Modified by:                                     *
*Modification log:                                *
***
*********************************************************************/

//////////////////////////////////////////////// HUD
// top bar component
Vue.component ('top-bar', {
  template: `<div class="top-bar" :class="'player-' + currentPlayerIndex">
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <img class="arrow" src="svg/turn.svg" />
      <div class="turn">Turn {{ turn }}</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>`,
  props: ['players', 'currentPlayerIndex', 'turn'],
})
// card component
Vue.component ('card', {
  template: `<div class="card" :class="'type-' + def.type" @click="play">
  <div class="title">{{ def.title }}</div>
  <img class="separator" src="svg/card-separator.svg" />
  <div class="description"><div v-html="def.description"></div></div>
  <div class="note" v-if="def.note"><div v-html="def.note"></div></div>
  </div>`,
  props: ['def'],
  methods: {
    // playing of a card
    play () {
      this.$emit('play')
    },
  },
})
// hand component
Vue.component('hand', {
  template: `<div class="hand">
    <div class="wrapper">
      <transition-group name="card" tag="div" class="cards" @after-leave="handleLeaveTransitionEnd" >
        <card v-for="card of cards" :def="card.def" :key="card.uid" @play="handlePlay(card)" />
      </transition-group>
    </div>
  </div>`,
  props: ['cards'],
  methods: {
    // the playing of a card within hand
    handlePlay (card) {
      this.$emit('card-play', card)
    },
    // the end of card enter animation
    handleLeaveTransitionEnd () {
      this.$emit('card-leave-end')
    },
  },
})

////////////////////////////////////////////////////////////////// Overlays

Vue.component('overlay', {
  template: `<div class="overlay" @click="handleClick">
    <div class="content">
      <slot />
    </div>
  </div>`,
  methods: {
    // clicking on overlay
    handleClick () {
      this.$emit('close')
    },
  },
})
// Player Turn
Vue.component('overlay-content-player-turn', {
  template: `<div>
    <div class="big" v-if="player.skipTurn">{{ player.name }},<br>your turn is skipped!</div>
    <div class="big" v-else>{{ player.name }},<br>your turn has come!</div>
    <div>Tap to continue</div>
  </div>`,
  props: ['player'],
  })
  // What was just played by opponent
  Vue.component('overlay-content-last-play', {
    template: `<div>
      <div v-if="opponent.skippedTurn">{{ opponent.name }} turn was skipped!</div>
      <template v-else>
        <div>{{ opponent.name }} just played:</div>
        <card :def="lastPlayedCard" />
      </template>
    </div>`,
    props: ['opponent'],
    computed: {
      // the card that was just played by opponent
      lastPlayedCard () {
        return getLastPlayedCard(this.opponent)
      },
    },
  })
  // the results check to see if either player is dead
  Vue.component('player-result', {
    template: `<div class="player-result" :class="result">
      <span class="name">{{ player.name }}</span> is
      <span class="result">{{ result }}</span>
    </div>`,
    props: ['player'],
    computed: {
      // if player is dead which player is winner
      result () {
        return this.player.dead ? 'defeated' : 'victorious'
      },
    },
  })
  // Game Over screen
  Vue.component('overlay-content-game-over', {
    template: `<div>
      <div class="big">Game Over</div>
      <player-result v-for="player in players" :player="player" />
    </div>`,
    props: ['players'],
  })