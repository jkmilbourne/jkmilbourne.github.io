/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *10/26/20
*Version:                                         *1.0
*Date Last Modified:                              *10/29/20
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *

    Version 0.0 - 10/26/20 - Created file. Laid down broad strokes of game
    Version 0.5 - 10/27/20 - Finalized gameplay mechanics. Added Game Over state which destroys all items and diplays text with start button
    Version 0.7 - 10/28/20 - Added Win game state that acts like Game Over state. Updated all asset pngs with newly created files.
    Version 1.0 - 10/29/20 - Added background Images to Game over state, win state and playing state. Will add sound effects, timer, transition timing and animated backgrounds in v2.0.
***
*********************************************************************/

// create new game, mobile responsive can be OpenGl or Canvas
var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
  preload: preload, 
  create: create, 
  update: update
});

// variables
var bgImg;
var bgImg2
var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var scoreText;
var score = 0;
var lives = 3;
var livesText;
var lifeLostText;
var gameOverText;
var youWinText;
var playing = false;
var startButton;

function preload() {
    // scale to available screen size preserving aspect ratio
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // center canvas Hor and Vert
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
    // bacground color white
  game.stage.backgroundColor = '#f0f0f0';
    // load background Img 1
  game.load.image('bgImg', '../assets/img/warpSpeed.png')
    // load background Img 2
  game.load.image('bgImg2', '../assets/img/hallway.png')
    // load ball
  game.load.image('ball', '../assets/img/ball.png')
    // load paddle
  game.load.image('paddle', '../assets/img/paddle.png')
    // load brick
  game.load.image('brick', '../assets/img/brick.png')
    // load spritesheet
  game.load.spritesheet('ball', '../assets/img/wobble.png', 20, 20);
    // load start button
  game.load.spritesheet('button', '../assets/img/button.png', 120, 40);
};

function create() {
    // add arcade physics to game
  game.physics.startSystem(Phaser.Physics.ARCADE);
    // add background image 2
  bgImg2 = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'bgImg2');
    // change anchor od bgimg2 to center
  bgImg2.anchor.set(0.5);
    // add background image 1
  bgImg = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'bgImg');
    // change anchor od bgimg1 to center
  bgImg.anchor.set(0.5);
    // make background image not visible
  bgImg.visible = false;
    // create ball sprite and place above paddle at middle of stage
  ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, 'ball');
    // use wobble spritesheet animation
  ball.animations.add('wobble', [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
    // set ball anchor to middle of sprite
  ball.anchor.set(0.5);
    // disable collision with bottom of screen
  game.physics.arcade.checkCollision.down = false;
    // check for game over at bottom of screen
  ball.checkWorldBounds = true;
  ball.events.onOutOfBounds.add(ballLeaveScreen, this);
    // arcade physics on ball
  game.physics.enable(ball, Phaser.Physics.ARCADE);
    // add wall collision
  ball.body.collideWorldBounds = true;
    // set balls bounce rate
  ball.body.bounce.set(1);

    // create paddle and place in middle of the screen on bottom edge
  paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, 'paddle');
    // set paddle anchor to middle of sprite
  paddle.anchor.set(0.5, 1)
    // enable physics on paddle
  game.physics.enable(paddle, Phaser.Physics.ARCADE);
    // make paddle inmovable
  paddle.body.immovable = true;

    // create the brick playfield
  initBricks();

    // textStyle variable for all text on screen
  textStyle = { font: '18px Arial', fill: '#a01b1b'}
    // add score text
  scoreText = game.add.text(5, 5, 'Points: 0', textStyle)
    // add lives text
  livesText = game.add.text(game.world.width -5, 5, 'Lives: ' + lives, textStyle);
    // move lives text anchor position to move text on screen
  livesText.anchor.set(1, 0);
    // add life lost text
  lifeLostText = game.add.text(game.world.width * 0.5, game.world.height - 50, 'Life lost, click to continue', textStyle);
    // move life lost text anchor position to center
  lifeLostText.anchor.set(0.5, 0.5);
    // make not visible
  lifeLostText.visible = false;
    // add Game Over Text
  gameOverText = game.add.text(game.world.width * 0.5, game.world.height * 0.35, 'Game Over! Do you want to play again?', textStyle);
    // set anchor to center
  gameOverText.anchor.set(0.5);
    // make not visible
  gameOverText.visible = false;
    // add you win text
  youWinText = game.add.text(game.world.width * 0.5, game.world.height * 0.35, 'YOU WIN! Do you want to play again?', textStyle);
    // make anchor point center
  youWinText.anchor.set(0.5);
    // make not visible
  youWinText.visible = false;

    // add button and place in center of playfield
  startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, 'button', startGame, this, 1, 0, 2);
    // change button anchor point to center
  startButton.anchor.set(0.5);

};

