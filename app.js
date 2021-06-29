"use strict"
const body=document.querySelector('body');
console.log(body);
// const Url = "http://localhost:8000"
window.addEventListener("resize",resize_blur);
function resize_blur()
{
    body.style.filter="blur(4px)";
    setTimeout(restore,500);
  
}
function restore(){
    body.style.filter="blur(0px)";
}
const sign_up=document.querySelector(".sign-up");
sign_up.addEventListener("click",()=>{
    location.href="./Signup/signup.html"
})
document.querySelector(".signup").addEventListener("click",()=>{
    location.href="./Signup/signup.html"
})
 
const sign_inbtn=document.querySelector(".sign-in");
 
document.querySelector(".signin").addEventListener("click",function(){
    location.href="./SignIn/signIn.html"
});
sign_inbtn.addEventListener("click",function(){
    location.href="./SignIn/signIn.html"
});
 
 const user=document.querySelector(".user-profile");
  
 user.addEventListener("click",()=>{
     location.href="./user_profile/userprofile.html";
 })
 document.querySelector(".profile").addEventListener("click",()=>{
    location.href="./user_profile/userprofile.html";
})
 const url=`https://cdn.dribbble.com/users/1516344/screenshots/6617658/17_liquidbackgrounds_2_1600x1200_1_4x.jpg`
 setTimeout(() => {
    document.body.style.backgroundImage=`url(${url})`;
   
 }, 3500); 
 
document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector(".overlay").style.display="none";
});
 const overlay=document.querySelector(".overlay");
 document.querySelector(".dropdown").addEventListener("click",()=>{
     overlay.style.display="block";
    
 });

