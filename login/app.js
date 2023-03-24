const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input").value;

const loginButton = loginForm.querySelector("button");





// function onlogin(){

//     return(
        
//         loginInput.value
//     )

// }

// loginButton.addEventListener("click" , onlogin);


function printName() {
    const loginInput = loginForm.querySelector("input").value;
    
    document.getElementById("result").innerText = loginInput
  
}
