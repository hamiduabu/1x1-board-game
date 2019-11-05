export const domNode1 = {
  landingPage: document.querySelector('.landing-container'),
  gameContainer: document.querySelector('.game-container'),
  modalCloseBtn: document.querySelector('.close-btn a'),
  avatarImgs: document.querySelectorAll('.avatar-options img'),
  playerOneNameInput: document.querySelector('#player-one'),
  playerTwoNameInput: document.querySelector('#player-two'),
  playerOneAvatarSelect: function() {
    return document.querySelector('.player1 .avatar-options input:checked');
  },
  playerTwoAvatarSelect: function() {
    return document.querySelector('.player2 .avatar-options input:checked');
  },
  startGameBtn: document.querySelector('#start-game'),
  playerInputForm: document.querySelector('form'),
  errorMsg: document.querySelector('.error-msg'),
  toggleError: function() {
    this.errorMsg.classList.remove('invisible');
    setTimeout(() => {
      this.errorMsg.classList.add('invisible');
    }, 1000);
  },
  clearScreen: function() {
    this.landingPage.classList.add('hide');
    this.gameContainer.classList.remove('hide');
    this.modalCloseBtn.click();
  },
  playerBoxOne: document.querySelector('.player-box-1'),
  playerBoxTwo: document.querySelector('.player-box-2')
};

export const domNode2 = {
  playerBoxOneImg: domNode1.playerBoxOne.querySelector('#avatar1'),
  playerBoxTwoImg: domNode1.playerBoxTwo.querySelector('#avatar2'),

  playerBoxOneName: domNode1.playerBoxOne.querySelector('figcaption.name'),
  playerBoxTwoName: domNode1.playerBoxTwo.querySelector('figcaption.name'),

  playerOneHpValue: domNode1.playerBoxOne.querySelector('.hp-meter-value'),
  playerTwoHpValue: domNode1.playerBoxTwo.querySelector('.hp-meter-value'),

  playerOneWeaponImg: domNode1.playerBoxOne.querySelector('img.weapon'),
  playerOneWeaponName: domNode1.playerBoxOne.querySelector(
    'figcaption.weapon-name'
  ),
  playerOneWeaponDesc: domNode1.playerBoxOne.querySelector(
    'p.weapon-description'
  ),
  playerOneWeaponAp: domNode1.playerBoxOne.querySelector('span.attack-points'),
  playerTwoWeaponImg: domNode1.playerBoxTwo.querySelector('img.weapon'),
  playerTwoWeaponName: domNode1.playerBoxTwo.querySelector(
    'figcaption.weapon-name'
  ),
  playerTwoWeaponDesc: domNode1.playerBoxTwo.querySelector(
    'p.weapon-description'
  ),
  playerTwoWeaponAp: domNode1.playerBoxTwo.querySelector('span.attack-points')
};
