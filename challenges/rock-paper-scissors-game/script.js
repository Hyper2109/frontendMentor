let playButton = document.querySelector('#playButton').addEventListener('click', playAgain)
let gameContainer = document.querySelector('.gameContainer')
let resultMainContainer = document.querySelector('.resultMainContainer')

let paper = document.querySelector('.paperContainer')
paper.addEventListener('click', showResult)
let scissors = document.querySelector('.scissorsContainer')
scissors.addEventListener('click', showResult)
let rock = document.querySelector('.rockContainer')
rock.addEventListener('click', showResult)

let pickedBox = document.querySelector('.pickedBox')
let pickedOpponentBox = document.querySelector('.pickedOpponentBox')

let scoreText = document.querySelector('#score')
let score = 0

function showResult() {
    resultMainContainer.style.display = 'flex'
    gameContainer.style.display = 'none'
    let picked = this.cloneNode(true)
    picked.classList.add('pickedTemp')
    pickedBox.appendChild(picked)

    let myChoice = undefined
    switch (picked.classList.value.split(' ')[0]) {
        case 'paperContainer':
            myChoice = 'paper'
            break;
        case 'scissorsContainer':
            myChoice = 'scissors'
            break;
        case 'rockContainer':
            myChoice = 'rock'
            break;
        default:
            break;
    }

    let pickedOpponent = undefined
    let choices = ['paper', 'scissors', 'rock']
    let opponentChoice = choices[Math.floor(Math.random() * choices.length)];
    switch (opponentChoice) {
        case 'paper':
            pickedOpponent = paper.cloneNode(true)
            pickedOpponent.classList.add('pickedTemp')
            pickedOpponentBox.appendChild(pickedOpponent)
            break;
        case 'scissors':
            pickedOpponent = scissors.cloneNode(true)
            pickedOpponent.classList.add('pickedTemp')
            pickedOpponentBox.appendChild(pickedOpponent)
            break;
        case 'rock':
            pickedOpponent = rock.cloneNode(true)
            pickedOpponent.classList.add('pickedTemp')
            pickedOpponentBox.appendChild(pickedOpponent)
            break;
    
        default:
            break;
    }

    giveResult(myChoice, opponentChoice)
}


function giveResult(a, b){
    let resultText = document.querySelector('#result')
    let win = undefined
    if(a == 'paper' && b == 'rock'){
        win = true
    }else if(a == 'paper' && b == 'scissors'){
        win = false
    }else if(a == 'scissors' && b == 'paper'){
        win = true
    }else if(a == 'scissors' && b == 'rock'){
        win = false
    }else if(a == 'rock' && b == 'scissors'){
        win = true
    }else if(a == 'rock' && b == 'paper'){
        win = false
    }

    if(win == false){
        resultText.innerHTML = 'You Loose'
        score = score - 1
    }else if(win == true){
        resultText.innerHTML = 'You Win'
        score = score + 1
    }else{
        resultText.innerHTML = 'Tie'
    }

    scoreText.innerHTML = score
}

function playAgain(){
    resultMainContainer.style.display = 'none'
    gameContainer.style.display = 'flex'
    const pickedTemp = document.querySelectorAll('.pickedTemp')
    pickedTemp.forEach(el => {
        el.remove()
    })
}