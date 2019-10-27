import { domNodes } from './dom-variables.js';

export function generateElement(element) {
  return document.createElement(element);
}

export function addAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  element.setAttribute(attribute, value);
}

export function modifyAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  element.attribute = value;
}

export function shuffle(arr) {
  const shuffledArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    let index = Math.floor(Math.random() * arr.length);
    if (!shuffledArray.includes(arr[index])) {
      shuffledArray.push(arr[index]);
    } else {
      i -= 1;
    }
  }
  return shuffledArray;
}

function extractNumbers(str) {
  let numString = '';
  for (const char of str) {
    if (Number(char) % 1 === 0) {
      numString += char;
    }
  }
  return numString.length === 0 ? null : Number(numString);
}

export function getPlayerName(playerDomNode) {
  return playerDomNode.value === ''
    ? playerDomNode.placeholder
    : playerDomNode.value;
}

export function getPlayerAvatarDetails(playerSelection, arr) {
  const playerOptions = {};
  for (const obj of arr) {
    if (extractNumbers(playerSelection.id) === obj.id) {
      playerOptions.avatarId = obj.id;
      playerOptions.mainAvatar = obj.imgUrl;
      playerOptions.miniAvatar = obj.miniImgUrl;
    }
  }
  return playerOptions;
}

export function generateUniqueRandomItems(arr, num = 1) {
  if (num > arr.length) {
    num = arr.length;
  }
  const generatedItems = [];
  while (generatedItems.length !== num) {
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    if (!generatedItems.includes(randomItem)) {
      generatedItems.push(randomItem);
    }
  }
  return generatedItems;
}

// Max not included
export function generateUniqueRandomNumbers(
  min = 0,
  max = 1,
  num = 1,
  excludeNumbers = []
) {
  if (min > max) {
    min = max;
  }

  if (num > max - min) {
    num = max - min;
  }
  if (num + excludeNumbers.length > max - min) {
    num -= excludeNumbers.length;
    console.error(
      `Based on your inputs, only ${num} unique random numbers can be generated.`
    );
  }

  const generatedNumbers = [];
  while (generatedNumbers.length !== num) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (
      !generatedNumbers.includes(randomNumber) &&
      !excludeNumbers.includes(randomNumber)
    ) {
      generatedNumbers.push(randomNumber);
    }
  }

  return generatedNumbers;
}
