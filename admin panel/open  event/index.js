const event1=document.querySelector(".s1");
const event2=document.querySelector(".s2");
const event3=document.querySelector(".s3");
const event4=document.querySelector(".s4");
const event5=document.querySelector(".s5");
event1.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventOpen" ,{
        method: "put",
        headers: {

            "Authorization": localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e1" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully opened event 1");
        }
        else{
            alert("facing error ");
        }
    });

})
event2.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventOpen" ,{
        method: "put",
        headers: {
            "Authorization":localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e2" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully opened event 2");
        }
        else{
            alert("facing error ");
        }
    });

})
event3.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventOpen" ,{
        method: "put",
        headers: {
            "Authorization": localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e3" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully opened event 3");
        }
        else{
            alert("facing error ");
        }
    });

})
event4.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventOpen" ,{
        method: "put",
        headers: {
            "Authorization": localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e4" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully opened event 4");
        }
        else{
            alert("facing error ");
        }
    });

})
event5.addEventListener("click" , ()=>{
    fetch("https://web-devil.herokuapp.com/admin/eventOpen" ,{
        method: "put",
        headers: {
            "Authorization":localStorage.getItem("jwt"),
            "content-type":"application/json"
        } ,
        body: JSON.stringify({ "event":"e5" })
    }).then((res)=>{
        if(res.status===204){
            alert("successfully opened event 5");
        }
        else{
            alert("facing error ");
        }
    });

})