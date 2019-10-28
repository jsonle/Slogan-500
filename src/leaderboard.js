const rightContainer = document.getElementById("right-div-container");
const leaderboardButton = document.getElementById("leaderboards");
const leaderboardURL = 'https://thawing-wave-86373.herokuapp.com/leaderboard'

function fetchLeaderBoard() {
    
    fetch(leaderboardURL)
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

    const leaderBoardList = document.createElement("ol");

    const leaderBoardTitle = document.createElement("h3");
    leaderBoardTitle.innerText = "Leaderboard";
    leaderBoardDiv.appendChild(leaderBoardTitle);

    for (const score of scores) {
        const leaderboardItem = document.createElement("li");
        leaderboardItem.innerText = `${score.user.username}: ${score.total_points} points`
        leaderBoardList.appendChild(leaderboardItem);
    }
    leaderBoardDiv.appendChild(leaderBoardList);
    rightContainer.appendChild(leaderBoardDiv);
}



leaderboardButton.addEventListener("click", event => {
    event.preventDefault();
    fetchLeaderBoard();

})