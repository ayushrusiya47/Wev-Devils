window.addEventListener(("load") , ()=>{
    if(localStorage.getItem("jwt").length === 0 ||  window.localStorage.length===0){
        location.href="../../../index.html";
    }
})
const div1=document.querySelector(".s1");
div1.addEventListener("click" ,()=>{
    location.href="./table/index.html"
    
} );
const div2=document.querySelector(".s2");
div2.addEventListener("click" ,()=>{
    location.href="./count/index.html"
    
} )
const div3=document.querySelector(".s3");
div3.addEventListener("click" ,()=>{
    location.href="./close event/index.html"
    
} )
const div4=document.querySelector(".s4");
div4.addEventListener("click" ,()=>{
    location.href="./open\ \ event/index.html"
    
    
} )
const logout=document.querySelector(".logout");
logout.addEventListener("click" ,()=>{
    localStorage.setItem("jwt", "");
    location.href="../../index.html"
    
    
})