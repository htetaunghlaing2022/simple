const toggle=document.querySelector(".toggle");
const navbar=document.querySelector(".navbar-menu");
const icon=document.querySelector(".icon");

toggle.addEventListener("click", function(){
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
})


const nav=document.querySelector("nav");
  window.addEventListener("scroll",function(){
      if(window.scrollY >=656){
          nav.style.backgroundColor="#ddd"
      }else{
          nav.style,backgroundColor=""
      }

      
  })