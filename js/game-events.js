import { domNodes } from './dom-variables.js';
import * as utils from './game-utilities.js';
import { avatars } from './game-items.js';
import { weapons } from './game-items.js';
import { Player } from './game-prototypes.js';
import { Board } from './game-prototypes.js';

// Modal events
export function startGame() {
  domNodes.startGameBtn.addEventListener('click', () => {
    console.log('Starting ...');
    //Get player details
    // Consider using destructuring below
    // const [playerOne, playerTwo] = getPlayerDetails();
    const players = getPlayerDetails();

    // Reset Modal Form
    domNodes.playerInputForm.reset();

    // Hide landing page and modal
    domNodes.clearScreen();

    // create game board
    const board = new Board();

    // Create Grid
    const boardFragment = board.createGrid();
    const gridCells = boardFragment.querySelectorAll('.inner-box');

    // Get four(4) random weapons
    const availableWeapons = utils.generateUniqueRandomItems(weapons, 4);
    /* console.log(availableWeapons); */

    // Get index numbers for 10 Inactive squares
    const inactiveArea = utils.generateUniqueRandomNumbers(
      0,
      gridCells.length,
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

    /* console.log(playersPosition);
    console.log(inactiveArea); */

    // Weapon Squares

    const weaponSquares = utils.generateUniqueRandomNumbers(0, 100, 4, [
      ...inactiveArea,
      ...playersPosition
    ]);
    /*  console.log(weaponSquares); */

    // Setup inactive squares
    setupInactiveSquares(gridCells, inactiveArea);

    // Setup Players on board
    setupBoardItem(
      gridCells,
      playersPosition,
      players,
      ['avatar-board-img'],
      idx => `player${idx + 1}`
    );

    // Setup Weapons on board
    setupBoardItem(
      gridCells,
      weaponSquares,
      availableWeapons,
      ['weapon-board-img'],
      function(idx) {
        return `weapon${availableWeapons[idx].id}`;
      }
    );
    const player1 = boardFragment.querySelector('#player1');
    const player2 = boardFragment.querySelector('#player2');
    const playerTurn = player1;
    const nextPlayer = player1;
    playerTurn.classList.add('active-player');

    const availableSquares = [
      ...saveAvailableSquaresRight(playerTurn),
      ...saveAvailableSquaresLeft(playerTurn),
      ...saveAvailableSquaresDown(playerTurn),
      ...saveAvailableSquaresTop(playerTurn)
    ];
    // console.log('ONE' + ' : ' + availableSquares);
    highlightAvailableSquares(availableSquares);
    // Add movements
    addMovements(playerTurn, nextPlayer, player1, player2, availableSquares);
    // console.log('TWO' + ' : ' + availableSquares);

    /* highlightNewAvailableSquares(
      player1,
      player2,
      playerTurn,
      availableSquares
    ); */
    // console.log('THREE' + ' : ' + availableSquares);

    /* console.log(players[0]);
    console.log(players[1]); */

    // append to dom
    document.querySelector('.game-board-container').appendChild(boardFragment);
  });
}

// Setup inactive squares
function setupInactiveSquares(nodeList, inactiveSquares) {
  for (let i = 0; i < nodeList.length; i += 1) {
    if (inactiveSquares.includes(i)) {
      nodeList[i].classList.add('inactive');
    }
  }
}

// Setup board items (players and weapons)
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

// Movements
function addMovements(
  playerTurn,
  nextPlayer,
  player1,
  player2,
  availableSquares
) {
  let numberOfTurns = 0;

  document.addEventListener('keydown', function(event) {
    event.preventDefault();
    // const player1 = document.querySelector('#player1');
    // const player2 = document.querySelector('#player2');
    // let playerTurn = playerAvatar1;
    // console.log('TWO - BEFORE' + ' : ' + availableSquares);
    for (const square of availableSquares) {
      square.classList.remove('available-move');
    }
    availableSquares = [];

    // console.log('TWO -AFTER' + ' : ' + availableSquares);
    return (function() {
      if (numberOfTurns >= 2 && numberOfTurns < 5) {
        nextPlayer = player2;
        // playerTurn.classList.remove('active-player');
        // nextPlayer.classList.add('active-player');
      }
      if (numberOfTurns >= 3) {
        playerTurn = player2;
      }
      if (numberOfTurns >= 5 || numberOfTurns < 2) {
        nextPlayer = player1;
        // nextPlayer.classList.remove('active-player');
        // playerTurn.classList.add('active-player');
      }
      if (numberOfTurns === 6) {
        playerTurn = player1;
        numberOfTurns = 0;
      }

      if (event.code === 'ArrowUp') {
        const topSquare =
          playerTurn.parentElement.parentElement.previousElementSibling;
        if (!topSquare) {
          return domNodes.toggleError();
        }
        if (
          topSquare.children[
            getElementPresentPositionIndex(playerTurn)
          ].classList.contains('inactive')
        ) {
          return domNodes.toggleError();
        }
        topSquare.children[
          getElementPresentPositionIndex(playerTurn)
        ].appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowDown') {
        const bottomSquare =
          playerTurn.parentElement.parentElement.nextElementSibling;
        if (!bottomSquare) {
          return domNodes.toggleError();
        }
        if (
          bottomSquare.children[
            getElementPresentPositionIndex(playerTurn)
          ].classList.contains('inactive')
        ) {
          return domNodes.toggleError();
        }
        bottomSquare.children[
          getElementPresentPositionIndex(playerTurn)
        ].appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowLeft') {
        const leftSquare = playerTurn.parentElement.previousElementSibling;
        if (!leftSquare || leftSquare.classList.contains('inactive')) {
          return domNodes.toggleError();
        }
        leftSquare.appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowRight') {
        const rightSquare = playerTurn.parentElement.nextElementSibling;
        if (!rightSquare || rightSquare.classList.contains('inactive')) {
          return domNodes.toggleError();
        }
        rightSquare.appendChild(playerTurn);
        numberOfTurns += 1;
      }
    })();
  });
  // setTimeout(() => {
  document.addEventListener('keyup', function(event) {
    // console.log(playerTurn);
    // console.log(numberOfTurns);
    // console.log(nextPlayer);
    playerTurn.classList.remove('active-player');
    nextPlayer.classList.add('active-player');
    availableSquares = [
      ...saveAvailableSquaresTop(nextPlayer),
      ...saveAvailableSquaresDown(nextPlayer),
      ...saveAvailableSquaresRight(nextPlayer),
      ...saveAvailableSquaresLeft(nextPlayer)
    ];
    highlightAvailableSquares(availableSquares);
  });
  // }, 1);
}

function getElementPresentPositionIndex(element) {
  const row = element.parentElement.parentElement.children;
  let positionIndex;
  for (const item of row) {
    if (Array.from(item.children).includes(element)) {
      positionIndex = Array.from(row).indexOf(item);
    }
  }
  return positionIndex;
}

function saveAvailableSquaresRight(player) {
  const availableMovesRight = [];
  const presentPosition = getElementPresentPositionIndex(player);
  const parentElement = player.parentElement.parentElement;
  for (let i = presentPosition + 1; i <= presentPosition + 3; i += 1) {
    if (i === parentElement.childElementCount) {
      return availableMovesRight;
    }
    if (parentElement.children[i].classList.contains('inactive')) {
      break;
    } else {
      availableMovesRight.push(parentElement.children[i]);
    }
  }
  return availableMovesRight;
}

function saveAvailableSquaresLeft(player) {
  const availableMovesLeft = [];
  const presentPosition = getElementPresentPositionIndex(player);
  const parentElement = player.parentElement.parentElement;
  for (let i = presentPosition - 1; i >= presentPosition - 3; i -= 1) {
    if (i < 0) {
      return availableMovesLeft;
    }
    if (parentElement.children[i].classList.contains('inactive')) {
      break;
    } else {
      availableMovesLeft.push(parentElement.children[i]);
    }
  }
  return availableMovesLeft;
}

function saveAvailableSquaresDown(player) {
  const availableMovesDown = [];
  const playerParent = player.parentElement;
  const playerPosition = getElementPresentPositionIndex(player);
  const parentPosition = getElementPresentPositionIndex(playerParent);
  for (let i = parentPosition + 1; i <= parentPosition + 3; i += 1) {
    if (i === playerParent.parentElement.parentElement.childElementCount) {
      return availableMovesDown;
    }
    if (
      playerParent.parentElement.parentElement.children[i].children[
        playerPosition
      ].classList.contains('inactive')
    ) {
      break;
    } else {
      availableMovesDown.push(
        playerParent.parentElement.parentElement.children[i].children[
          playerPosition
        ]
      );
    }
  }
  return availableMovesDown;
}

function saveAvailableSquaresTop(player) {
  const availableMovesTop = [];
  const playerParent = player.parentElement;
  const playerPosition = getElementPresentPositionIndex(player);
  const parentPosition = getElementPresentPositionIndex(playerParent);
  for (let i = parentPosition - 1; i >= parentPosition - 3; i -= 1) {
    if (i < 0) {
      return availableMovesTop;
    }
    if (
      playerParent.parentElement.parentElement.children[i].children[
        playerPosition
      ].classList.contains('inactive')
    ) {
      break;
    } else {
      availableMovesTop.push(
        playerParent.parentElement.parentElement.children[i].children[
          playerPosition
        ]
      );
    }
  }
  return availableMovesTop;
}

function highlightAvailableSquares(squares) {
  if (squares.length <= 0) {
    return;
  }
  for (const square of squares) {
    square.classList.add('available-move');
  }
}

/* function highlightNewAvailableSquares(
  player1,
  player2,
  playerTurn,
  availableSquares
) {
  let numberOfTurns = 0;
  document.addEventListener('keyup', function(event) {
    return (function() {
      if (numberOfTurns >= 3) {
        playerTurn = player2;
      }
      if (numberOfTurns === 6) {
        playerTurn = player1;
        numberOfTurns = 0;
      }
      const movementKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
      if (movementKeys.includes(event.code)) {
        event.preventDefault();
        numberOfTurns += 1;
        for (const square of availableSquares) {
          square.classList.remove('available-move');

          console.log(numberOfTurns);
        }
        availableSquares = [
          ...saveAvailableSquaresTop(playerTurn),
          ...saveAvailableSquaresDown(playerTurn),
          ...saveAvailableSquaresRight(playerTurn),
          ...saveAvailableSquaresLeft(playerTurn)
        ];
        highlightAvailableSquares(availableSquares);
        // console.log('THREE' + ' : ' + availableSquares);
      }
    })();
  });
} */
