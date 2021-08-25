'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
// PART  SELECTING, CREATING, DELETING ELEMENTS

// console.log(document.documentElement);
// console.log(document.head)
// console.log(document.body)

// START  SELECTING
const testDiv = document.querySelector('.test--div');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);// NodeList(4)

const section01 = document.querySelector('#section--1');
const section1 = document.getElementById('section--1');
console.log(section01);
console.log(section1);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);// HTMLCollection(9)
console.log(document.getElementsByClassName('btn'));// HTMLCollection(5) 

// NOTE Difference between HTMLCollection and NodeList
// HTMLCollection change according to dom updates (live updates).
// NodeList are fixed that doesn't change on dom updates

// END  SELECTING

// START CREATING AND INSERTING
// 1 >> .insertAdjacentHTML
// [180, 500, 700, 250, 90].forEach(qty => {
//   const more = qty > 200;
//   const html = `<h4>This bag's weight is ${qty}. ${more ? "--Too Heavy--" : "--Normal--"}</h4>`;
//   testDiv.insertAdjacentHTML('afterbegin', html);
// })

// 2 >> createElement
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We are useing cookies for improved functionality and analytics.";
message.innerHTML = `We are useing cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
header.append(message);
// MSG  to show Multiple Times (we need to CLONE the ELEMENT)
// header.append(message.cloneNode(true));// true => also clone child elements

// (before and after) will show outside selected node but (append, prepend) inside selected node
// header.before(message);
// header.after(message);
// END CREATING AND INSERTING

// START  DELETING
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.parentElement.removeChild(message);
  message.remove();
});
// END  DELETING

// PART  STYLES, ATTRIBUTES, CLASSES

// START  STYLES
message.style.backgroundColor = '#000';
message.style.padding = '5px';
message.style.borderRadius = '5px';
message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.color);// show empty because it is NOT inside (inlinestyles)
// console.log(getComputedStyle(message).color);// this is the way to get classname styles

const msgHeight = Number.parseFloat(getComputedStyle(message).height, 10);
message.style.height = msgHeight + 30 + 'px';

// :root selector can be accessible in docmentElement
document.documentElement.style.setProperty('--color-primary', 'goldenrod');
// END  STYLES

// START  ATTRIBUTES
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.nav__link--btn');
console.log(logo.alt);
console.log(logo.src);// absolute image path (url/imagepath)
console.log(logo.getAttribute('src'));// relative image path (imagepath)

console.log(link.href);// absolute path
console.log(link.getAttribute('href'));// relative path

// Non Standard attributes
console.log(logo.myattr);// undefined
console.log(logo.getAttribute('myattr'));// show actual result (my-test-attribute)
logo.setAttribute('mynewattr', 'my-new-test-attribute');

logo.alt = "Logo changed"

// DATA Attributes
console.log(logo.dataset.version);
console.log(logo.dataset.attrName);// camelCase required in js (attr-name === attrName)
// END  ATTRIBUTES

// START  CLASSES
logo.classList.add('one', 'two');
logo.classList.remove('one', 'two');
logo.classList.toggle('one');
console.log(logo.classList.contains('one'));// true

// IMP  donot use (it will replace all classes of the selected element);
// logo.className = 'pankaj';
// END  CLASSES
 */

// PART  EVENTS AND EVENT HANDLERS

// START  EVENTS
// const h1 = document.querySelector('h1');

// const alertH1 = () => {
//   alert('addEventListener: HELLO');

//   // Remove eventlistener (run code only once);
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);
// // after certain time remove event listener
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// // h1.onmouseenter = () => {
// //   alert('onmouseenter: HELLO');
// // };

// PART  EVENT BUBBLING and USES
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.stopPropagation();
// this in not a good idea, To avoid we use e.target in parent element (Event delegates)
//   this.style.backgroundColor = randomColor();
//   console.log('Nav Link', e.target, e.currentTarget);// both are same
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
// e.stopPropagation();
//   this.style.backgroundColor = randomColor();
//   console.log('Nav Links', e.target, e.currentTarget);// both are different
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);// both are different
// });

// PART  DOM Traversing
// const h1 = document.querySelector('h1');
// // MSG  GOING DOWNWARDS
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'goldenrod';

// // MSG  GOING UPWARDS
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // MSG  GOING SIDEWAYS (SELECTING SIBLINGS)
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // getting all siblings
// console.log(h1.parentElement.children);
// // style the all sibling
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transform = 'scale(.5)';
//   }
// });
// END  Events

// START  IMPLEMENTATIOON
const btnScrollTO = document.querySelector('.btn--scroll-to');
// const section1 = document.getElementById('section--1')
const section1 = document.querySelector('#section--1');

// PART  SCROLLING TO SECTION ***************************************************
btnScrollTO.addEventListener('click', e => {
  // TODO Scrolling ( MSG  SOLUTION 1)
  // const btncoords = e.target.getBoundingClientRect();
  // const s1coords = section1.getBoundingClientRect();
  // console.log('From Position', btncoords);
  // console.log('To Position', s1coords);

  // console.log('Current scroll X/Y', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'Height/Width of ViewPort',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // the below line only working from the begining but in between will not work because (above coordinate only calculate on viewports)
  // window.scrollTo(s1coords.left, s1coords.top);
  // to make it work we use window scroll offset (current Position + current scroll)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // For Animation
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // NOTE  SOLUTION 2
  section1.scrollIntoView({ behavior: 'smooth' });
});

// PART  PAGE SMOOTH NAVIGATION ************************************************
// MSG  SOLUTION 1
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// MSG  SOLUTION 2 (Event Delegation)
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  // check the link clicked or not
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log('LINK', id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log('NAV');
  }
});

// END  IMPLEMENTATIOON
