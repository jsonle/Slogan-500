const playButton = document.getElementById("play-button");
const gameTimer = document.getElementById("timer");

function startTimer() {

    setInterval(decrementTimer, 1000);
}

function decrementTimer() {
    let seconds = gameTimer.innerText

    if (parseInt(seconds) > 0) {
        seconds --;
        gameTimer.innerText = `${seconds}`;
    }

}

playButton.addEventListener("click", event => {
    event.preventDefault();

    if (parseInt(gameTimer.innerText) !== 30) {
        gameTimer.innerText = "30";
    } else {
        startTimer();
    }
})