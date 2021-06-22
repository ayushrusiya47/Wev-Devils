"use strict"
// const url = "http://localhost:8000"
const body = document.querySelector('body');
console.log(body);
window.addEventListener("resize", resize_blur);
function resize_blur() {
    body.style.filter = "blur(4px)";
    setTimeout(restore, 200);

}
function restore() {
    body.style.filter = "blur(0px)";
}
const signIn = document.querySelector(".form");

signIn.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fetch('http://localhost:8000/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': "application/json",

        },
        body: JSON.stringify({ email, password }),

    }).then((res) => res.json())
        .then((data) => {
            const { token } = data;
            if (token) {
                console.log("signed in succesfully");
                console.log("ok token set")
                localStorage.setItem("jwt", token);
                location.href = "../index.html";
            } else {
                alert("facing some error , might the user already exists");
            }
        })
});