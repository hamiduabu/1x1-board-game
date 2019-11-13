import { game } from './dom-variables.js';
import { setAvatarInputOptions } from './game-items.js';
// import { inputId } from './game-items.js';
// import { avatars } from './game-items.js';
import { managePlayerOptions } from './game-events.js';
import { startGame } from './game-events.js';
// import { addMovements } from './game-events.js';
// import * as utils from './game-utilities.js';
import { startSlideShow } from './game-events.js';

startSlideShow();

managePlayerOptions();

setAvatarInputOptions(game.avatarImgs);

startGame();
