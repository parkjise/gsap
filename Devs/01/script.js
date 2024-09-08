const colors = ['orange','purple','navy','white']

const colorsWrap = gsap.utils.wrap(colors)
const colorsWrapYoyo = gsap.utils.wrapYoyo(colors)

// gsap.to('.box',{
//   backgroundColor:colorsWrap,
// })
gsap.to('.box',{
  backgroundColor:colorsWrapYoyo,
  stagger:0.2
})