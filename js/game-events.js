import { domNode1 } from './dom-variables.js';
import { domNode2 } from './dom-variables.js';
import * as utils from './game-utilities.js';
import * as item from './game-items.js';
import { Player } from './game-prototypes.js';
import { Board } from './game-prototypes.js';

// Modal events
export function startGame() {
  domNode1.startGameBtn.addEventListener('click', () => {
    console.log('Starting ...');
    //Get player details
    // Consider using destructuring below
    // const [playerOne, playerTwo] = getPlayerDetails();
    const players = getPlayerDetails();
    const [playerOne, playerTwo] = players;

    // Reset Modal Form
    domNode1.playerInputForm.reset();

    // Hide landing page and modal
    domNode1.clearScreen();

    // create game board
    const board = new Board();

    // Create Grid
    const boardFragment = board.createGrid();
    const gridCells = boardFragment.querySelectorAll('.inner-box');

    // Get four(4) random weapons
    const availableWeapons = utils.generateUniqueRandomItems(item.weapons, 4);

    // Get index numbers for 10 Inactive squares
    const inactiveArea = utils.generateUniqueRandomNumbers(
      0,
      gridCells.length,
      10
    );

    // Get index number to position players
    const unavailablePlayerOnePositions = utils.generateUniqueRandomNumbers(
      0,
      45,
      20,
      utils.getAvailablePlayerStartPositions().playerOnePositions
    );

    const unavailablePlayerTwoPositions = utils.generateUniqueRandomNumbers(
      55,
      100,
      20,
      utils.getAvailablePlayerStartPositions().playerTwoPositions
    );

    const playerOnePosition = utils.generateUniqueRandomNumbers(0, 45, 1, [
      ...inactiveArea,
      ...unavailablePlayerOnePositions
    ]);
    const playerTwoPosition = utils.generateUniqueRandomNumbers(55, 100, 1, [
      ...inactiveArea,
      ...unavailablePlayerTwoPositions
    ]);
    const playersPosition = [...playerOnePosition, ...playerTwoPosition];

    // Weapon Squares
    const weaponSquares = utils.generateUniqueRandomNumbers(0, 100, 4, [
      ...inactiveArea,
      ...playersPosition
    ]);

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

    // Highlight initial active player
    const {
      availableSquares,
      playerTurn,
      player1,
      player2
    } = setInitialActiveSquares(boardFragment);
    utils.highlightAvailableSquares(availableSquares);

    // Add movements
    manageMovements(players, playerTurn, player1, player2, availableSquares, [
      ...item.defaultWeapon,
      ...availableWeapons
    ]);

    // Display Heading
    const combatants = document.querySelector('#combatants');
    combatants.textContent = `${playerOne.name} VS ${playerTwo.name}`;

    // Player Boxes

    // Display player Stats

    // Player Avatar and name

    domNode2.playerBoxOneImg.src = playerOne.mainImgUrl;
    domNode2.playerBoxTwoImg.src = playerTwo.mainImgUrl;

    domNode2.playerBoxOneName.textContent = `${playerOne.name}`;
    domNode2.playerBoxTwoName.textContent = `${playerTwo.name}`;

    // Health Points

    domNode2.playerOneHpValue.textContent = '100';
    domNode2.playerTwoHpValue.textContent = '100';

    [
      domNode2.playerOneWeaponImg.src,
      domNode2.playerOneWeaponName.textContent,
      domNode2.playerOneWeaponDesc.textContent,
      domNode2.playerOneWeaponAp.textContent
    ] = Object.values(utils.updatePlayerWeapon(playerOne));

    [
      domNode2.playerTwoWeaponImg.src,
      domNode2.playerTwoWeaponName.textContent,
      domNode2.playerTwoWeaponDesc.textContent,
      domNode2.playerTwoWeaponAp.textContent
    ] = Object.values(utils.updatePlayerWeapon(playerTwo));

    // append to dom
    document.querySelector('.game-board-container').appendChild(boardFragment);

    const boxOneFragment = document.createDocumentFragment();

    // console.log(playerTwo);
    // console.log(playerOne);
  });
}

/*
 ***
 */

