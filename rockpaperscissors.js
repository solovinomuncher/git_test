function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++) {
        let playerMove = window.prompt(`GAME ${i}. Your move:`)
        let computerMove = computerMoveGenerator()
        let youLost = playRound(playerMove,computerMove)[0] === 'L'
        let youWon = playRound(playerMove,computerMove)[0] === 'W'

        if (youLost) {
            computerScore += 1
        } else if (youWon) {
            playerScore += 1
        }
    }

    if (playerScore > computerScore) {
        return 'Player Wins!'
    } else if (playerScore < computerScore) {
        return 'Computer Wins!'
    } else if (playerScore === computerScore) {
        return 'Tie!'
    } else {
        return 'Error'
    }
}

// console.log(game())

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase()
    let cs = computerSelection.toLowerCase()

    if (ps === cs) {
        return 'Tie!'
    } else if (ps === 'rock' && cs === 'paper') {
        return `Lose! ${cs} beats ${ps}`
    } else if (ps === 'rock' && cs === 'scissors') {
        return `Win! ${ps} beats ${cs}`
    } else if (ps === 'paper' && cs === 'rock') {
        return `Win! ${ps} beats ${cs}`
    } else if (ps === 'paper' && cs === 'scissors') {
        return `Lose! ${cs} beats ${ps}`
    } else if (ps === 'scissors' && cs === 'rock') {
        return `Lose! ${cs} beats ${ps}`
    } else if (ps === 'scissors' && cs === 'paper') {
        return `Win! ${ps} beats ${cs}`
    } else {
        return 'Something has gone wrong'
    }
}

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