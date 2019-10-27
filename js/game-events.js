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
    // const [playerOne, playerTwo] = getPlayerDetails();
    const players = getPlayerDetails();

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
    console.log(availableWeapons);

    // Get index numbers for 10 Inactive squares
    const inactiveArea = utils.generateUniqueRandomNumbers(
      0,
      gridSquares.length,
      10
    );

    // Get index number to position players
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

    // Setup inactive squares
    setupInactiveSquares(gridSquares, inactiveArea);

    // Setup Players on board
    setupBoardItem(
      gridSquares,
      playersPosition,
      players,
      ['avatar-board-img'],
      idx => `player${idx + 1}`
    );

    // Setup Weapons on board
    setupBoardItem(
      gridSquares,
      weaponSquares,
      availableWeapons,
      ['weapon-board-img'],
      function(idx) {
        return `weapon${availableWeapons[idx].id}`;
      }
    );

    console.log(players[0]);
    console.log(players[1]);
    // append to dom
    document.querySelector('.game-board').appendChild(boardFragment);
  });
}

function setupInactiveSquares(nodeList, inactiveSquares) {
  for (let i = 0; i < nodeList.length; i += 1) {
    if (inactiveSquares.includes(i)) {
      nodeList[i].classList.add('inactive');
    }
  }
}

function setupBoardItem(
  nodeList,
  positionsArray,
  itemArray,
  classAttributes = [],
  createId
) {
  for (let i = 0; i < nodeList.length; i += 1) {
    for (let j = 0; j < positionsArray.length; j += 1) {
      if (i === positionsArray[j]) {
        const imgElement = document.createElement('img');
        imgElement.src = itemArray[j].miniImgUrl;
        imgElement.id = createId(j);
        imgElement.classList.add(...classAttributes);
        nodeList[i].appendChild(imgElement);
      }
    }
  }
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
    playerOneAvatarDetails.mainImgUrl,
    playerOneAvatarDetails.miniImgUrl
  );
  const playerTwo = new Player(
    playerTwoName,
    playerTwoAvatarDetails.avatarId,
    playerTwoAvatarDetails.mainImgUrl,
    playerTwoAvatarDetails.miniImgUrl
  );
  return [playerOne, playerTwo];
}
