"use strict"

// const myarray = [{ 'name': 'sanket', 'email': 'sanket@gmail.com', 'status_E1': 'registered', 'status_E2': 'registered', 'status_E3': 'registered', 'status_E4': 'registered', 'status_E5': 'registered' },
// { 'name': 'sanket', 'email': 'sanket@gmail.com', 'status_E1': 'registered', 'status_E2': 'registered', 'status_E3': 'registered', 'status_E4': 'registered', 'status_E5': 'registered' },
// { 'name': 'sanket', 'email': 'sanket@gmail.com', 'status_E1': 'registered', 'status_E2': 'registered', 'status_E3': 'registered', 'status_E4': 'registered', 'status_E5': 'registered' },
// { 'name': 'sanket', 'email': 'sanket@gmail.com', 'status_E1': 'registered', 'status_E2': 'registered', 'status_E3': 'registered', 'status_E4': 'registered', 'status_E5': 'registered' },
// { 'name': 'sanket', 'email': 'sanket@gmail.com', 'status_E1': 'registered', 'status_E2': 'registered', 'status_E3': 'registered', 'status_E4': 'registered', 'status_E5': 'registered' }
// ]


var tab = document.getElementById("myTable")
function build(data) {

    for (var i = 0; i < data.length; i++) {
        var row = `
            <tr>
                <td> ${i+1}</td>
                <td> ${data[i].username}</>
                <td> ${data[i].email}</td>
                <td> ${data[i].e1}</td>
                <td> ${data[i].e2}</td>
                <td> ${data[i].e3}</td>
                <td> ${data[i].e4}</td>
                <td> ${data[i].e5}</td>

            </tr>`
        tab.innerHTML += row;
    }
}
fetch('https://web-devil.herokuapp.com/admin/getList', {
    method: "GET",
    headers: {
        "Authorization": localStorage.getItem("jwt"),
    }
    
}).then((res) => res.json()).then((data) => {
    build(data);

})
console.log(localStorage.getItem("jwt"));
