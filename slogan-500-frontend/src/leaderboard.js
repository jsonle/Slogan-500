const rightContainer = document.getElementById("right-div-container");
const leaderboardButton = document.getElementById("leaderboards");
const scoresURL = 'http://localhost:3000/scores/leaders'

function fetchLeaderBoard() {
    
    fetch(scoresURL)
    .then(response => response.json())
    .then(scoreObjects => {
        console.log(scoreObjects);
        displayLeaderBoard(scoreObjects);
    })
}

function displayLeaderBoard(scores) {
    while (rightContainer.hasChildNodes()) {
        rightContainer.removeChild(rightContainer.firstChild);
    }

    const leaderBoardDiv = document.createElement("div");
    leaderBoardDiv.id = "leaderboard-scores";

    const leaderBoardTitle = document.createElement("h3");
    leaderBoardTitle.innerText = "Leaderboard";
    leaderBoardDiv.appendChild(leaderBoardTitle);

    for (const score of scores) {
        const leaderboardItem = document.createElement("p");
        leaderboardItem.innerText = `${score.user.username}: ${score.total_points}`
        leaderBoardDiv.appendChild(leaderboardItem);
    }
    rightContainer.appendChild(leaderBoardDiv);
}



leaderboardButton.addEventListener("click", event => {
    event.preventDefault();
    fetchLeaderBoard();

})