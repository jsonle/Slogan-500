let companiesTest;
let companiesURL = "http://localhost:3000/companies"
let roundcomp = "http://localhost:3000/companies/show"

let login = document.getElementById("login-input")
let div = document.getElementById("left-container")
// login is grabbing the submit button for login
let startbtn = document.getElementById("play-button")
// startbtn is the game start button
document.addEventListener("DOMContentLoaded", (event) => {


startup();



})



function startup() {
    let numberofco = 4
    let companyrandid = Math.floor(Math.random() * 40)
    let li = document.createElement("li")
    let ul = document.createElement("ul")
    ul.appendChild(li)
    startbtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        console.log("hello")
        fetch(roundcomp)
        .then(function(response){
            return response.json()
        })
            .then(function(options){
                //these are the four random companies and their slogans 
                
                            let sloganhead = document.createElement("h3")
                            let slogan = document.createElement("h2")
                            slogan.setAttribute("id", "slogan-head")
                            sloganhead.innerText = "Slogan:"
                            div.appendChild(sloganhead)
                            div.appendChild(slogan)



                let randoslogan = Math.floor ( Math.random() * 4 )
                 slogan.innerText = options[randoslogan].slogan


                    options.forEach(function(option) {
                     let answerbutton = document.createElement("button")
                        answerbutton.setAttribute("class", "btn btn-primary btn-lg")
                        answerbutton.setAttribute("id", "answerbtn")
                    answerbutton.innerText = option.name
                    div.appendChild(answerbutton)
                    
                    
                    
                    })
            
                
            })
    
    
    
    })  
}








