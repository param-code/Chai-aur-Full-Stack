const body = document.querySelector('body');
const button = document.querySelectorAll('.button');
button.forEach(button=>button.addEventListener('click',(e)=>body.style.backgroundColor = e.target.id));