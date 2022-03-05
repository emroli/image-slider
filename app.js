// const slides = document.querySelectorAll('.slide');
// const btns = document.querySelectorAll('.btn');

// //setting current slide to 1 as starting point
// var currentSlide = 1;

// //JS for manual navigation

// const manualNav = function(manual){
//     slides.forEach((slide) => {
//         slide.classList.remove('active');

//         btns.forEach((btn)=>{
//             btn.classList.remove('active');
//         })
//     })

//     slides[manual].classList.add('active');
//     btns[manual].classList.add('active');
// }

// //setting up eventlistener to each button
// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () =>{
//         manualNav(i);
//         currentSlide = i;
        
//     })
// })


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
 
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
