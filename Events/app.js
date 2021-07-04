// "use strict"
const imgUrls = [
  "https://wallpapercave.com/wp/wp5549076.jpg",
  "https://i.pinimg.com/originals/0d/82/90/0d82900cda50e3aa00e94203635d74ae.jpg",
  "https://images.hdqwalls.com/download/black-panther-4k-minimalism-2020-gd-1920x1080.jpg",
  "pexels-pixabay-35888.jpg",
];

const dataUrls = {
  status: "http://localhost:8000/event/status",
  openStatus: "http://localhost:8000/event/openStatus",
  register: "http://localhost:8000/event/register",
  unregister: "http://localhost:8000/event/unregister",
  registerAll: "http://localhost:8000/event/registerAll",
  unregisterAll: "http://localhost:8000/event/unregisterAll",
};
const token = localStorage.getItem("jwt");
//BackUpdate 1, URLs for fetching data and token extraction

var regStatus;
var opStatus;
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
      //@shimkhar regStatus have array of registration status and opStatus have opening status. Accordingly adjust the events with registered, unregistered and cancelled. ** Registration status of event before cancel is also available.
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
//@shimkhar , For registration and unregistration of events modify the above code accordingly and put inside callback in eventlisteners

let arr = [];
for (let i = 0; i < 7; i++) {
  arr.push(document.querySelector(`.img${i + 1}`));
  console.log(arr[i]);
  arr[i].style.display = "none";
}
let i = 0;
console.log(arr);
setInterval(perform, 5000);
function perform() {
  for (let j = 0; j < 7; j++) {
    arr[j].style.display = "none";
    arr[j].classList.remove("enter");
    arr[j].classList.remove("leave");
  }

  arr[i % 7].classList.add("leave");
  arr[(i + 1) % 7].classList.add("enter");
  arr[i % 7].style.display = "block";
  arr[(i + 1) % 7].style.display = "block";
  // change in code for pause and play
  let overlay = [];
  let index = 0;
  for (let i = 0; i < 4; i++) {
    overlay.push(document.querySelector(`#btn-${i + 1}`));
    overlay[i].addEventListener("click", () => {
      document.querySelector(".overlay").style.display = "block";
    });
    overlay[i].addEventListener("click", () => {
      document.querySelector(
        ".overlay"
      ).style.backgroundImage = `url("${imgUrls[i]}")`;
    });
  }

  document.querySelector(".event-detail").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
  });
  //change in code for pause and play
  setTimeout(() => {
    arr[i % 7].classList.remove("leave");

    arr[(i + 1) % 7].classList.remove("enter");
  }, 4000);
  i++;
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
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

AOS.init();
