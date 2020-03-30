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
  event.stopPropagation();
  event.target.classList.add('active-picture');
});

//Portfolio. Кнопки

let portfolio = document.getElementById('buttonWrapper');

 portfolio.addEventListener('click', (event) => { 
    portfolio.querySelectorAll('button').forEach(el => el.classList.remove('active-button'));
    event.target.classList.add('active-button');
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
for(let i = 0; i < iphoneItemsVert.length; i++) {
  iphoneItemsVert[i].addEventListener('click', function screen(layer1) {
  if(layerVert.style.display === "none") {
    layerVert.style.display = "block";
  } else {
    layerVert.style.display = "none";
  }
});
}

const layerHor = document.getElementById('layer2');
const iphoneItemsHor = document.getElementsByClassName('img-wrapper2');
for(let i = 0; i < iphoneItemsHor.length; i++) {
  iphoneItemsHor[i].addEventListener('click', function screen(layer2) {
  if(layerHor.style.display === "none") {
    layerHor.style.display = "block";
  } else {
    layerHor.style.display = "none";
  }
});
}

 //Portfolio. Переключение табов




//Get a quote

const WINDOW = document.getElementById('modal-window');
const FORM = document.getElementById('form');
const SUBJECT = document.getElementById('subject');
const DESCRIPTION = document.getElementById('description')
const MODALBTN = document.getElementById('modal-btn');

FORM.addEventListener('submit', () => {
  event.preventDefault();
  WINDOW.hidden = false;
  
  if(!SUBJECT.value) {
    document.getElementById('letter-subject').insertAdjacentHTML('beforeend', 'No subject ')
  } else {
    document.getElementById('letter-subject').insertAdjacentHTML('beforeend', 'Subject: ' + SUBJECT.value)
  }
  
  if(!DESCRIPTION.value) {
    document.getElementById('message-description').insertAdjacentHTML('beforeend', 'No description ')
  } else {
    document.getElementById('message-description').insertAdjacentHTML('beforeend', 'Description: ' + DESCRIPTION.value)
  }
  })

  MODALBTN.addEventListener('click', () => {
    WINDOW.hidden = true;
    FORM.reset();
  })

//Slider. Переключение слайдов

let images = document.querySelectorAll('.slider-image');
let currentImage = 0;
let isEnabled = true;

function changeCurrentImage(n) {
  currentImage = (n + images.length) % images.length;
}

function hideImage(direction) {
  isEnabled = false;
  images[currentImage].classList.add(direction);
  images[currentImage].addEventListener('animationend', function() {
  this.classList.remove('active', direction);
});
}

function showImage(direction) {
  images[currentImage].classList.add('next', direction);
  images[currentImage].addEventListener('animationend', function() {
  this.classList.remove('next', direction);
  this.classList.add('active');
  isEnabled = true;
});
}

function previousImage(n) {
  hideImage('to-right');
  changeCurrentImage(n - 1);
  showImage('from-left');
}

function nextImage(n) {
  hideImage('to-left');
  changeCurrentImage(n + 1);
  showImage('from-right');
}

document.querySelector('.left').addEventListener('click', function() {
  if(isEnabled) {
    previousImage(currentImage);
  }
})

document.querySelector('.right').addEventListener('click', function() {
  if(isEnabled) {
    nextImage(currentImage);
  }
})

//Появление hamburger-menu

const MENU = document.getElementById('hamburger-menu');
const MENU_LAYER = document.getElementById('hamburger-layer');
MENU.addEventListener('click', function toggle() {
  document.getElementById('hamburger-wrapper').style.transform="rotate(90deg)";
  if(MENU_LAYER.style.display === "block") {
    MENU_LAYER.style.display = "none";
  } else {
    MENU_LAYER.style.display = "block";
  }
});



