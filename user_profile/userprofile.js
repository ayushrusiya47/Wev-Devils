"use strict"
const body=document.querySelector('body');
console.log(body);
window.addEventListener("resize",resize_blur);
function resize_blur()
{
    body.style.filter="blur(4px)";
    setTimeout(restore,200);
  
}
function restore(){
    body.style.filter="blur(0px)";
}

const card=document.querySelector(".card");
card.addEventListener("mouseenter",()=>{
let title=document.querySelector(".title");
title.style.opacity=1;
document.querySelector(".card0").classList.add("pause");
});
card.addEventListener("mouseleave",()=>{
    let title=document.querySelector(".title");
    title.style.opacity=0;
    document.querySelector(".card0").classList.remove("pause");
    });
    //event card display change pranali
    const events=["The Score Band", "Hanging Pawns"];
    const timings=["9:30 AM", "9:30 PM"];
    const id=["00912","02342"];
    const eventType=["Band","Chess"];
    const loc=["ABV-Park","TOWN HALL"];
    const cardlist=["../New folder/15889fd06fa86bc9708a8d16b3c5b34c.1000x1000x1.jpg","../New folder/ericroseman.jpg"];
  let i=0;
  const list1=document.querySelector(".left");
  const list2=document.querySelector(".right");
  let card0=document.querySelector(".card0");
   list1.addEventListener("click",()=>{
       i=i+1;
 
       onclickchange(i%2);
   });
   list2.addEventListener("click",()=>{
    i=Math.max(i-1,0);
    onclickchange(i%2);
});
//abstract for registration
// name email id username eventlist:id
// we bring array of eventlist;
// mpp[event1]={{eventHeading:"eventName",             }
//                   timing   :"time of event"} 
//
//
//
//
//http://127.0.0.1:5500/
//

function onclickchange(pos){
    if(!card0.classList.contains("pause"))
    {   console.log("clicked");
          console.log(i);
 
   let event=document.querySelector(".event-heading");
   let timing=document.querySelector(".timingchange");
   let real_id=document.querySelector(".real-id");
   let event_details=document.querySelector(".event-details");
 
   card0.style.backgroundImage="url('"+cardlist[pos]+"')";

  event.innerHTML=events[pos];
  timing.innerHTML="JUNE 25th | "+timings[pos]+" | "+loc[pos];
  real_id.innerHTML="#"+id[pos];
  event_details.innerHTML="<h3><b>Type-</b> " + eventType[pos]+"</h3>";
    
   
   }
}

 

  function backgroundchange(){
     if(!card0.classList.contains("pause"))
     {   console.log("clicked");
           console.log(i);
    let pos=i%2;
    let event=document.querySelector(".event-heading");
    let timing=document.querySelector(".timingchange");
    let real_id=document.querySelector(".real-id");
    let event_details=document.querySelector(".event-details");
  
    card0.style.backgroundImage="url('"+cardlist[pos]+"')";
 
   event.innerHTML=events[pos];
   timing.innerHTML="JUNE 25th | "+timings[pos]+" | "+loc[pos];
   real_id.innerHTML="#"+id[pos];
   event_details.innerHTML="<h3><b>Type-</b> " + eventType[pos]+"</h3>";
    i++;
    
    }
}
   
const home=document.querySelector(".home");
home.addEventListener("click",()=>{
location.href="../index.html";
});
document.querySelector(".homie").addEventListener("click",()=>{
    location.href="../index.html";
})
document.querySelector(".events").addEventListener("click",()=>{
    location.href="../Events/events.html";

})
document.querySelector(".event-location").addEventListener("click",()=>{
    location.href="../Events/events.html";
    
})
document.querySelector(".dropdown").addEventListener("click",()=>{
    document.querySelector(".overlay").style.display="block";
});
document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector(".overlay").style.display="none";
});


   

setInterval(backgroundchange,3000);

// AOS.init();
