"use strict";
let token = localStorage.getItem("jwt");
// if (!token) {
//   location.href = "../../index.html";
// }
//information of events
const info = [
  "The Owl City",
  "Graphic Design contest",
  "Photoediting",
  "PhotoGraphy",
];

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};
//information of events
const body = document.querySelector("body");
const html = document.querySelector("html");
console.log(body);
window.addEventListener("resize", resize_blur);
function resize_blur() {
  body.style.filter = "blur(4px)";
  setTimeout(restore, 200);
}
function restore() {
  body.style.filter = "blur(0px)";
}
const imgurls = [
  "./../../public/event-images/1.png",
  "./../../public/event-images/2.png",
  "./../../public/event-images/3.png",
  "./../../public/event-images/4.png",
];
const dataUrls = {
  status: "https://web-devil.herokuapp.com/event/status",
  openStatus: "https://web-devil.herokuapp.com/event/openStatus",
  register: "https://web-devil.herokuapp.com/event/register",
  unregister: "https://web-devil.herokuapp.com/event/unregister",
  registerAll: "https://web-devil.herokuapp.com/event/registerAll",
  unregisterAll: "https://web-devil.herokuapp.com/event/unregisterAll",
  getCode: "https://web-devil.herokuapp.com/userData/getData",
  changeCode: "https://web-devil.herokuapp.com/userData/changeCode",
};

let regStatus;
let opStatus;
window.addEventListener("load", async () => {
  const res = await fetch(dataUrls.status, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });
  const data = await res.json();

  regStatus = data; // Registration Status

  const res2 = await fetch(dataUrls.openStatus, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });
  const data2 = await res2.json();

  opStatus = data2; // Open Status

  console.log(regStatus, opStatus);
  let regst = [];
  let opst = [];
  let img = [];
  let events = [];
  let card = document.querySelector(".card0");
  for (let [key, value] of Object.entries(regStatus)) {
    regst.push(value);
  }
  for (let [key, value] of Object.entries(opStatus)) {
    opst.push(value);
  }
  console.log(opst, regst);
  for (let i = 0; i < 4; i++) {
    if (regst[i] == true) {
      img.push(imgurls[i]);
      events.push(i + 1);
    }
  }
  console.log(events);
  console.log(img);
  let ptr = 0;

  if (img.length > 0) {
    if (ptr >= img.length) {
      ptr = 0;
    }
    card.addEventListener("mouseenter", () => {
      card.classList.add("pause");

      document.querySelector(".title").style.display = "block";
   
      document.querySelector(".time").style.display = "block";
      document.querySelector(".organizers").style.display = "block";
    });
  
    card.addEventListener("mouseleave", () => {
      card.classList.remove("pause");
      document.querySelector(".title").style.display = "none";
      document.querySelector(".time").style.display = "none";
      document.querySelector(".organizers").style.display = "none";
    });
    document.querySelector(".unregister").style.display = "block";
    setInterval(() => {
  if(!card.classList.contains("pause"))  {  document.querySelector(".heading").innerHTML = info[events[ptr] - 1];
      console.log(info[events[ptr] - 1]);
      let changer=events[ptr];
      console.log(changer,"changer");
      document.querySelector(".unregister").addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        console.log('click'); 
        fetch(dataUrls.unregister, {
          //Swap register with unregister for unregistering
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({
            event: `e${changer}`,
          }), //Swap e1 with e2,e3,e4 or e5 for registering/unregistering them
        });
        setTimeout(()=>{location.reload()},2000);
      }
      );}

      if (!card.classList.contains("pause")) {
        console.log('ptr',ptr);
        card.style.backgroundImage = `url("${img[ptr]}")`;
      }
      ptr++;
      if (ptr >= img.length) {
        ptr = 0;
      }
    }, 3500);
  } else {
    document.querySelector(".unregister").style.display = "none";
    card.style.backgroundImage = `url("./../../public/event-images/Default.jpg")`;
  }
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  location.href = " ../../index.html";
});
document.querySelector(".homie").addEventListener("click", () => {
  location.href = "../../index.html";
});
document.querySelector(".events").addEventListener("click", () => {
  location.href = "./../../Pages/Events/events.html";
});
document.querySelector(".event-location").addEventListener("click", () => {
  location.href = "./../../Pages/Events/events.html";
});
document.querySelector(".dropdown").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
});
document.querySelector('.changepwd').addEventListener('click',()=>{
  location.href='./../../Pages/editpassword/edit.html';

})
document.querySelector('.change').addEventListener('click',()=>{
  location.href='./../../Pages/editpassword/edit.html';
})
let code;
let n;
let email;
document.querySelector(".edit").addEventListener("click", () => {
  document.querySelector(".edit-image").style.display = "block";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".edit-image").style.display = "none";
});
fetch(dataUrls.getCode, {
  method: "GET",
  headers: {
    authorization: token,
  },
})
  .then((res) => res.json())
  .then((data) => {
    code = data.code;
    n = data.name;
    email = data.email;
    document.querySelector(".name").innerText = n;
    document.querySelector(".username").innerText = n;
    document.querySelector(".email").innerText = email;
    console.log(code, n, email);
    document.querySelector(
      ".user-id-pic"
    ).style.backgroundImage = `url("./../../public/avatars/${
      Number(code) + 1
    }.gif")`;
    const userimg = [];
    for (let i = 0; i < 7; i++) {
      userimg.push(`./../../public/avatars/${i + 1}.gif`);
    }
    let image = document.querySelector(".images");
    image.style.backgroundImage = `url("${userimg[Number(code)]}")`;
    let it = Number(code);
    document.querySelector(".previous").addEventListener("click", () => {
      it = Math.max(it - 1, 0);
      image.style.backgroundImage = `url("${userimg[it]}")`;
    });
    document.querySelector(".next").addEventListener("click", () => {
      it += 1;
      image.style.backgroundImage = `url("${userimg[it % 7]}")`;
    });
    document.querySelector("#select").addEventListener("click", () => {
      {
        fetch(dataUrls.changeCode, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({ code: it % 7 }),
        })
          
          .then(() => {
          
            // token = data.token; // Registration Status
            localStorage.setItem("jwt", token);
            setTimeout(() => {
              location.reload();
            }, 2000);
            console.log("done");
           
          });
      }
    });
  });


