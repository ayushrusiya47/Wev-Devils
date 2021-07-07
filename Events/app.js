// "use strict"
const imgUrls = [
    "https://wallpapercave.com/wp/wp5549076.jpg",
    "https://i.pinimg.com/originals/0d/82/90/0d82900cda50e3aa00e94203635d74ae.jpg",
    "https://images.hdqwalls.com/download/black-panther-4k-minimalism-2020-gd-1920x1080.jpg",
    "pexels-pixabay-35888.jpg",
  ];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightgreen" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`;

  const dataUrls = {
    status: "https://web-devil.herokuapp.com/event/status",
    openStatus: "https://web-devil.herokuapp.com/event/openStatus",
    register: "https://web-devil.herokuapp.com/event/register",
    unregister: "https://web-devil.herokuapp.com/event/unregister",
    registerAll: "https://web-devil.herokuapp.com/event/registerAll",
    unregisterAll: "https://web-devil.herokuapp.com/event/unregisterAll",
    getCode: "https://web-devil.herokuapp.com/userData/changeCode"
  };
  var token = localStorage.getItem("jwt");
  //BackUpdate 1, URLs for fetching data and token extraction
  // For session managment
  window.addEventListener("load", () => {
    for(let i=0;i<5;i++){ document.querySelector(`.s-${i+1}`).style.display="none";}
    for(let i=0;i<5;i++){ document.querySelector(`.f-${i+1}`).style.display="none";}
    if (token) {
      console.log("test1"); //!@shimkhar case: user signed in, make changes accordingly like remove signin, signup butttons add signout etc.
      document.querySelector(".s-1").style.display="block";
      document.querySelector(".f-1").style.display="block";
      document.querySelector(".f-3").style.display="block";
      document.querySelector(".s-3").style.display="block";
      document.querySelector(".f-5").style.display="block";
      document.querySelector(".s-5").style.display="block";

       
      
    } else {
      console.log("test2"); //!@shimkhar case: user not signed in, make changes accordingly
      document.querySelector(".s-1").style.display="block";
      document.querySelector(".f-1").style.display="block";
      document.querySelector(".f-2").style.display="block";
      document.querySelector(".s-2").style.display="block";
      document.querySelector(".f-4").style.display="block";
      document.querySelector(".s-4").style.display="block";
      
    
    }
  }); //BackUpdate 1, For session management

  let logout = document.querySelector(".logout");
  logout.addEventListener("click", () => {
    localStorage.setItem("jwt", "");
    location.reload();
  }); 
  let log_out = document.querySelector(".log-out");
  log_out.addEventListener("click", () => {
    localStorage.setItem("jwt", "");
    location.reload();
  }); //all this is addon is done by Shikhar
  // for session management



  for(let i=0;i<4;i++)
  {
    document.querySelector(`.c-${i+1}`).display="none";
  }
 let regStatus;
  let opStatus;
  window.addEventListener("load", () => {
    fetch(dataUrls.status, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        regStatus = data; // Registration Status
      });
    fetch(dataUrls.openStatus, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        opStatus = data; // Open Status
      })
      .then(() => {
  
         console.log(opStatus, regStatus);
        let btn1=document.querySelector("#btn-1");
        let btn2=document.querySelector("#btn-2");
        let btn3=document.querySelector("#btn-3");
        let btn4=document.querySelector("#btn-4");
        let d1=document.querySelector(".del-1");
        let d2=document.querySelector(".del-2");
        let d3=document.querySelector(".del-3");
        let btnarr=[]; let ctr=0;
        for(let i=0;i<4;i++){btnarr.push(document.querySelector(`#btn-${i+1}`))}
        let regst=[];
        let opst=[];
        for (let [key, value] of Object.entries(regStatus)){regst.push(value)}
        for (let [key, value] of Object.entries(opStatus)){opst.push(value)}
        let finalbtn=document.querySelector(".final-register");
        let unregbtn=document.querySelector(".final-unregister");
        for (let [key, value] of Object.entries(opStatus)) {
           if(!value&&ctr<4)
           {  
             btnarr[ctr].innerHTML="Closed";
             document.querySelector(`.c-${ctr+1}`).style.display="block";
           
            
           }
           
           btnarr.forEach(function(elem,ptr) {
            elem.addEventListener("click", function() {
              d1.style.display="none";
              d2.style.display="none";
              d3.style.display="none";
              unregbtn.style.display="none";
              if(!opst[ptr]){
                d2.style.display="block";
              }
            if(regst[ptr]){
              d1.style.display="block";
              unregbtn.style.display="block";
              finalbtn.innerHTML=`${svg} Registered`;
              unregbtn.addEventListener("click",()=>{
                fetch(dataUrls.unregister, {    //Swap register with unregister for unregistering
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ event: `e${ptr+1}` }),    //Swap e1 with e2,e3,e4 or e5 for registering/unregistering them
  }); console.log("click");
  setTimeout(() => {
    location.reload();
  }, 2000);
             });
            }
            else{
              finalbtn.innerHTML=`Register`;
              finalbtn.addEventListener("click",()=>{
                fetch(dataUrls.register, {    //Swap register with unregister for unregistering
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ event: `e${ptr+1}` }),    //Swap e1 with e2,e3,e4 or e5 for registering/unregistering them
  }); console.log("click");
  setTimeout(() => {
    location.reload();
  }, 2000);
              });
            }
            });
        });
            
           ctr++;
        }
       
      //event of being registered or not
        //!@shimkhar regStatus have array of registration status and opStatus have opening status. Accordingly adjust the events with registered, unregistered and cancelled. ** Registration status of event before cancel is also available.
      });
  }); //BackUpdate 2, Getting registration status and open status
 
  // fetch(dataUrls.register, {    //Swap register with unregister for unregistering
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: token,
  //   },
  //   body: JSON.stringify({ event: "e1" }),    //Swap e1 with e2,e3,e4 or e5 for registering/unregistering them
  // });
  //BackUpdate 3 , for registering and unregistering from events
  //!@shimkhar , For registration and unregistration of events modify the above code accordingly and put inside callback in eventlisteners

















