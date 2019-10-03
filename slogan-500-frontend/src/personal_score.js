
const PersonalScoresButton = document.getElementById("Personal-Scores");
let ScoresURL = "http://localhost:3000/scores"
let personal = document.getElementById("right-div-container")
let ul = document.createElement("ul")
 personal.appendChild(ul)           
            
PersonalScoresButton.addEventListener("click", (event) => {  
    
    fetchscoreinfo();
    
})

function personclear(){
    while (personal.hasChildNodes()) {
        personal.removeChild(personal.firstChild)
    }
}

function fetchscoreinfo() {
   
      fetch(ScoresURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(scores){
        console.log(scores);
        personclear();
        let heading = document.createElement("h2")               
        personal.append(heading)    
        heading.innerText = "Personal High Scores"
        let usernameinfo = document.getElementById("userName")
        let usernamenav = usernameinfo.innerText 
        let ul = document.createElement("ol")
        personal.appendChild(ul)
                
        scores.forEach(function(score) {
            
            if (score.user.username === usernamenav) {
             let li = document.createElement("li") 
             li.innerText = `${score.total_points} points` 
             li.setAttribute("score-id", `${score.id}`)

             const deleteButton = document.createElement("button");
             deleteButton.innerText = "Remove Score";
             createDeleteEvent(deleteButton, score);
             li.appendChild(deleteButton);


             ul.appendChild(li)
               
               
            }
        }) 
    })  
}

function removeScore(score) {
    let data = {
        id: score.id,
        total_points: score.total_points,
        user_id: score.user_id
    }

    let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(`${ScoresURL}/${score['id']}`, configObj)
    .then(response => response.json())
    .then(removedScore => {
        console.log(removedScore);
        const scoreItem = document.querySelector(`[score-id="${score.id}"]`);
        scoreItem.parentNode.removeChild(scoreItem);
    })
}

function createDeleteEvent(button, score) {
    button.addEventListener("click", event => {
        event.preventDefault();
        removeScore(score);
        console.log(score.id);
    })
}


    

