
const PersonalScoresButton = document.getElementById("Personal-Scores");
let ScoresURL = "http://localhost:3000/scores"
let personal = document.getElementById("right-div-container")
let ul = document.createElement("ul")
 personal.appendChild(ul)           
            
PersonalScoresButton.addEventListener("click", (event) => {



    
    
    fetchscoreinfo();
    
})
function divclear(){
    while (personal.hasChildNodes()) {
        personal.removeChild(personal.firstChild)
    }
}

function fetchscoreinfo() {
   
      fetch(ScoresURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(score){
        divclear();
        let heading = document.createElement("h1")               
        personal.append(heading)    
        heading.innerText = "PERSONAL HIGH SCORES"
        let usernameinfo = document.getElementById("userName")
        let usernamenav = usernameinfo.innerText 
        let ul = document.createElement("ul")
                let li = document.createElement("li")
                personal.appendChild(ul)
                
        score.forEach(function(info) {
            
            if (info.user.username === usernamenav) {
             let li = document.createElement("li")  
             ul.appendChild(li)
                li.innerText = info.total_points
               
               
            }
        }) 
        
               
           
        
        
        
    })  
    }
    

