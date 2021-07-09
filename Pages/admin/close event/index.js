window.addEventListener(("load") , ()=>{
    if(localStorage.getItem("jwt").length === 0 || window.localStorage.length===0){
        location.href="../../../index.html";
    }
})
const event1=document.querySelector(".s1");
const event2=document.querySelector(".s2");
const event3=document.querySelector(".s3");
const event4=document.querySelector(".s4");
const event5=document.querySelector(".s5");
event1.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventClose" ,{
        method: "put",
        headers: {

            "Authorization": localstorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e1" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully closed event 1");
        }
        else{
            alert("facing error ");
        }
    });

})
event2.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventClose" ,{
        method: "put",
        headers: {
            "Authorization": localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e2" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully closed event 2");
        }
        else{
            alert("facing error ");
        }
    });

})
event3.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventClose" ,{
        method: "put",
        headers: {
            "Authorization":  localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e3" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully closed event 3");
        }
        else{
            alert("facing error ");
        }
    });

})
event4.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventClose" ,{
        method: "put",
        headers: {
            "Authorization":  localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e4" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully closed event 4");
        }
        else{
            alert("facing error ");
        }
    });

})
