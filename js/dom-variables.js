export const domNodes = {
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
  playerInputForm: document.querySelector('form')
};
