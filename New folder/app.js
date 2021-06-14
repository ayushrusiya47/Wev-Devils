let x=0;

window.addEventListener("mousewheel",nonsense);
function nonsense(e){
    console.log(e.deltaY);

   const box=document.querySelector('.box');
   x=x+e.deltaY;
   if(x<0)
   {
       x=0;
   }
  
   box.style.transition=`all 0.1s ease-out`
   box.style.transform=`translateX(${x*5/4}px)`
}