function update() {
    // enable collision between paddle and ball
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if(playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
};

  // brick creation
function initBricks() {
    // brick variables inside objects
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7
    },
    offset: {
      top: 50,
      left: 60
    },
    padding: 10
  }

    // render all bricks in playfield useing nested for loops
  bricks = game.add.group();
  for(c = 0; c < brickInfo.count.col; c++) {
    for(r = 0; r < brickInfo.count.row; r++) {
      var brickX = (c * (brickInfo.width+brickInfo.padding)) + brickInfo.offset.left;
      var brickY = (r * (brickInfo.height+brickInfo.padding)) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, 'brick');
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
};

function ballHitBrick(ball, brick) {
    // ball animation
  var killTween = game.add.tween(brick.scale);
  ball.animations.play('wobble');
    // brick animation
  killTween.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);
  killTween.onComplete.addOnce(function(){
      brick.kill();
  }, this);
    // kill animation
  killTween.start();
    // adjust score + 10
  score += 10;
    // update score text with new score
  scoreText.setText('Points: ' + score);
  if(score === brickInfo.count.row * brickInfo.count.col * 10) {
      // You win
    yourAWinner();
  }
};

function ballLeaveScreen() {
    // decrament lives
  lives--;
  if(lives) {
      // update lives text
    livesText.setText('Lives: ' + lives);
      // make lifeLostText visible
    lifeLostText.visible = true;
      // reset ball and paddle to starting position
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
      // click screen to continue
    game.input.onDown.addOnce(function(){
        // lifeLostText not visible
      lifeLostText.visible = false;
        // restart ball velocity
      ball.body.velocity.set(150, -150);
    }, this);
  }
  else {
    livesText.setText('Lives: ' + lives);
      // You lose
    gameOver();
  }
};

function ballHitPaddle(ball, paddle) {
    // ball animation
  ball.animations.play('wobble');
    // velocity schange based on where you hit paddle
  ball.body.velocity.x = -1 * 5 * (paddle.x-ball.x);
};

function startGame() {
    // destroy start button
  startButton.destroy();
    // make playing background Img visible over not-playing background Img
  bgImg.visible = true;
    // start ball velocity
  ball.body.velocity.set(150, -150);
    // set playing var to true
  playing = true;
};

function restartGame() {
    // destroy start button and lives/score text
  livesText.destroy();
  scoreText.destroy();
  startButton.destroy();
    // make playing background Img visible over not-playing background Img
  bgImg.visible = true;
  if (gameOverText.visible === true) {
      // hide gameOverText
    gameOverText.visible = false;
  }
  if (youWinText.visible === true) {
      // hide youWinText
    youWinText.visible = false;
  }
    // reset lives and score to baseline
  score = 0;
  lives = 3;

  /////////////////////// Restart game
  textStyle = { font: '18px Arial', fill: '#a01b1b'}
    // add score text
  scoreText = game.add.text(5, 5, 'Points: 0', textStyle)
    // add lives text
  livesText = game.add.text(game.world.width -5, 5, 'Lives: ' + lives, textStyle);
    // move lives text anchor position to move text on screen
  livesText.anchor.set(1, 0);

    // create ball sprite and place above paddle at middle of stage
  ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, 'ball');
    // use wobble spritesheet animation
  ball.animations.add('wobble', [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
    // set ball anchor to middle of sprite
  ball.anchor.set(0.5);
    // disable collision with bottom of screen
  game.physics.arcade.checkCollision.down = false;
    // check for game over at bottom of screen
  ball.checkWorldBounds = true;
  ball.events.onOutOfBounds.add(ballLeaveScreen, this);
    // arcade physics on ball
  game.physics.enable(ball, Phaser.Physics.ARCADE);
    // add wall collision
  ball.body.collideWorldBounds = true;
    // set balls bounce rate
  ball.body.bounce.set(1);

    // create paddle and place in middle of the screen on bottom edge
  paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, 'paddle');
    // set paddle anchor to middle of sprite
  paddle.anchor.set(0.5, 1)
    // enable physics on paddle
  game.physics.enable(paddle, Phaser.Physics.ARCADE);
  // make paddle inmovable
  paddle.body.immovable = true;

    // create bricks
  initBricks();

    // set ball velocity
  ball.body.velocity.set(150, -150);
  playing = true;
};

function gameOver() {
    // destroy ball/paddle/bricks
  ball.destroy();
  bricks.destroy();
  paddle.destroy();

    // hide playing backgroundImg
  bgImg.visible = false;
    // show gameOveText
  gameOverText.visible = true;
    // create start button
  startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, 'button', restartGame, this, 1, 0, 2);
  startButton.anchor.set(0.5);
};

function yourAWinner() {
    // destroy ball/bricks/paddle
  ball.destroy();
  bricks.destroy();
  paddle.destroy();
    // hide playing background
  bgImg.visible = false;
    // show youWinText
  youWinText.visible = true;

    // create Start button
  startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, 'button', restartGame, this, 1, 0, 2);
  startButton.anchor.set(0.5);
};
