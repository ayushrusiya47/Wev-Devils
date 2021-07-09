"use strict"
let check=document.querySelector('#showpassword');
check.addEventListener('click',()=>{
    console.log(check.checked);
   if(check.checked==true)
   {
       document.querySelector('#newpassword').setAttribute('type','text');
       document.querySelector('#confirmpassword').setAttribute('type','text');
   }
   else{
    document.querySelector('#newpassword').setAttribute('type','password');
    document.querySelector('#confirmpassword').setAttribute('type','password');
   }
})
function checker(){
    const p1=document.querySelector('#newpassword').value;
    const p2=document.querySelector('#confirmpassword').value;
    if(p1!=p2)
    {
       document.querySelector('.error').innerText='Password do not match'
       document.querySelector('.error').style.display='block';
    }
    else if(p1==""||p2=="")
    {
        document.querySelector('.error').innerText='Password cannot be empty'
        document.querySelector('.error').style.display='block';
    }
    else{
        document.querySelector('.error').style.display='none';
    }
}
document.querySelector('form').addEventListener('submit',(e)=>{

 e.preventDefault();
checker();
if( document.querySelector('.error').style.display==='none')
{    //fetch to change password;
    document.querySelector('form').submit();
    console.log('clicked');
    location.href = "./../../Pages/SignIn/signIn.html";
}

})
document.querySelector('.has').addEventListener('click',()=>{
  location.href = "./../../Pages/SignIn/signIn.html";

});
