// "use strict"
const body = document.querySelector('body');
console.log(body);
const Url = "http://localhost:8000"
const signUpForm = document.querySelector(".form");
window.addEventListener("resize", resize_blur);
function resize_blur() {
    body.style.filter = "blur(4px)";
    setTimeout(restore, 200);

}
function restore() {
    body.style.filter = "blur(0px)";
}
// facing a issue here
// signUpForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const email = document.querySelector('#email').value
//     const name = document.querySelector('#username').value
//     const password = document.querySelector('#password').value
//     const confirmPassword = document.querySelector('#confirm-password').value
//     const checkbox = document.querySelector('#check-box').value
//     console.log(email, name, password);
//     if (checkbox === false) {
//         alert("please fill the checkbox");

//     }
//     if (password !== confirmPassword) {
//         alert("password is not matching");
//         return;
//     }
//     fetch('${Url}/auth/signup', {
//         method: "POST",
//         headers: {
//             'Content-Type': "application/json",

//         },
//         body: JSON.stringify({ name, email, password }),

//     }).then((res) => res.json())
//         .then((data) => {
//             const { token } = data;
//             if (token) {
//                 localStorage.setItem("jwt", token);
//             } else {
//                 alert("sign Again");
//             }
//         })
// });

