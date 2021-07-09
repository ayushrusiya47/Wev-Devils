"use strict"
document.querySelector('form').addEventListener('submit',(e)=>{
e.preventDefault();
const e1=document.querySelector('#email').value;
if(e1=="")
{
    document.querySelector('.error').style.display='block';
}
else{
    document.querySelector('.error').style.display='none';
    if(email){

    document.querySelector('form').submit();
    location.href='./../../Pages/editpassword/edit.html'

    }
}
});