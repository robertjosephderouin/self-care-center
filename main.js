var receiveMessagesButton = document.querySelector('.receive-message');
var littleGuyImage = document.querySelector('.littleguy');
var messageText = document.querySelector('.message-text');
var body = document.querySelector('.the-body');
var affirmationButton = document.querySelector('.affirmation-button');
var mantraButton = document.querySelector('.mantra-button');

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "Inhale the future, exhale the past.",
  "Disregard women, acquire currency.",
  "Cash rules everything around me.",
  "Mo' money, mo' problems.",
]

var affirmations = [
  "Grass, tastes bad!",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am slowly dying in a vat in the garage.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
]

receiveMessagesButton.addEventListener('click', receiveMessages);
affirmationButton.addEventListener('click', affirmationBackgroundSwitch);
mantraButton.addEventListener('click', mantraBackGroundSwitch);

function affirmationBackgroundSwitch() {
  body.classList.remove('mantra-body');
  body.classList.add('affirmation-body');
}

function mantraBackGroundSwitch() {
  body.classList.remove('affirmation-body');
  body.classList.add('mantra-body');
}

function getRandomIndex(inputRandomList) {
  return Math.floor(Math.random() * inputRandomList.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function fadeOut(element) {
  element.classList.add('fadeout');
  element.addEventListener('animationend', function(){
    hide(element);
  });
}

function receiveMessages() {
  var currentMessage = 0;
  var radioChoice = document.querySelector('.radio-buttons:checked')
  if (radioChoice.value === "mantra") {
    currentMessage = getRandomIndex(mantras);
    fadeOut(littleGuyImage);
    messageText.innerText = mantras[currentMessage];
    show(messageText);
  }
  else if (radioChoice.value === "affirmation") {
    currentMessage = getRandomIndex(affirmations);
    fadeOut(littleGuyImage);
    messageText.innerText = affirmations[currentMessage];
    show(messageText);
  }
}
