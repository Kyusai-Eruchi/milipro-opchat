const sections=document.querySelectorAll(".content");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

observer.observe(section);

});

const menuToggle=document.getElementById("menu-toggle");

const nav=document.getElementById("nav");

const overlay=document.getElementById("overlay");

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("active");

nav.classList.toggle("active");

overlay.classList.toggle("active");

});

/* 背景クリックで閉じる */

overlay.addEventListener("click",()=>{

menuToggle.classList.remove("active");

nav.classList.remove("active");

overlay.classList.remove("active");

});
