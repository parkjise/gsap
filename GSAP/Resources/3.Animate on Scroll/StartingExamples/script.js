document.addEventListener('DOMContentLoaded', function() {

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger Intro
const navySquare = document.querySelector('.navySquare');
const sectionTitle = document.querySelector('h1');

// gsap.to(navySquare,{
//   duration:2,
//   x:800,
//   ScrollTrigger:sectionTitle
// })

gsap.to(navySquare, {
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger:sectionTitle,
    scrub:true, 
  }
  
})

// ScrollTrigger Basic Implementation
// #f3a712
const redSquare = document.querySelector('.redSquare');
  gsap.to(redSquare,{
    duration:6,
    rotation:360,
    x:1200,
    backgroundColor:'#f3a712',
    scrollTrigger:{
      trigger:redSquare,
      markers:true,
      start:'top 75%',
      end:'bottom 25%',
      toggleActions:'restart pause reverse reset'
    }
  })

// ScrollTrigger Scrub & Pin
const tanSection = document.querySelector('.tanSection');
const redBar = document.querySelector('.redBar');
  const tl = gsap.timeline();
  tl.to(redBar,{
    width:'100%',
    duration:3,
    scrollTrigger:{
      trigger:tanSection,
      scrub:true, // 실시간 응답
      pin:true
    }
  })

});