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
  let num = '';
  for (let i = 0; i < str.length; i++) {
    if (Number(str.charAt(i)) % 1 === 0) {
      num += str[i];
    }
  }
  return Number(num);
}