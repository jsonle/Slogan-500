let isAnswered = false;
const timer = document.getElementById("timer")
let points = 0
let companiesURL = "http://localhost:3000/companies"
let roundcomp = "http://localhost:3000/companies/show"
let questionnum = 1 
let login = document.getElementById("login-input")
let div = document.getElementById("left-container")
// login is grabbing the submit button for login
let startbtn = document.getElementById("play-button")
// startbtn is the game start button
document.addEventListener("DOMContentLoaded", (event) => {
    

    startup();




})
function correct() {
    alert("You were right!")
}
function Wrong(){
    alert("WRONG")
}
function divclear(){
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }
}
function buffer(){
    // setTimeout(divclear, 700)
    setTimeout(fetchSlogan,850)


}




        
        
       
function fetchSlogan() {
   
        fetch(roundcomp)
        .then(function(response){
            return response.json()
        })
        .then(function(options){

            let score = document.getElementById("score").innerText = points 
            

            divclear();
            setup(options);

                        
            
        })
    }                 



function startup() {

    let numberofco = 4
    let companyrandid = Math.floor(Math.random() * 40)
    let li = document.createElement("li")
    let ul = document.createElement("ul")
    ul.appendChild(li)

    startbtn.addEventListener("click", (event) => {
        
        event.preventDefault(); 
        fetchSlogan();
        
                
                
    
    
    
    })  
}

function right(options) {
   let  sloganon = document.getElementById("sloganonboard")
   let  answerbtns = document.getElementsByClassName("btn btn-primary btn-lg")
   let div = document.getElementById("letf-container") 
    let answerarray = Array.from(answerbtns)
    let sloganquotes = sloganon.innerText
    console.log(sloganquotes)
    console.log(answerarray)
    
    answerarray.forEach(function(button) {
        button.addEventListener("click", (event) => {
            
            
            
            if (button.value == sloganquotes) {
                points ++
                button.setAttribute("class", "btn btn-success btn-lg")
               
                questionnum + 1 
                buffer();
                
            } else {
                button.setAttribute("class", "btn btn-danger btn-lg")
                questionnum + 1 
                buffer();
            }
           
                
            })
          
                }) 
    
    }
    
            
        
        

    function setup(options) {
        
        let sloganhead = document.createElement("h1")
        sloganhead.id = "slogan-header"
        let slogan = document.createElement("h3")
        slogan.setAttribute("id", "sloganonboard")
        sloganhead.innerText = "Slogan:"
        div.appendChild(sloganhead)
        div.appendChild(slogan)



        let randoslogan = Math.floor ( Math.random() * 4 )
        
        slogan.innerText = options[randoslogan].slogan
        

    
    options.forEach(function(option) {
        let answerbutton = document.createElement("button")
        answerbutton.setAttribute("value", option.slogan)
        answerbutton.setAttribute("class", "btn btn-primary btn-lg")
        
        
        answerbutton.setAttribute("id", "answerbtn")
        answerbutton.innerText = option.name
        div.appendChild(answerbutton)
    
    
    
    })
    right(options);
    }
    








