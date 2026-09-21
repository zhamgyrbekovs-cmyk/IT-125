let count = 0;

let resultDiv = document.getElementById('result');
let plusBtn = document.getElementById('plus');
let resetBtn = document.getElementById('reset');
let minusBtn = document.getElementById('minus');

// Функция тип смены цвета
function checkColor() {
  if (count > 0) {
    resultDiv.className = 'green';
  } else if (count === 0) {
    resultDiv.className = 'gray';
  } else {
    resultDiv.className = 'red';
  }
}

plusBtn.onclick = function() {
  count = count + 1;
  resultDiv.textContent = count;
  checkColor();
};

minusBtn.onclick = function() {
  count = count - 1;
  resultDiv.textContent = count;
  checkColor();
};

resetBtn.onclick = function() {
  count = 0;
  resultDiv.textContent = count;
  checkColor();
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ballsBox = document.getElementById('balls-box');
let generateBtn = document.getElementById('generate-btn');

generateBtn.onclick = function() {

  ballsBox.innerHTML = '';

  let numbers = [];


  while (numbers.length < 6) {
    let randomNumber = getRandomInt(1, 99);
    

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }


  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];


    if (num < 10) {
      num = '0' + num;
    }


    let ball = document.createElement('div');
    ball.className = 'circle';
    ball.textContent = num;

    ballsBox.appendChild(ball);
  }
};