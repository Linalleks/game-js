"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function one() {
  let number = Math.ceil(Math.random() * 100);
  console.log(number);
  let attempt = 10;
  let answer = prompt("Угадай число от 1 до 100");

  function two(answer) {
    if (answer === null) {
      alert("Игра окончена");
      return;
    }

    if (!isNumber(answer)) {
      answer = prompt("Введите число");
      two(answer);
    }

    attempt--;

    if (+answer === number) {
      if (confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?")) {
        one();
      }
    } else if (attempt === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        one();
      } else {
        return;
      }
    } else if (answer > number) {
      answer = prompt("Загаданное число меньше, осталось попыток " + attempt);
      two(answer);
    } else if (answer < number) {
      answer = prompt("Загаданное число больше, осталось попыток " + attempt);
      two(answer);
    }
  }

  two(answer);
}

one();
