document.addEventListener('DOMContentLoaded', function() {

// GSAP Object
const greenSquare = document.querySelector('.greenSquare');
gsap.to(greenSquare,{
  duration:2,
  x:300,
  rotation:360,
  opacity:.5,
  backgroundColor:'red',
  ease:'power1.out'
})

// gsap.from()
const orangeSquare = document.querySelector('.orangeSquare');

gsap.from(orangeSquare,{
  duration:2,
  x:500,
  opacity:0,
  scale:0.5,
  rotation:-90,
  ease:"bounce.out"
})

// gsap.to()
const purpleSquare = document.querySelector('.purpleSquare');

gsap.to(purpleSquare,{
  duration:2,
  x:500,
  borderRadius:'50%',
  rotation:360,
  // ease:'power1.out',
  ease:"bounce.out",
  backgroundColor:"blue"

})
// gsap.fromTo()
const blueSquare = document.querySelector('.blueSquare');
gsap.fromTo(blueSquare,{
  x:-500,
  opacity:0
},
{
  duration:2,
  x:500,
  opacity:1,
  ease:'power2.out'
})

// Delay & Repeat
const circleYellow = document.querySelector('.circleYellow');
const circleRed = document.querySelector('.circleRed');
const circleGreen  = document.querySelector('.circleGreen');

gsap.to(circleYellow,{
  duration:1,
  x:500,
})
gsap.to(circleRed,{
  duration:1,
  x:500,
  delay:1,
  repeat:-1,
  yoyo:true
})
gsap.to(circleGreen,{
  duration:1,
  x:500,
  delay:2
})

// Ease
const circleBlue = document.querySelector('.circleBlue');

gsap.to(circleBlue,{
  duration:2,
  x:500,
  // ease:'linear',
  // ease:'power1.inOut', 1~4
  // ease:'power4.inOut',
  // ease:'back.out(1.5)',
  // ease:'elastic.out(1,0.3)', // 스프링효과
  ease:"bounce.out",
})
// Stagger

gsap.from('.box',{
  duration:2,
  y:-50,
  opacity:0,
  stagger:{
    each:0.1,
    // from:'end',
    // from:'center',
    from:'center',
  }
})

});
