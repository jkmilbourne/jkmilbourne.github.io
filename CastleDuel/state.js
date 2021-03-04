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

// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // UI
  activeOverlay: null,
  // World
  worldRatio: getWorldRatio(),
  // Game
  turn: 1,
  players: [
    {
      name: 'Anne of Cleves',
      food: 10,
      health: 10,
      // Is skipping next turn
      skipTurn: false,
      // Skipped last turn
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
    {
      name: 'William the Bald',
      food: 10,
      health: 10,
      // Is skipping next turn
      skipTurn: false,
      // Skipped last turn
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
  ],
  // random number rounded to 0 or one
  // random player starts first
  currentPlayerIndex: Math.round(Math.random()),

  get currentPlayer () {
    return state.players[state.currentPlayerIndex]
  },
  get currentOpponentId () {
    return state.currentPlayerIndex === 0 ? 1 : 0
  },
  get currentOpponent () {
    return state.players[state.currentOpponentId]
  },
  get currentHand () {
    return state.currentPlayer.hand
  },
  drawPile: pile,
  discardPile: {},
  canPlay: false,
}