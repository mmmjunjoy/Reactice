const loginform = document.getElementById("login-form");
const inputs = loginform.querySelector("input");
const buttons = loginform.querySelector("button");

const links = document.querySelector("a");

const greet = document.querySelector("#greeting");

const hiddens = "hidden";

function submit(event){
    event.preventDefault();
    console.log(greet);

    const username = inputs.value;
    loginform.classList.add(hiddens);
    greeting.innerText = `hello ${username}`;

    
    greeting.classList.remove(hiddens);



}

function clicks(event){
    event.preventDefault();
    console.dir(event);
   
}


loginform.addEventListener("submit",submit);