//!Do nothing here

// fetch(dataUrls.status, {
//     method: "GET",
//     headers: {
//       authorization: token,
//     },
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     var code = data.code; 
//   });

// fetch(dataUrls.changeCode, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: token,
//     },
//     body: JSON.stringify({ code: 1 }),
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     token = data.token; // Registration Status
//     localStorage.setItem("jwt", token);
//   });

let arr=[];
for(let i=0;i<7;i++)
{
    arr.push(document.querySelector( `.img${i+1}`));
    console.log(arr[i]);
    arr[i].style.display="none";
     
}
let i=0;
console.log(arr);
setInterval(perform,5000);
function perform(){
 
    for(let j=0;j<7;j++)
{
    
    arr[j].style.display="none";
    arr[j].classList.remove("enter");
    arr[j].classList.remove("leave");
    
}
  
arr[i%7].classList.add("leave");
arr[(i+1)%7].classList.add("enter");
arr[i%7].style.display="block";
arr[(i+1)%7].style.display="block";
// change in code for pause and play
let overlay=[];
let index=0;
for(let i=0;i<4;i++)
{
    overlay.push(document.querySelector(`#btn-${i+1}`));
    overlay[i].addEventListener("click",()=>{document.querySelector(".overlay").style.display="block";});
    overlay[i].addEventListener("click",()=>{
     
        document.querySelector(".overlay").style.backgroundImage=`url("${imgUrls[i]}")`;
    
    });
    
}

document.querySelector(".overlay").addEventListener("click",()=>{
  if(!ticketElm.classList.contains("stop")){
    document.querySelector(".overlay").style.display="none";
  }
})
//change in code for pause and play
setTimeout(()=>{
     
    arr[i%7].classList.remove("leave");
    
    arr[(i+1)%7].classList.remove("enter");
},4000);
i++;

}
document.querySelector(".home").addEventListener("click",()=>{location.href="../index.html"});
document.querySelector(".homie").addEventListener("click",()=>{location.href="../index.html"});
document.querySelector(".sign-up").addEventListener("click",()=>{
    location.href="../Signup/signup.html";
   });
   document.querySelector(".signup").addEventListener("click",()=>{
    location.href="../Signup/signup.html";
   });
   document.querySelector(".sign-in").addEventListener("click",()=>{
    location.href="../Signin/signin.html";
   });
   document.querySelector(".signin").addEventListener("click",()=>{
    location.href="../Signin/signin.html";
   });

   document.querySelector(".profile").addEventListener("click",()=>{
    location.href="../user_profile/userprofile.html";
   });
   document.querySelector(".user-profile").addEventListener("click",()=>{
    location.href="../user_profile/userprofile.html";
   });
 

document.querySelector(".dropdown").addEventListener("click",()=>{
    document.querySelector(".overlay2").style.display="block";
});
document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector(".overlay2").style.display="none";
});
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 3px solid lightgreen}";
    document.body.appendChild(css);
};
const ticketElm = document.getElementById('ticket');
const { x, y, width, height } = ticketElm.getBoundingClientRect();
const centerPoint = { x: x + width / 2, y: y + height / 2 };
 
ticketElm.addEventListener('mousemove', (e) => {
  const degreeX = (e.clientY - centerPoint.y) * 0.008;
  const degreeY = (e.clientX - centerPoint.x) * -0.008;
  ticketElm.classList.add("stop");
  ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
});
ticketElm.addEventListener("mouseleave",()=>{
  ticketElm.classList.remove("stop");

  ticketElm.style.transform = `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg)`;
})
AOS.init();
 