function setInitialActiveSquares(domObject) {
  const player1 = domObject.querySelector('#player1');
  const player2 = domObject.querySelector('#player2');
  const playerTurn = player1;
  playerTurn.classList.add('active-player');
  const availableSquares = [
    ...saveAvailableSquaresRight(playerTurn),
    ...saveAvailableSquaresLeft(playerTurn),
    ...saveAvailableSquaresDown(playerTurn),
    ...saveAvailableSquaresTop(playerTurn)
  ];
  return { availableSquares, playerTurn, player1, player2 };
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

// Get players details from Modal Dialog Form
function getPlayerDetails() {
  const playerOneName = utils.getPlayerName(domNode1.playerOneNameInput);
  const playerOneAvatarDetails = utils.getPlayerAvatarDetails(
    domNode1.playerOneAvatarSelect(),
    item.avatars
  );
  const playerTwoName = utils.getPlayerName(domNode1.playerTwoNameInput);
  const playerTwoAvatarDetails = utils.getPlayerAvatarDetails(
    domNode1.playerTwoAvatarSelect(),
    item.avatars
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
function manageMovements(
  players,
  playerTurn,
  player1,
  player2,
  availableSquares,
  weapons
) {
  let numberOfTurns = 0;

  document.addEventListener('keydown', function(event) {
    const allowedKeys = [
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
      'ArrowLeft',
      'Space'
    ];
    if (!allowedKeys.includes(event.key)) {
      return event.preventDefault();
    }
    for (const square of availableSquares) {
      square.classList.remove('available-move');
    }
    availableSquares = [];

    return (function() {
      if (event.code === 'ArrowUp') {
        const topSquare =
          playerTurn.parentElement.parentElement.previousElementSibling;
        if (!topSquare) {
          return domNode1.toggleError();
        }
        if (
          topSquare.children[
            utils.getElementPresentPositionIndex(playerTurn)
          ].classList.contains('inactive')
        ) {
          return domNode1.toggleError();
        }
        topSquare.children[
          utils.getElementPresentPositionIndex(playerTurn)
        ].appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowDown') {
        const bottomSquare =
          playerTurn.parentElement.parentElement.nextElementSibling;
        if (!bottomSquare) {
          return domNode1.toggleError();
        }
        if (
          bottomSquare.children[
            utils.getElementPresentPositionIndex(playerTurn)
          ].classList.contains('inactive')
        ) {
          return domNode1.toggleError();
        }
        bottomSquare.children[
          utils.getElementPresentPositionIndex(playerTurn)
        ].appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowLeft') {
        const leftSquare = playerTurn.parentElement.previousElementSibling;
        if (!leftSquare || leftSquare.classList.contains('inactive')) {
          return domNode1.toggleError();
        }
        leftSquare.appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (event.code === 'ArrowRight') {
        const rightSquare = playerTurn.parentElement.nextElementSibling;
        if (!rightSquare || rightSquare.classList.contains('inactive')) {
          return domNode1.toggleError();
        }
        rightSquare.appendChild(playerTurn);
        numberOfTurns += 1;
      }
      if (numberOfTurns === 3) {
        playerTurn.classList.remove('active-player');
        playerTurn = player2;
        playerTurn.classList.add('active-player');
      }

      if (numberOfTurns >= 3 && numberOfTurns <= 6) {
        playerTurn = player2;
      }

      if (numberOfTurns === 6) {
        playerTurn.classList.remove('active-player');
        numberOfTurns = 0;
        playerTurn = player1;
        playerTurn.classList.add('active-player');
      }

      // Switch Weapons
      let presentPlayer;
      if (numberOfTurns > 0 && numberOfTurns <= 3) {
        presentPlayer = player1;
      } else {
        presentPlayer = player2;
      }
      const presentPlayerSquare = presentPlayer.parentElement;
      if (
        presentPlayerSquare.firstElementChild.classList.contains(
          'weapon-board-img'
        )
      ) {
        const newWeaponId = utils.extractNumbers(
          presentPlayerSquare.firstElementChild.id
        );
        const [playerOne, playerTwo] = players;
        if (presentPlayer === player1) {
          switchWeapon(
            playerOne,
            'playerOne',
            newWeaponId,
            weapons,
            presentPlayerSquare
          );
        } else {
          switchWeapon(
            playerTwo,
            'playerTwo',
            newWeaponId,
            weapons,
            presentPlayerSquare
          );
        }
      }
    })();
  });

  document.addEventListener('keyup', function(event) {
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
    if (!allowedKeys.includes(event.key)) {
      return event.preventDefault();
    }
    availableSquares = [
      ...saveAvailableSquaresTop(playerTurn, numberOfTurns),
      ...saveAvailableSquaresDown(playerTurn, numberOfTurns),
      ...saveAvailableSquaresRight(playerTurn, numberOfTurns),
      ...saveAvailableSquaresLeft(playerTurn, numberOfTurns)
    ];
    //
    const adjacentSquares = [
      saveAvailableSquaresTop(playerTurn)[0],
      saveAvailableSquaresDown(playerTurn)[0],
      saveAvailableSquaresRight(playerTurn)[0],
      saveAvailableSquaresLeft(playerTurn)[0]
    ];

    const validAdjacentSquares = getValidSquares(adjacentSquares);

    checkForBattleCondition(validAdjacentSquares);

    utils.highlightAvailableSquares(availableSquares);
  });
}

function switchWeapon(
  playerObject,
  playerString,
  newWeaponId,
  weaponsCache,
  presentPlayerSquare
) {
  const currentPlayer = playerObject;
  const oldWeaponId = playerObject.weaponId;
  currentPlayer.weaponId = newWeaponId;
  [
    domNode2[`${playerString}WeaponImg`].src,
    domNode2[`${playerString}WeaponName`].textContent,
    domNode2[`${playerString}WeaponDesc`].textContent,
    domNode2[`${playerString}WeaponAp`].textContent
  ] = Object.values(
    utils.updatePlayerWeapon(currentPlayer, weaponsCache, newWeaponId)
  );
  dropOldWeapon(weaponsCache, oldWeaponId, presentPlayerSquare);
}

// Save Available Squares
// Right Squares
function saveAvailableSquaresRight(player, turns = 0) {
  turns = utils.manageTurns(turns);

  const {
    presentPosition,
    availableMoves: availableMovesRight,
    parentElement
  } = savePositions(player);

  for (let i = presentPosition + 1; i <= presentPosition + 3 - turns; i += 1) {
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

// Left Squares
function saveAvailableSquaresLeft(player, turns = 0) {
  turns = utils.manageTurns(turns);

  const {
    presentPosition,
    availableMoves: availableMovesLeft,
    parentElement
  } = savePositions(player);

  for (let i = presentPosition - 1; i >= presentPosition - 3 + turns; i -= 1) {
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

// Bottom Squares
function saveAvailableSquaresDown(player, turns = 0) {
  turns = utils.manageTurns(turns);

  const {
    parentPosition,
    availableMoves: availableMovesDown,
    playerParent,
    playerPosition
  } = savePositions(player);

  for (let i = parentPosition + 1; i <= parentPosition + 3 - turns; i += 1) {
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

// Top Squares
function saveAvailableSquaresTop(player, turns = 0) {
  turns = utils.manageTurns(turns);

  const {
    parentPosition,
    availableMoves: availableMovesTop,
    playerParent,
    playerPosition
  } = savePositions(player);

  for (let i = parentPosition - 1; i >= parentPosition - 3 + turns; i -= 1) {
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

// Save positions to be used to get available squares
function savePositions(player) {
  const availableMoves = [];
  const presentPosition = utils.getElementPresentPositionIndex(player);
  const parentElement = player.parentElement.parentElement;
  const playerParent = player.parentElement;
  const playerPosition = utils.getElementPresentPositionIndex(player);
  const parentPosition = utils.getElementPresentPositionIndex(playerParent);
  return {
    parentPosition,
    availableMoves,
    playerParent,
    playerPosition,
    presentPosition,
    parentElement
  };
}

// Check if players are adjacent each other
function checkForBattleCondition(validAdjacentSquares) {
  for (const square of validAdjacentSquares) {
    if (square.children.player1 || square.children.player2) {
      alert('Lets Rumble!!!');
    }
  }
}

// Get valid active squares
function getValidSquares(adjacentSquares) {
  const validAdjacentSquares = [];
  for (const square of adjacentSquares) {
    if (square) {
      validAdjacentSquares.push(square);
    }
  }
  return validAdjacentSquares;
}

// Drop old weapon
function dropOldWeapon(weapons, oldWeaponId, presentPlayerSquare) {
  for (const weapon of weapons) {
    if (weapon.id === oldWeaponId) {
      presentPlayerSquare.firstElementChild.src = weapon.miniImgUrl;
      presentPlayerSquare.firstElementChild.id = `weapon${oldWeaponId}`;
    }
  }
}
