

const body = document.querySelector('body');
console.log(body);
window.addEventListener("resize", resize_blur);
function resize_blur() {
    body.style.filter = "blur(4px)";
    setTimeout(restore, 500);

}
function restore() {
    body.style.filter = "blur(0px)";
}

const signIn = document.querySelector(".form");

signIn.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email !== "Admin@prospero2.0.com") {
        alert("please enter the email provided for admin");
        
    }
    else {
        fetch('https://web-devil.herokuapp.com/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",

            },
            body: JSON.stringify({ email, password }),

        }).then((res) => res.json())
            .then((data) => {
                const { token } = data;
                if (token) {
                    console.log("signed in succesfully");
                    console.log(token)

                    localStorage.setItem("jwt", token);
                    console.log("ok token set")
                    
                    location.href = "../index.html";
                } else {
                    alert("try with a diferent password or email");
                }
            })
    }
});

