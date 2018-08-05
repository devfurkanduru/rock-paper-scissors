let userChoice = prompt('Your Choice');

function check() {
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissorcs') {
        return 'Good To Go.' + ' Your choice is ' + userChoice + '.';
    } else {
        return 'You are cheating!';
    }
}
document.write(check());


function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissorcs'
    }
}

let computerChoice = getComputerChoice();

document.write(" The computer's choice is " + computerChoice + " .");

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissorcs') {
            return ' You Won!';
        } else {
            return ' Computer Won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return ' You Won!';
        } else {
            return ' Computer Won!';
        }
    }
    if (userChoice === 'scissorcs') {
        if (computerChoice === 'paper') {
            return ' You Won!';
        } else {
            return ' Computer Won!'
        }
    }
}

document.write(determineWinner(userChoice, computerChoice));