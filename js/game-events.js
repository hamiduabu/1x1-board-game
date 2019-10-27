import { domNodes } from './dom-variables.js';
import * as utils from './game-utilities.js';
import { avatars } from './game-items.js';
import { weapons } from './game-items.js';
import { Player } from './game-prototypes.js';
import { Board } from './game-prototypes.js';

document.addEventListener('keydown', event => {
  // key pressed
  // if(event.keyCode == 37){console.log(event)}
});

// Modal events
export function startGame() {
  domNodes.startGameBtn.addEventListener('click', () => {
    console.log('Starting ...');
    //Get player details using destructuring
    const { playerOne, playerTwo } = getPlayerDetails();

    // Reset Modal Form
    domNodes.playerInputForm.reset();

    // Hide landing page and modal
    clearScreen();

    // create game board
    const gameBoard = new Board();

    // Create Grid
    const boardFragment = gameBoard.createGrid();
    const gridSquares = boardFragment.querySelectorAll('.inner-box');

    // Get four(4) random weapons
    const availableWeapons = utils.generateUniqueRandomItems(weapons, 4);

    // Get index numbers for 10 Inactive squares
    const inactiveArea = utils.generateUniqueRandomNumbers(
      0,
      gridSquares.length,
      10
    );

    // Position players

    const playerOnePosition = utils.generateUniqueRandomNumbers(
      0,
      45,
      1,
      inactiveArea
    );
    const playerTwoPosition = utils.generateUniqueRandomNumbers(56, 100, 1, [
      ...inactiveArea,
      ...playerOnePosition
    ]);
    const playersPosition = [...playerOnePosition, ...playerTwoPosition];
    console.log(playersPosition);
    console.log(inactiveArea);

    // Weapon Squares

    const weaponSquares = utils.generateUniqueRandomNumbers(0, 100, 4, [
      ...inactiveArea,
      ...playersPosition
    ]);
    console.log(weaponSquares);

    for (let i = 0; i < gridSquares.length; i += 1) {
      if (inactiveArea.includes(i)) {
        gridSquares[i].classList.add('inactive');
      }
    }
    for (let i = 0; i < gridSquares.length; i += 1) {
      if (i === playerOnePosition[0]) {
        const imgElement = document.createElement('img');
        imgElement.src = playerOne.miniAvatar;
        imgElement.classList.add('player1', 'avatar-board-img');
        gridSquares[i].appendChild(imgElement);
      }
      if (i === playerTwoPosition[0]) {
        const imgElement = document.createElement('img');
        imgElement.src = playerTwo.miniAvatar;
        imgElement.classList.add('player2', 'avatar-board-img');
        gridSquares[i].appendChild(imgElement);
      }
    }
    for (let i = 0; i < gridSquares.length; i += 1) {
      if (i === weaponSquares[0]) {
        const imgElement = document.createElement('img');
        imgElement.style.width = '25px';
        imgElement.src = availableWeapons[0];
        gridSquares[i].appendChild(imgElement);
      }
      if (i === weaponSquares[1]) {
        const imgElement = document.createElement('img');
        imgElement.style.width = '25px';
        imgElement.src = availableWeapons[1];
        gridSquares[i].appendChild(imgElement);
      }
      if (i === weaponSquares[2]) {
        const imgElement = document.createElement('img');
        imgElement.style.width = '25px';
        imgElement.src = availableWeapons[2];
        gridSquares[i].appendChild(imgElement);
      }
      if (i === weaponSquares[3]) {
        const imgElement = document.createElement('img');
        imgElement.style.width = '25px';
        imgElement.src = availableWeapons[3];
        gridSquares[i].appendChild(imgElement);
      }
      // break;
    }
    console.log(playerOne);
    console.log(playerTwo);
    // append to dom
    document.querySelector('.game-board').appendChild(boardFragment);
  });
}
function clearScreen() {
  document.querySelector('.landing-container').classList.add('hide');
  document.querySelector('.game-container').classList.remove('hide');
  document.querySelector('.close-btn a').click();
}

function getPlayerDetails() {
  const playerOneName = utils.getPlayerName(domNodes.playerOneNameInput);
  const playerOneAvatarDetails = utils.getPlayerAvatarDetails(
    domNodes.playerOneAvatarSelect(),
    avatars
  );
  const playerTwoName = utils.getPlayerName(domNodes.playerTwoNameInput);
  const playerTwoAvatarDetails = utils.getPlayerAvatarDetails(
    domNodes.playerTwoAvatarSelect(),
    avatars
  );
  const playerOne = new Player(
    playerOneName,
    playerOneAvatarDetails.avatarId,
    playerOneAvatarDetails.mainAvatar,
    playerOneAvatarDetails.miniAvatar
  );
  const playerTwo = new Player(
    playerTwoName,
    playerTwoAvatarDetails.avatarId,
    playerTwoAvatarDetails.mainAvatar,
    playerTwoAvatarDetails.miniAvatar
  );
  return { playerOne, playerTwo };
}
