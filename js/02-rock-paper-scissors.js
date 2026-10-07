document.write(`<h2>The Rock, Paper, Scissors Game</h2>`);

const userInput = () => {
    let userChoice = prompt(`What's your choice?`, 'Rock, Paper, Scissors...');
    // handle case - Cancel btn is clicked at prompt screen
    if (userChoice === null) userChoice = ''; else userChoice = userChoice.toLowerCase();
    //handle case - user does a random input
    while (userChoice !== 'rock' &&
        userChoice !== 'paper' &&
        userChoice !== 'scissors' &&
        userChoice !== '') {
            userChoice = prompt(`Invalid choice - must be one of the following...`, 'Rock, Paper, Scissors...');
            // handle case - Cancel btn is clicked at prompt screen
            if (userChoice === null) userChoice = ''; else userChoice = userChoice.toLowerCase();
        }
    return userChoice;
}

const computerChoice = () => {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (choice === 1) {choice = 'rock'} else 
    if (choice === 2) {choice = 'paper'} else 
    if (choice === 3) {choice = 'scissors'}
    return choice;
}

const gameRound = () => {
    alert('This is the start of a round...')
    let human = userInput();
    console.log(human);
    let machine = computerChoice();
    console.log(machine);
    if (human === machine) {alert('draw!')} else
    if (
        (human === 'rock' && machine === 'scissors') || 
        (human === 'paper' && machine === 'rock') || 
        (human === 'scissors' && machine ==='paper')
    ) {alert('you win!')} else 
    if (human == '') {
        alert('Cancel button was clicked - game ends');
    } else {
        alert(`computer scores!`);
    }
}
// Triggers first round
gameRound();

let playAgain = prompt('Play again?', 'yay/nay');
if (playAgain !== null) playAgain.toLowerCase; else playAgain = '';
playAgain = yesCheck(playAgain);

// console.log(playAgain);
while (playAgain == 'y') {
    gameRound();
    playAgain = prompt('Play again?', 'Yay/nay');
    if (playAgain !== null) playAgain.toLowerCase; else playAgain = '';
    playAgain = yesCheck(playAgain);
    // console.log(playAgain);
}
alert(`Thank you for playing!`);

function yesCheck(strPlayAgain) {
    if (strPlayAgain == 'yay'|| strPlayAgain == 'y' ||
    strPlayAgain == 'yeah' || strPlayAgain == 'yea' ||
    strPlayAgain == 'yes' ||
    strPlayAgain == 'yee' ||
    strPlayAgain == 'yup' ||
    strPlayAgain == 'ok' ||
    strPlayAgain == 'sure') {
        // console.log(strPlayAgain);
        return strPlayAgain = 'y';
    }
}