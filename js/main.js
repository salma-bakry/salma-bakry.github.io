document.documentElement.classList.add('js');
const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
const closeMenu=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')};
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(o))});
menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
const btns=document.querySelectorAll('.filters button');
btns.forEach(b=>b.addEventListener('click',()=>{
  btns.forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',String(x===b))});
  const f=b.dataset.f;
  document.querySelectorAll('.proj').forEach(p=>{p.hidden=!(f==='all'||p.dataset.c.split(' ').includes(f))});
}));
