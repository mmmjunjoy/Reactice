const loginform = document.getElementById("login-form");
const inputs = loginform.querySelector("input");
const buttons = loginform.querySelector("button");

const links = document.querySelector("a");

const greet = document.querySelector("#greeting");

const hiddens = "hidden";
const usernames = "username";

function submit(event){
    event.preventDefault();
    console.log(greet);

    const username = inputs.value;
    localStorage.setItem(usernames,username);
    loginform.classList.add(hiddens);
    paintgreeting(username);

}

// function clicks(event){
//     event.preventDefault();
//     console.dir(event);
   
// }

function paintgreeting(usernamed){
    greet.innerText = `hello ${usernamed}`;
    greet.classList.remove(hiddens);
}



const saved = localStorage.getItem(usernames);

if (saved === null){
    loginform.classList.remove(hiddens);
    loginform.addEventListener("submit",submit);
    
}else{
    paintgreeting(saved);

}