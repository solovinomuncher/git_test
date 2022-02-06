const btn = document.querySelector('#btn')
btn.addEventListener('click', function(e) {
    alert('i click you!')
})

function computerMoveGenerator() {
    let move = getRandomInt(3)

    if (move === 1) {
        return 'rock'
    } else if (move === 2) {
        return 'paper'
    } else if (move === 3) {
        return 'scissors'
    } 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1
}

// new requirements

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const results = document.querySelector('#results')
const score = document.querySelector('#score')

rockBtn.addEventListener('click', function(e) {
    playRound2('rock')
})

paperBtn.addEventListener('click', function(e) {
    playRound2('paper')
})

scissorsBtn.addEventListener('click', function(e) {
    playRound2('scissors')
})

let playerScore = 0
let computerScore = 0

function playRound2(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return
    }

    let ps = playerSelection.toLowerCase()
    let cs = computerMoveGenerator().toLowerCase()

    if (ps === cs) {
        results.textContent = 'Tie!'
    } else if (ps === 'rock' && cs === 'paper') {
        results.textContent = `Lose! ${cs} beats ${ps}`
    } else if (ps === 'rock' && cs === 'scissors') {
        results.textContent = `Win! ${ps} beats ${cs}`
    } else if (ps === 'paper' && cs === 'rock') {
        results.textContent = `Win! ${ps} beats ${cs}`
    } else if (ps === 'paper' && cs === 'scissors') {
        results.textContent = `Lose! ${cs} beats ${ps}`
    } else if (ps === 'scissors' && cs === 'rock') {
        results.textContent = `Lose! ${cs} beats ${ps}`
    } else if (ps === 'scissors' && cs === 'paper') {
        results.textContent = `Win! ${ps} beats ${cs}`
    } else {
        results.textContent = 'Something has gone wrong'
    }

    game2()
}

function game2() {
    let youLost = results.textContent[0] === 'L'
    let youWon = results.textContent[0] === 'W'

    if (youLost) {
        computerScore += 1
    } else if (youWon) {
        playerScore += 1
    }

    if (playerScore === 5) {
        results.textContent = 'Player reaches 5pts first'
    } else if (computerScore === 5) {
        results.textContent = 'Computer reaches 5pts first'
    }

    score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
}