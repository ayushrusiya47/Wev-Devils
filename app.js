"use strict"
const body = document.querySelector('body');
const Url = "http://localhost:8000"
console.log(body);
window.addEventListener("resize", resize_blur);
function resize_blur() {
    body.style.filter = "blur(4px)";
    setTimeout(restore, 500);

}
function restore() {
    body.style.filter = "blur(0px)";
}
const sign_up = document.querySelector(".sign-up");
sign_up.addEventListener("click", () => {
    location.href = "./Signup/signup.html"
})
const sign_inbtn = document.querySelector(".sign-in");

sign_inbtn.addEventListener("click", function () {
    location.href = "./SignIn/signIn.html"
});
const user = document.querySelector(".user-profile");
user.addEventListener("click", () => {
    location.href = "./user_profile/userprofile.html";
})

setTimeout(() => {
    document.body.style.backgroundImage = "none";

}, 2500);