import { nodes } from './dom-variables.js';
import { imgSrc } from './game-items.js';
import { inputId } from './game-items.js';

// console.log(inputId);
// console.log(imgSrc);
// console.log(nodes.avatarImgs);

nodes.avatarImgs.forEach((img, index) => {
  // @ts-ignore
  img.src = imgSrc[index];
  img.previousElementSibling.id = inputId[index];
  img.parentElement.setAttribute('for', inputId[index]);
});
