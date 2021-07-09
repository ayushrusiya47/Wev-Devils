window.addEventListener(("load") , ()=>{
    if(localStorage.getItem("jwt").length === 0 ||  window.localStorage.length===0){
        location.href="../../../index.html";
    }
})
const ticketElm = document.getElementById('ticket');
const { x, y, width, height } = ticketElm.getBoundingClientRect();
const centerPoint = { x: x + width / 2, y: y + height / 2 };

window.addEventListener('mousemove', (e) => {
  const degreeX = (e.clientY - centerPoint.y) * 0.008;
  const degreeY = (e.clientX - centerPoint.x) * -0.008;

  ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
});
var t1=0, t2=0, t3=0, t4=0, t5=0;
var tab = document.getElementById("myTable")
function build(data) {

    for (var i = 0; i < data.length; i++) {

        if (data[i].e1 === true) t1++;
        if (data[i].e2 === true) t2++;
        if (data[i].e3 === true) t3++;
        if (data[i].e4 === true) t4++;
        if (data[i].e5 === true) t5++;
    }
    var row = ` <tr>
                <td> ${t1}</td>
                <td> ${t2}</td>
                <td> ${t3}</td>
                <td> ${t4}</td>
                <td> ${t5}</td>
            </tr>`
            tab.innerHTML+=row;
}
fetch('https://web-devil.herokuapp.com/admin/getList', {
    method: "GET",
    headers: {
        "Authorization":localStorage.getItem("jwt"),
    }
}).then((res) => res.json()).then((data) => {
    build(data);

})