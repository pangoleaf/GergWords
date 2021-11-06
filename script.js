'use strict';

const initialsForm = document.querySelector('.initials__form');
const initialsBox = document.querySelector('.input__box');
const wordsBox = document.querySelector('.words');

const isAlpha = letter => /[a-zA-Z]/.test(letter);
const choose = array => array[Math.floor(Math.random() * array.length)];
const capitalise = word => word[0].toUpperCase() + word.slice(1);

const fadeTransition = (div, newValue) => {
  div.classList.add('hidden');
  setTimeout(() => {
      div.textContent = newValue;
      div.classList.remove('hidden');
  }, 200);
}

const getWords = function (fromInput) {
  return fromInput
    .toLowerCase()
    .split('')
    .filter(isAlpha)
    .map(l => choose(words[l]))
    .map(capitalise)
    .join(' ');
}

initialsForm.addEventListener('submit', e => {
  e.preventDefault();
  // wordsBox.textContent = getWords(initialsBox.value);
  fadeTransition(wordsBox, getWords(initialsBox.value));
});
