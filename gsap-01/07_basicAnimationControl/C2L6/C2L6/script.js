gsap.registerPlugin(MotionPathPlugin)


let tl = gsap.timeline({
  repeat:2,
  repeatDelay:5,
  defaults: {
    duration:12,ease:"Power1.inOut"
  }
})

.to('#hand',{
  motionPath: {
    path:'#path',
    align:"#path",
    alignOrigin:[0.28,0.08]
  }
})

.to('#path',{
  strokeDasharray:"4046," + "0"
},"<")


const pause = document.getElementById('pause')
const play = document.getElementById('play')
const reverse = document.getElementById('reverse')
const seek = document.getElementById('seek')
const restart = document.getElementById('restart')


pause.addEventListener('click', () => {
  tl.pause()
})
play.addEventListener('click', () => {
  tl.play()
})
reverse.addEventListener('click', () => {
  tl.reverse()
})
seek.addEventListener('click', () => {
  tl.seek()
})
restart.addEventListener('click', () => {
  tl.restart()
})