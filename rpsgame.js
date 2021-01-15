function rps(yourChoice) {
    let humanChoice = yourChoice.id;
    let computer = computerChoice(rpsToInt());
    let result = decideWinner(humanChoice, computer);
    let final = finalMessage(result);
    rpsFrontEnd(humanChoice, computer, final);
}
function rpsToInt() {
    return Math.floor(Math.random() * 3);
}
function computerChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(userChoice, computerChoice) {
    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    let userScore = rpsDatabase[userChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][userChoice];
    return [userScore, computerScore];
}
let score = 0;
let cscore = 0;

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 1) {
        score++;
        document.getElementById('user-score').innerText = score;
        return { 'message': 'Congratulations<br/>You won', 'color': 'green' };
    }
    if (yourScore === 0.5) {
        return { 'message': 'Draw', 'color': 'yellow' };
    }
    else {
        cscore++;
        document.getElementById('computer-score').innerText = cscore;;
        return { 'message': 'Try Again<br/>You Lost', 'color': 'red' };
    }
}
function rpsFrontEnd(humanImage, botImage, finalmessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    };
    document.getElementById('rock').style.display = "none";
    document.getElementById('scissors').style.display = "none";
    document.getElementById('paper').style.display = "none";
    let humanDiv = document.createElement('div');
    humanDiv.setAttribute('id', 'human');
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'message');
    let computerDiv = document.createElement('div');
    computerDiv.setAttribute('id', 'computer');
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImage] + "'height=200px width=200px>";
    messageDiv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size:45px;padding:50px;'>" + finalmessage['message'] + "</h1>";
    computerDiv.innerHTML = "<img src ='" + imageDatabase[botImage] + "'height=200px width=200px>";
    document.getElementById('images1').appendChild(humanDiv);
    document.getElementById('images1').appendChild(messageDiv);
    document.getElementById('images1').appendChild(computerDiv);
}
function playAgain() {
    try {
        document.getElementById('human').remove();
        document.getElementById('message').remove();
        document.getElementById('computer').remove();
        document.getElementById('rock').style.display = "flex";
        document.getElementById('scissors').style.display = "flex";
        document.getElementById('paper').style.display = "flex";
    } catch (e) {
        console.log('Play the game first');
    }
}
function resetscore() {
    score = 0;
    cscore = 0;
    document.getElementById('user-score').innerText = score;
    document.getElementById('computer-score').innerText = cscore;
}
