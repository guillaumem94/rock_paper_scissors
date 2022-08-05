"use strict";
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const announcement = document.querySelector('.announcement');
const result = document.querySelector('.result');
const computerPick = () => {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const randomPick = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomPick];
};
rock.addEventListener('click', () => {
    let res = computerPick();
    if (res)
        announcement.innerHTML = `Your opponent chose ${res}.`;
    if (res && res === 'rock') {
        result.innerHTML = 'Draw. Try again.';
        result.style.color = 'blue';
    }
    else if (res && res === 'paper') {
        result.innerHTML = 'You lose...';
        result.style.color = 'red';
    }
    else if (res && res === 'scissors') {
        result.innerHTML = 'You win!';
        result.style.color = 'green';
    }
    else {
        result.innerHTML = 'Error, please try again.';
    }
});
paper.addEventListener('click', () => {
    let res = computerPick();
    if (res)
        announcement.innerHTML = `Your opponent chose ${res}.`;
    if (res && res === 'rock') {
        result.innerHTML = 'You win!';
        result.style.color = 'green';
    }
    else if (res && res === 'paper') {
        result.innerHTML = 'Draw. Try again.';
        result.style.color = 'blue';
    }
    else if (res && res === 'scissors') {
        result.innerHTML = 'You lose...';
        result.style.color = 'red';
    }
    else {
        result.innerHTML = 'Error, please try again.';
    }
});
scissors.addEventListener('click', () => {
    let res = computerPick();
    if (res)
        announcement.innerHTML = `Your opponent chose ${res}.`;
    if (res && res === 'rock') {
        result.innerHTML = 'You lose...';
        result.style.color = 'red';
    }
    else if (res && res === 'paper') {
        result.innerHTML = 'You win!';
        result.style.color = 'green';
    }
    else if (res && res === 'scissors') {
        result.innerHTML = 'Draw. Try again.';
        result.style.color = 'blue';
    }
    else {
        result.innerHTML = 'Error, please try again.';
    }
});
