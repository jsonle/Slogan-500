const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");
const navBar = document.getElementById("navbarColor03")

function sessionFetch() {
    let formData = {
        username: loginInput.value
    }

    let objConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/sessions', objConfig)
    .then(response => response.json())
    .then(sessionObj => {
        console.log(sessionObj);
        createLoggedInElements(sessionObj.username);

    })
}

// Updates NavBar after logging in
function createLoggedInElements(username) {
    loginForm.remove();

    let newItem = document.createElement("li");
    newItem.setAttribute("class", "nav-item");

    let aUser = document.createElement("a");
    aUser.setAttribute("class", "nav-link");
    aUser.id = "session-username";
    aUser.innerText = `${username}`
    newItem.appendChild(aUser);

    navBar.appendChild(newItem);
    createLogOutButton();
}

function createLogOutButton() {
    let logOutButton = document.createElement("button");
    logOutButton.id = "logout";
    logOutButton.innerText = "Logout";

    navBar.appendChild(logOutButton);

}

loginButton.addEventListener("click", event => {
    event.preventDefault();
    sessionFetch();
})

