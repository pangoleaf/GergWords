'use strict';

const initialsForm = document.querySelector('.initials__form');
const initialsBox = document.querySelector('.initials__box');
const wordsBox = document.querySelector('.words');

const isAlpha = letter => /[a-zA-Z]/.test(letter);
const choose = array => array[Math.floor(Math.random() * array.length)];
const capitalise = word => word[0].toUpperCase() + word.slice(1);

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
  wordsBox.textContent = getWords(initialsBox.value)
});
