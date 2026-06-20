function toggleMenu(){document.getElementById('menu').classList.toggle('open')}
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
