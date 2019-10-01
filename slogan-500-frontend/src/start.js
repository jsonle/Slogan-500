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
                
                            let sloganhead = document.createElement("h1")
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
                    
               function right() {
                    sloganon = document.getElementById("sloganonboard")
                    answerbtns = document.getElementsByClassName("btn btn-primary btn-lg")
                    console.log(answerbtns)
                    let answerarray = Array.from(answerbtns)
                    answerarray.forEach(function(button) {
                        button.addEventListener("click", (event) => {
                        if (button.value === sloganon.innerText) {
                            button.setAttribute("class", "btn btn-success btn-lg")
                        } else {
                            button.setAttribute("class", "btn btn-danger btn-lg")
                        }
                       
                    }) 
                    })
                        
                    
                    
                }
                right(options);
            })
    
    
    
    })  
}








