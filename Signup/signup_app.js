"use strict";
const body = document.querySelector("body");
console.log(body);
window.addEventListener("resize", resize_blur);
function resize_blur() {
  body.style.filter = "blur(4px)";
  setTimeout(restore, 200);
}
function restore() {
  body.style.filter = "blur(0px)";
}

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  location.href = "../index.html";
});
document.querySelector(".homie").addEventListener("click", () => {
  location.href = "../index.html";
});
const sign_inbtn = document.querySelector(".sign-in");
// console.log(sign_inbtn);
sign_inbtn.addEventListener("click", function () {
  location.href = "../SignIn/signIn.html";
});
document.querySelector(".signin").addEventListener("click", function () {
  location.href = "../SignIn/signIn.html";
});

document.querySelector(".profile").addEventListener("click", () => {
  location.href = "../user_profile/userprofile.html";
});
document.querySelector(".user-profile").addEventListener("click", () => {
  location.href = "../user_profile/userprofile.html";
});
document.querySelector(".dropdown").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
});

const Url = "http://localhost:8000";
let signUpForm = document.querySelector(".form");
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  const checkbox = document.querySelector("#check-box").value;
  // console.log(email, name, password);
  if (checkbox === false) {
    alert("please fill the checkbox");
  }
  if (password !== confirmPassword) {
    alert("password is not matching");
    return;
  }
  // have to change this after deploying backend
  fetch("http://localhost:8000/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;
      if (token) {
        // setting the token in web local storage
        localStorage.setItem("jwt", token);
        location.href = "../index.html";
      } else {
        alert("facing error please try agian");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
