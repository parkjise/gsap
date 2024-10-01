document.addEventListener('DOMContentLoaded', function() {
    const tl = gsap.timeline({repeat:-1,yoyo:true})

    tl.to('h1',{
      backgroundPosition:'-960px 0',
      duration:7,
      ease:'power.inOut'
    })
})
