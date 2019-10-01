const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");
const navBar = document.getElementById("navbar-list");
const navBarDiv = document.getElementById("navbarColor03");
const startButton = document.getElementById("play-button");
const form = loginForm;

// Login
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
        createLoggedInElements(sessionObj);

    })
}

// Logout
function logoutFetch(user) {
   let data = {
        user_id: user['id'],
        username: user['username']
    }

   let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/sessions', configObj)
    .then(response => response.json())
    .then(userObj => {
        console.log(userObj);
        logoutNavBarUpdate();

    })
}

// Updates NavBar after logging in
function createLoggedInElements(user) {
    loginForm.remove();

    let newItem = document.createElement("li");
    newItem.setAttribute("class", "nav-item");
    newItem.id = "session-username";

    let aUser = document.createElement("a");
    aUser.setAttribute("class", "nav-link");
    aUser.innerText = `${user['username']}`
    newItem.appendChild(aUser);

    navBar.appendChild(newItem);
    createLogOutButton(user);
}

function createLogOutButton(user) {
    let logOutButton = document.createElement("button");
    logOutButton.id = "logout";
    logOutButton.innerText = "Logout";
    logOutButton.setAttribute("class", "navbar-right");
    addLogoutEvent(logOutButton, user)

    navBar.appendChild(logOutButton);

}

function addLogoutEvent(button, user) {
    button.addEventListener("click", event => {
        logoutFetch(user);
    })
}

function logoutNavBarUpdate() {
    let sessionUserName = document.getElementById("session-username");
    let logOut = document.getElementById("logout");

    navBar.removeChild(sessionUserName);
    navBar.removeChild(logOut);

    navBarDiv.appendChild(form);
    loginInput.value = "";
}

loginButton.addEventListener("click", event => {
    event.preventDefault();
    sessionFetch();
    startButton.disabled = false
})

