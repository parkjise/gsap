// const btn = document.querySelector('.btn')
// const btns = document.querySelectorAll('.btn');
// btns.forEach((btn) => {
  
//   for(let i =0; i < 5; i ++){
//     const btnChild = document.createElement('div');
//     btnChild.classList.add('btnChild')
//     btn.append(btnChild)
//   }

//   btn.addEventListener('mouseenter',() => {
//     const btnChildren = btn.querySelectorAll('.btnChild')
//     gsap.to(btnChildren, {
//       autoAlpha:0,
//       scale:2,
//       duration:0.7,
//       stagger:{
//         amount:.5,
//       },
//       onComplete:function() {
//         this.targets().forEach((t) => {
//           gsap.set(t,{autoAlpha:1,scale:1})
//         })
//       }
//     })
//   })
// })

// const btn = document.querySelector('.btn')
// const btns = document.querySelectorAll('.btn');
class StaggerPulse {
  constructor($btn,$pulseNum = 5,$pulseScale = 2){
    this.btn = $btn;
    this.btn.addEventListener('mouseenter',this.onMouseEnter.bind(this));
    this.btnChildren = [];
    this.pulseScale =$pulseScale;
    for(let i =0; i < $pulseNum ; i ++){
        const btnChild = document.createElement('div');
        btnChild.classList.add('btnChild')
        this.btn.append(btnChild)
        this.btnChildren.push(btnChild)
      }
  }

  onMouseEnter(e){
    this.tween = gsap.to(this.btnChildren, {
      autoAlpha:0,
      scale:this.pulseScale,
      duration:0.5,
      stagger:{
        amount:.5,
      },
      onComplete:this.onCompleteTween.bind(this),
      callbackScope : this
    })
  }
  onCompleteTween(){
    this.tween.targets().forEach((t) => {
      gsap.set(t,{autoAlpha:1,scale:1})
    })
  }
}
// new StaggerPulse(document.querySelector('.btn'))

const btns = document.querySelectorAll('.btn');
const nums = [4,4,4]
const scales = [2,3,4]
btns.forEach((btn,idx) => {
  new StaggerPulse(btn,nums[idx],scales[idx])
})