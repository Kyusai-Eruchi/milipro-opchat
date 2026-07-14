const m=document.getElementById('menu');document.getElementById('menuBtn').onclick=()=>m.classList.toggle('open');
const b=document.body,t=document.getElementById('themeBtn');
if(localStorage.theme==='light')b.classList.add('light');
t.onclick=()=>{b.classList.toggle('light');localStorage.theme=b.classList.contains('light')?'light':'dark';};