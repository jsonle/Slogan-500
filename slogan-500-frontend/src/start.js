let companiesTest;
let companiesURL = "http://localhost:3000/companies"
let roundcomp = "http://localhost:3000/companies/show"
let login = document.getElementById("login-input")
let div = document.getElementById("left-container")
// login is grabbing the submit button for login
let startbtn = document.getElementById("play-button")
// startbtn is the game start button
document.addEventListener("DOMContentLoaded", (event) => {

submit();
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
        fetch(roundcomp)
    .then(function(response){
        return response.json()
    })
    .then(function(options){
       console.log(options)
    })
    
    
    
})  
}







