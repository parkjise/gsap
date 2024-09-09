let tl = gsap.timeline(
  {
    duration:2,
    ease:"power1.inOut",
    yoyo:true,
    repeat:-1
  }
)

.to('.box',{
  x:100,
  y:200,
  width:100,
  height:100,
  duration:2,
  stagger:{
    // each:0.5,
    amount:1,
    from:'center'
  }
})

.to('.box',{
  rotation:360,
  duration:1,
  stagger:{
    // each:0.5,
    amount:1,
    from:'edges'
  }
})

// each 요소의 간격 (stagger: 0.3 똑같습니다.)
// from: 'end' 요소의 끝
// from: 'center' 요소의 가운데
// from: 'edges' 요소의 좌우
// amount 요소의 총 1초동안 작동



