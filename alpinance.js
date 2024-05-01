'use strict'



const navBar = document.querySelector('.nav-bar')
const closeBtn1 = document.querySelector('.close__btn');
const ham = document.querySelector('.ham')

const btnRight= document.querySelector('.slider__btn--right')
const btnleft= document.querySelector('.slider__btn--left')
const test = document.querySelector('.test')
const singleTests = document.querySelectorAll('.single-test')


const nav = document.querySelector('.nav');
const header = document.querySelector('.header')
// const closeBtn2 = document.querySelector('.btn--close-modal');
// const signIn = document.querySelector('.sign-in');
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay')
//  document.addEventListener('DomContentLoaded', initializeTest)

// const showModal = function(){
// modal.classList.remove('hidden')
// overlay.classList.remove('hidden')
// }

// const closeModal = function(){
//   modal.classList.add('hidden')
//   overlay.classList.add('hidden')
//   }
// document.addEventListener('keydown', function(e){
//   if(e.key === 'Escape' && !modal.classList.contains('hide'))
//   closeModal
// })

// signIn.addEventListener('click', showModal);
// closeBtn2.addEventListener('click', closeModal)


const showNavBar= function(e){
    e.preventDefault();
  navBar.classList.remove('hide');

}

const closeNavBar =function(e){
    e.preventDefault();
    navBar.classList.add('hide');
}

ham.addEventListener('click', showNavBar);
closeBtn1.addEventListener('click', closeNavBar);

document.addEventListener('keydown',function(e){
  if(e.key ==='Escape' && !navBar.classList.contains('hide'))
  closeNavBar;
} )
// initializeTest()
let testIndex = 0;
let interValid = null;

const initializeTest = function(){

  if(singleTests.length>0){
  singleTests[testIndex].classList.add('displayTest')
   interValid= setInterval(nextTest, 5000);
  }
   console.log(interValid)
}


////sticky navigation bar

// const navHeight = nav.getBoundingClientRect().height
// console.log(navHeight)

// const stickyNav = function(entries){
//   const [entry] = entries;
// console.log(entry);
// if(!entry.isIntersecting){
//   nav.classList.add('sticky')
// }else{
//   nav.classList.remove('sticky')
// }
// }


// const headerObserver = new IntersectionObserver(
//   stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`
//   }
// )

// headerObserver.observe(header)
const allSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries
// entries.forEach(entry => entry.target.classList.remove('section--hidden'))
if(!entry.isIntersecting) return;
entry.target.classList.remove('section--hidden')

sectionObserver.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(
    revealSection,{
  root: null,
  threshold:0.15,
    }
)
allSection.forEach(function(section){
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
})
// const allSection = document.querySelectorAll('.section');

// const showSection = function(entries){
// const [entry] = entries;
// console.log(entry.target);
// if(!entry.isIntersecting) return;
// entry.target.classList.remove('hide')

// sectionObserver.unobserve(entry.target)
// }

// const sectionObserver = new IntersectionObserver(
//   showSection, {
//     root: null,
//     threshold: .1,
//   }
// )

// allSection.forEach(function(section){
//   sectionObserver.observe(section);
//   section.classList.add('hide')
// }
// )
const offer1 = document.querySelector('.single-offer_one');
const offer2 = document.querySelector('.single-offer_two');
const offer3 = document.querySelector('.single-offer_three');
const offers = document.querySelector('.offer');
const thumb = document.querySelector('.thumb')

// const scrollOne = function(){
//   thumb.style.gridRow = 2/3;
// }

const offerScroll1 = function(entries){

  const[entry] =entries;

if(!entry.isIntersecting) return;
console.log(entry)
     offer1.classList.remove('offer-active');
     offer2.classList.add('offer-active');
    thumb.classList.add('scrollOne')
    
     offer1Observer.unobserve(offers)
}
const offer1Observer = new IntersectionObserver(
  offerScroll1, {
    root: null,
    threshold: 0.5,
  }
)
offer1Observer.observe(offers);


const offerScroll2 = function(entries){

  const[entry] =entries;

if(!entry.isIntersecting) return;
// console.log(entry)
     offer2.classList.remove('offer-active');
     offer3.classList.add('offer-active');
    thumb.classList.add('scrollTwo')
    
     offer2Observer.unobserve(offers)
}
const offer2Observer = new IntersectionObserver(
  offerScroll2, {
    root: null,
    threshold: .8,
  }
)
offer2Observer.observe(offers);
const showTest = function(index){
  if(index >=singleTests.length){
    testIndex=0
  }else if(index < 0){
    testIndex = singleTests.length-1
  }
 singleTests.forEach(singleTest => {
  singleTest.classList.remove('displayTest')
 })
 singleTests[testIndex].classList.add('displayTest')
}
const nextTest =function(){
   testIndex++;
   showTest(testIndex);
}
 const prevTest = function(){
  clearInterval(interValid)
   testIndex++
   showTest(testIndex)
 }
initializeTest()

btnRight.addEventListener('click', nextTest)
btnleft.addEventListener('click', prevTest)

