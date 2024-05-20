
var tl1 = gsap.timeline({paused:true})

tl1.to('.textOne span', {
 rotate:'180deg',
  duration: 0.8,
  opacity:0,
  ease: "back.out(1.5)",
})
var tl2 = gsap.timeline({paused:true})
tl2.to('.textTwo span', {
 rotate:'180deg',
  duration: 0.8,
  opacity:0,
  ease: "back.out(1.5)",
})
var tl3 = gsap.timeline({paused:true})
tl3.to('.textThree span', {
 rotate:'180deg',
  duration: 0.8,
  opacity:0,
  ease: "back.out(1.5)",
})
var tl4 = gsap.timeline({paused:true})
tl4.to('.textFour span', {
 rotate:'180deg',
  duration: 0.8,
  opacity:0,
  ease: "back.out(1.5)",
})



document.querySelector('.textOne h2').addEventListener('click', function () {
  document.querySelector('.textFour h2').style.color='#ffffff'
  document.querySelector('.textThree h2').style.color='#ffffff'
  document.querySelector('.textTwo h2').style.color='#ffffff'
  document.querySelector('.textOne h2').style.color='transparent'
  // document.querySelector('.textOne h2').style.color='#e1493c'
  tl2.reverse()
  tl3.reverse()
  tl4.reverse()
  tl1.play()
  gsap.to('.textOne .para', {
    display:'block',

  })
  gsap.from('.textOne p', {
    y: '100%',
    delay: 0.2,
    duration: 0.8,
    ease: "back.out(1.5)",
  })

  gsap.to('.imgFour', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgThree', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgTwo', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgOne', {
    height: "100%",
    duration: 0.5, ease: "circ.out",
    delay: 0.5
  })

  gsap.from('.imgOne', {
    y: "-100vh",
    duration: 0.5,
    delay: 0.5

  })

  document.querySelector('.textFour .para').style.display = "none"
  document.querySelector('.textTwo .para').style.display = "none"
  document.querySelector('.textThree .para').style.display = "none"
})
document.querySelector('.textTwo h2').addEventListener('click', function () {
  document.querySelector('.textFour h2').style.color='#ffffff'
  document.querySelector('.textThree h2').style.color='#ffffff'
  document.querySelector('.textOne h2').style.color='#ffffff'
  document.querySelector('.textTwo h2').style.color='transparent'
  tl1.reverse()
  tl3.reverse()
  tl4.reverse()
  tl2.play()
  gsap.to('.textTwo .para', {
    display:'block',

  })
  gsap.from('.textTwo p', {
    y: '100%',
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
  })
  gsap.to('.imgFour', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgOne', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgThree', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgTwo', {
    height: "100%",
    duration: 0.5, ease: "circ.out",
    delay: 0.5
  })
  gsap.from('.imgTwo', {
    y: "-100vh",
    duration: 0.5,
    delay: 0.5
  })
  document.querySelector('.textFour .para').style.display = "none"
  document.querySelector('.textOne .para').style.display = "none"
  document.querySelector('.textThree .para').style.display = "none"
})
document.querySelector('.textThree h2').addEventListener('click', function () {
  document.querySelector('.textFour h2').style.color='#ffffff'
  document.querySelector('.textTwo h2').style.color='#ffffff'
  document.querySelector('.textOne h2').style.color='#ffffff'
  document.querySelector('.textThree h2').style.color='transparent'
  tl1.reverse()
  tl2.reverse()
  tl4.reverse()
  tl3.play()
  gsap.to('.textThree .para', {
    display:'block',

  })
  gsap.from('.textThree p', {
    y: '100%',
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
  })
  gsap.to('.imgFour', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgOne', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgTwo', {
    height: "0%",
    duration: 0.5, ease: "circ.out",
  })
  gsap.to('.imgThree', {
    height: "100%",
    duration: 0.5, ease: "circ.out",
    delay: 0.5
  })
  gsap.from('.imgThree', {
    y: "-100vh",
    duration: 0.5,
    delay: 0.5
  })
  document.querySelector('.textFour .para').style.display = "none"
  document.querySelector('.textTwo .para').style.display = "none"
  document.querySelector('.textOne .para').style.display = "none"
})

document.querySelector('.textFour h2').addEventListener('click', function () {
  document.querySelector('.textThree h2').style.color='#ffffff'
  document.querySelector('.textTwo h2').style.color='#ffffff'
  document.querySelector('.textOne h2').style.color='#ffffff'
  document.querySelector('.textFour h2').style.color='transparent'
 
  tl1.reverse()
  tl2.reverse()
  tl3.reverse()
  tl4.play()
  gsap.to('.textFour .para', {
    display:'block',

  })
  gsap.from('.textFour p', {
    y: '100%',
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
  })
  gsap.to('.imgThree', {
    height: "0%",
    duration: 0.5,
    ease: "circ.out",
  })
  gsap.to('.imgOne', {
    height: "0%",
    duration: 0.5,
    ease: "circ.out",
  })
  gsap.to('.imgTwo', {
    height: "0%",
    duration: 0.5,
    ease: "circ.out",
  })
  gsap.to('.imgFour', {
    height: "100%",
    duration: 0.5,
    ease: "circ.out",
    delay: 0.5

  })
  gsap.from('.imgFour', {
    y: "-100vh",
    duration: 0.5,
    delay: 0.5
  })
  document.querySelector('.textOne .para').style.display = "none"
  document.querySelector('.textTwo .para').style.display = "none"
  document.querySelector('.textThree .para').style.display = "none"
})
