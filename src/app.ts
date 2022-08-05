const rock = document.getElementById('rock') as HTMLImageElement;
const paper = document.getElementById('paper') as HTMLImageElement;
const scissors = document.getElementById('scissors') as HTMLImageElement;

const announcement = document.querySelector('.announcement') as HTMLDivElement;
const result = document.querySelector('.result') as HTMLDivElement;

const computerPick = (): string => {
  const computerOptions: string[] = ['rock', 'paper', 'scissors'];
  const randomPick: number = Math.floor(Math.random() * computerOptions.length);

  return computerOptions[randomPick];
};

rock.addEventListener('click', (): void => {
  let res: string = computerPick();

  if (res) announcement.innerHTML = `Your opponent chose ${res}.`;

  if (res && res === 'rock') {
    result.innerHTML = 'Draw. Try again.';
    result.style.color = 'blue';
  } else if (res && res === 'paper') {
    result.innerHTML = 'You lose...';
    result.style.color = 'red';
  } else if (res && res === 'scissors') {
    result.innerHTML = 'You win!';
    result.style.color = 'green';
  } else {
    result.innerHTML = 'Error, please try again.';
  }
});

paper.addEventListener('click', (): void => {
  let res: string = computerPick();

  if (res) announcement.innerHTML = `Your opponent chose ${res}.`;

  if (res && res === 'rock') {
    result.innerHTML = 'You win!';
    result.style.color = 'green';
  } else if (res && res === 'paper') {
    result.innerHTML = 'Draw. Try again.';
    result.style.color = 'blue';
  } else if (res && res === 'scissors') {
    result.innerHTML = 'You lose...';
    result.style.color = 'red';
  } else {
    result.innerHTML = 'Error, please try again.';
  }
});

scissors.addEventListener('click', (): void => {
  let res: string = computerPick();

  if (res) announcement.innerHTML = `Your opponent chose ${res}.`;

  if (res && res === 'rock') {
    result.innerHTML = 'You lose...';
    result.style.color = 'red';
  } else if (res && res === 'paper') {
    result.innerHTML = 'You win!';
    result.style.color = 'green';
  } else if (res && res === 'scissors') {
    result.innerHTML = 'Draw. Try again.';
    result.style.color = 'blue';
  } else {
    result.innerHTML = 'Error, please try again.';
  }
});
