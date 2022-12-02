'use strict';

// console.log(document.querySelector('.guess-message').textContent)
//
// document.querySelector('.guess-message').textContent = 'Вы угадали!!!'
//
// document.querySelector('.question').textContent = 7
//
// document.querySelector('.score').textContent = 11
//
// document.querySelector('.number-input').value = 6


// const eventHandler = function () {
//     console.log(document.querySelector('.number-input').value)
// }


let generateNumber = Math.trunc(Math.random() * 20 + 1 )

let score = 10

let bestScore = 0


// AGAIN
document.querySelector('.again').addEventListener('click', () => {
    generateNumber = Math.trunc(Math.random() * 20 + 1 )
    score = 10

    document.querySelector('.question').textContent = '???'
    document.querySelector('.question').style.fontSize = '4rem'
    document.querySelector('.question').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = '#000'
    document.querySelector('.number-input').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('.guess-message').textContent = 'Начни угадывать!'



})


document.querySelector('.check')
    .addEventListener('click', () => {
        const guessingNumber = +document.querySelector('.number-input').value

        if (score > 1) {

            // NO INPUT
            if (!guessingNumber) {
                document.querySelector('.guess-message').textContent = 'Введите число!'

            // RIGHT NUMBER
            } else if (guessingNumber === generateNumber) {
                document.querySelector('.guess-message').textContent = 'Правильно!'
                document.querySelector('.question').textContent = generateNumber
                document.querySelector('body').style.backgroundColor = '#21ff00'
                document.querySelector('.question').style.fontSize = '8rem'
                document.querySelector('.question').style.width = '50rem'

                if (score > bestScore) {
                    bestScore = score
                    document.querySelector('.highscore').textContent = bestScore
                }


            // TOO LOW
            } else if (guessingNumber < generateNumber) {
                document.querySelector('.guess-message').textContent = 'Слишком мало!'
                score --
                document.querySelector('.score').textContent = score

            // TOO HIGH
            } else if (guessingNumber > generateNumber) {
                document.querySelector('.guess-message').textContent = 'Слишком много!'
                score--
                document.querySelector('.score').textContent = score
            }

            // GAME OVER
        } else  {
            document.querySelector('.guess-message').textContent = 'Вы проиграли!'
            score --
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = '#ff0000'
            document.querySelector('.question').textContent = 'Game Over'

        }
    })




