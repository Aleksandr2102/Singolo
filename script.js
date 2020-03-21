//Header. Кнопки

let menu = document.getElementById('menu');

 menu.addEventListener('click', (event) => { 
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//Portfolio. Взаимодействие с картинками     


let pictures = document.getElementById('portfolioPicture');
  pictures.addEventListener('click', (event) => {
  pictures.querySelectorAll('img').forEach(el => el.classList.remove('active-picture'));
  event.target.classList.add('active-picture');
});

//Portfolio. Кнопки

let portfolio = document.getElementById('buttonWrapper');

 portfolio.addEventListener('click', (event) => { 
    portfolio.querySelectorAll('button').forEach(el => el.classList.remove('active-btn'));
    event.target.classList.add('active-btn');
});


//Header, scroll

document.addEventListener('scroll', onScroll);
function onScroll(event) {
  let curPos = window.scrollY + 95;
  let sections = document.getElementById('main-content').querySelectorAll('section');
  let links = document.querySelectorAll('#menu a');
  
  sections.forEach((el) => {
    if(el.offsetTop < curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active')
        }
      })
    }
  })
}

//Активация экранов телефонов

const layerVert = document.getElementById('layer1');
const iphoneItemsVert = document.getElementsByClassName('img-wrapper1');
for(let i = 0; i < iphoneVert.length; i++) {
  const iphoneVert = iphoneItemsVert[i];
  iphoneVert.addEventListener('click', function screen(layer) {
  if(layerVert.style.display === "block") {
    layerVert.style.display = "none";
  } else {
    layerVert.style.display = "block";
  }
});

 

    
    
