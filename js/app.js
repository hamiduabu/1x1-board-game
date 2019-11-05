import { domNode1 } from './dom-variables.js';
import { imgSrc } from './game-items.js';
import { inputId } from './game-items.js';
// import { avatars } from './game-items.js';
import { startGame } from './game-events.js';
// import { addMovements } from './game-events.js';
// import * as utils from './game-utilities.js';

// console.log(inputId);
// console.log(imgSrc);
// console.log(nodes.avatarImgs);

domNode1.avatarImgs.forEach((img, index) => {
  // @ts-ignore
  img.src = imgSrc[index];
  img.previousElementSibling.id = inputId[index];
  img.parentElement.setAttribute('for', inputId[index]);
});

startGame();
