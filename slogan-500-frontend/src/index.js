const playButton = document.getElementById("play-button");
const gameTimer = document.getElementById("timer");
const leftContainer = document.getElementById("left-container");
const allScoresURL = 'http://localhost:3000/scores'
let startTimer;
let time = 30000
function startGameTimer() {
    startTimer = setInterval(decrementTimer, 10);

}

function decrementTimer() {
    
    let timeLeft = gameTimer.innerText;
    let clock = document.getElementById("bar")
        time -=10
        let remain = time / 30000 * 100 
        clock.style.width = remain + "%"
    if (time % 1000 == 0) {
              
        timeLeft --;
        let clockdown = parseInt(timeLeft) / 30 * 100 
        
        
        gameTimer.innerText = `${timeLeft}`;
    } else if (parseInt(timeLeft) === 0) {
        gameTimer.innerText = 0;
        gameOver();
    }
}

function saveScore(currentScore) {
    let data = {
        total_points: parseInt(currentScore),
        user_id: userID
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(allScoresURL, configObj)
    .then(response => response.json())
    .then(scoreObj => {
        console.log(scoreObj);
        const saveSuccess = document.createElement("h3");
        saveSuccess.innerText = "Score Saved!";
        leftContainer.appendChild(saveSuccess);
    })
}

function gameOver() {
    while(leftContainer.hasChildNodes()) {
        leftContainer.removeChild(leftContainer.firstChild);
    }

    let currentScore = document.getElementById("score").innerText;

    const gameOverHeader = document.createElement("h2");
    gameOverHeader.id = "game-over-head";
    gameOverHeader.innerText = "Game Over";
    leftContainer.appendChild(gameOverHeader);

    const newScore = document.createElement("h3");
    newScore.innerText = `Your score is: ${currentScore}`;
    leftContainer.appendChild(newScore);

    const saveScoreButton = document.createElement("button");
    saveScoreButton.innerText = "Click here to save your score!";
    createSaveButtonEvent(saveScoreButton, currentScore);
    leftContainer.appendChild(saveScoreButton);
}

function createSaveButtonEvent(button, currentScore) {
    button.addEventListener("click", event => {
        event.preventDefault();
        clearInterval(startTimer);
        saveScore(currentScore);
        button.setAttribute("disabled", "true");
    })
}

playButton.addEventListener("click", event => {
    event.preventDefault();
    console.log(userID);

    if (parseInt(gameTimer.innerText) !== 30) {
        gameTimer.innerText = "30";
    } else {
        startGameTimer();
    }

})