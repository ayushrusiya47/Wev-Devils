"use strict"
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