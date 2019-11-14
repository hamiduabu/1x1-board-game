import './jquery-3.4.1.js';

// General DOM variables
export const game = {
  landingPage: $('.landing-container'),
  gameContainer: $('.game-container'),

  playerOptionsBtn: $('button.game-btn'),
  playerOptionsCancelBtn: $('button.close-btn'),
  playerOptionsModal: $('section.modal.player-input'),

  gallery: document.querySelector('.gallery figure'),
  galleryImg: document.querySelector('.gallery figure img'),
  galleryImgCaption: document.querySelector('.gallery figure figcaption'),

  gameBoardContainer: document.querySelector('.game-board-container'),
  combatants: document.querySelector('#combatants'),
  gameBoardBattle: document.querySelector('.battle-zone'),

  avatarImgs: document.querySelectorAll('.avatar-options img'),
  playerOneNameInput: document.querySelector('#player-one'),
  playerTwoNameInput: document.querySelector('#player-two'),

  startGameBtn: document.querySelector('#start-game'),
  playerInputForm: document.querySelector('form'),

  errorMsg: document.querySelector('.error-msg'),

  shieldAlert: document.querySelector('.shield-alert'),

  gameBoard: function() {
    return this.gameBoardContainer.querySelector('.game-board');
  },
  playerOneAvatarSelect: function() {
    return document.querySelector('.player1 .avatar-options input:checked');
  },
  playerTwoAvatarSelect: function() {
    return document.querySelector('.player2 .avatar-options input:checked');
  },

  toggleError: function() {
    this.errorMsg.classList.remove('hide');
    this.errorMsg.classList.remove('invisible');
    setTimeout(() => {
      this.errorMsg.classList.add('invisible');
    }, 1000);
    setTimeout(() => {
      this.errorMsg.classList.add('hide');
    }, 2000);
  },
  toggleShieldAlert: function() {
    this.shieldAlert.classList.remove('hide');
    this.shieldAlert.classList.remove('invisible');
    setTimeout(() => {
      this.shieldAlert.classList.add('invisible');
    }, 1000);
    setTimeout(() => {
      this.shieldAlert.classList.add('hide');
    }, 2000);
  },
  clearScreen: function() {
    this.landingPage.addClass('hide');
    this.gameContainer.removeClass('hide');
  },
  closeModal: function(modal) {
    modal.removeClass('modal-display');
  },
  playerBoxOne: document.querySelector('.player-box-1'),
  playerBoxTwo: document.querySelector('.player-box-2')
};

// Variables about players information
export const playerBox = {
  playerOneImg: game.playerBoxOne.querySelector('#avatar1'),
  playerTwoImg: game.playerBoxTwo.querySelector('#avatar2'),

  playerOneName: game.playerBoxOne.querySelector('figcaption.name'),
  playerTwoName: game.playerBoxTwo.querySelector('figcaption.name'),

  playerOneHpValue: game.playerBoxOne.querySelector('.hp-meter-value'),
  playerTwoHpValue: game.playerBoxTwo.querySelector('.hp-meter-value'),

  playerOneWeapon: game.playerBoxOne.querySelector('#player-one-weapon'),
  playerOneShield: game.playerBoxOne.querySelector('#player-one-shield'),
  playerOneWeaponImg: game.playerBoxOne.querySelector('img.weapon'),
  playerOneWeaponName: game.playerBoxOne.querySelector(
    'figcaption.weapon-name'
  ),
  playerOneWeaponDesc: game.playerBoxOne.querySelector('p.weapon-description'),
  playerOneWeaponAp: game.playerBoxOne.querySelector('span.attack-points'),
  playerOneWeaponProjectile: game.playerBoxOne.querySelector(
    '#player-one-projectile'
  ),

  playerTwoWeapon: game.playerBoxTwo.querySelector('#player-two-weapon'),
  playerTwoShield: game.playerBoxTwo.querySelector('#player-two-shield'),
  playerTwoWeaponImg: game.playerBoxTwo.querySelector('img.weapon'),
  playerTwoWeaponName: game.playerBoxTwo.querySelector(
    'figcaption.weapon-name'
  ),
  playerTwoWeaponDesc: game.playerBoxTwo.querySelector('p.weapon-description'),
  playerTwoWeaponAp: game.playerBoxTwo.querySelector('span.attack-points'),
  playerTwoWeaponProjectile: game.playerBoxTwo.querySelector(
    '#player-two-projectile'
  )
};
