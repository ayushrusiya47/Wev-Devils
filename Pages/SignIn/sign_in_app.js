"use strict"
const url = "https://web-devil.herokuapp.com"
const body = document.querySelector('body');
console.log(body);
window.addEventListener("resize", resize_blur);

function resize_blur() {
    body.style.filter = "blur(4px)";
    setTimeout(restore, 500);

}

function restore() {
    body.style.filter = "blur(0px)";
}
document.querySelector(".homie").addEventListener("click", () => {
    location.href = "../../index.html"
});
document.querySelector(".sign-up-has-account").addEventListener("click", () => {
    location.href = "./../../Pages/Signup/signup.html";
});
document.querySelector(".sign-up").addEventListener("click", () => {
    location.href = "./../../Pages/Signup/signup.html";
});
document.querySelector(".signup").addEventListener("click", () => {
    location.href = "./../../Pages/Signup/signup.html";
});

let check=document.querySelector('#showpassword');
check.addEventListener('click',()=>{
    console.log(check.checked);
   if(check.checked==true)
   {
       document.querySelector('#password').setAttribute('type','text');
 
   }
   else{
    document.querySelector('#password').setAttribute('type','password');
     
   }
})
document.querySelector(".events").addEventListener("click", () => {
    location.href = "./../../Pages/Events/events.html";
});
document.querySelector(".event").addEventListener("click", () => {
    location.href = "./../../Pages/Events/events.html";
});
document.querySelector(".dropdown").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
});

const signIn = document.querySelector(".form");

signIn.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fetch('https://web-devil.herokuapp.com/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",

            },
            body: JSON.stringify({
                email,
                password
            }),

        }).then((res) => res.json())
        .then((data) => {
            const {
                token
            } = data;
            if (token) {
                console.log("signed in succesfully");
                console.log("ok token set")
                localStorage.setItem("jwt", token);
                location.href = "../../index.html";
            } else {
                alert("facing some error , might the user already exists");
            }
        })
});