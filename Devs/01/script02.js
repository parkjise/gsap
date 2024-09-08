const banner = document.querySelector('.banner')
gsap.set(banner,{
  perspective:500,
  transformStyle:'preserve-3d'
})

function getBannerPanelTl(bannerPanelEl){
  const bannerPanel = document.querySelector(bannerPanelEl)
  const title1 = bannerPanel.querySelector('.title-1')
  const title2 = bannerPanel.querySelector('.title-2')

  gsap.set(bannerPanel,{
    trasformPersspective:1000,
    transformOrigin:'50% 50% -300px',
    transform:'translateZ(50px)',
    backfaceVisibility:'visible',
  })
  gsap.set([title1,title2],{opacity:0})
  // gsap.from(bannerPannel,{rotationY:-90})
  // gsap.to(title1,{opacity:1,delay:1})
  // gsap.to(title2,{opacity:1,delay:2})

  const tl = gsap.timeline();
  tl.from(bannerPanel,{rotationY:-90})
  .to(title1,{opacity:1})
  .to(title2,{opacity:1})
  .to(bannerPanel,{rotationY:270,delay:3})

  return tl;
}

// getBannerPanelTl()

const bannerTl = gsap.timeline({repeat:-1});
bannerTl
.add(getBannerPanelTl('.banner__panel-1'))
.add(getBannerPanelTl('.banner__panel-2'))
.add(getBannerPanelTl('.banner__panel-3'))
.add(getBannerPanelTl('.banner__panel-4'));