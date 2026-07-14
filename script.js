const d=document,b=d.body;
const drawer=d.getElementById('drawer'),ov=d.getElementById('overlay');
menuBtn.onclick=()=>{drawer.classList.toggle('open');ov.classList.toggle('show')}
ov.onclick=()=>{drawer.classList.remove('open');ov.classList.remove('show')}
settingsBtn.onclick=()=>settings.classList.add('show');closeSettings.onclick=()=>settings.classList.remove('show');
if(localStorage.theme==='light')b.classList.add('light');
themeBtn.onclick=()=>{b.classList.toggle('light');localStorage.theme=b.classList.contains('light')?'light':'dark';}
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show'))).observe(document.querySelector('.hero'));
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show'))).observe(el));
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
