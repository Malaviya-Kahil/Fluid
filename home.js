
const lenis = new Lenis()

lenis.on('scroll', (e) => {
   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
   lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



var h1 = document.querySelector('h1').textContent
var splitted = h1.split('')
var host = ''
splitted.forEach(function (e) {
   host = host + `<span class='head1'>${e}</span>`
})
document.querySelector('h1').innerHTML = host

var h2 = document.querySelector('h2').textContent
var splitted = h2.split('')
var host2 = ''
splitted.forEach(function (f) {
   host2 = host2 + `<span class='head2'>${f}</span>`
})
document.querySelector('h2').innerHTML = host2
var tl = gsap.timeline()

gsap.from('.head1', {
   y: 100,
   duration: 1,
   stagger: 0.08,
   opacity: 0,
   ease: "back.out(3)",
})
gsap.from('.head2', {
   y: 100,
   duration: 1,
   stagger: 0.05,
   delay: 0.5,
   opacity: 0,
   ease: "back.out(3)",
})
gsap.to('.imageDiv', {
   width: '0%',
   transform: "translateX(-80%)"

})
gsap.from('.imageDiv', {
   transform: "translateX(-80%)",
   duration: 1,
   delay: 0.8,
   width: '0%'

})
gsap.to('.imageDiv img', {
   scale: 1.25,


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageOne',
      start: '60% 50%',
      scrub: 3,
      end: '100% 50%',

   }
})
gsap.from('.imageDiv', {
   transform: "translateX(100%)",


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageOne',
      start: '60% 50%',
      scrub: 3,
      end: '100% 50%',

   }
})
gsap.to('.panel', {
   x: '-50%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageOne',
      start: '60% 50%',
      scrub: 3,
      end: '150% 50%',

   }
})
gsap.to('h1', {
   x: '20%',
   y: '-200%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageOne',
      start: '60% 50%',
      scrub: 3,
      end: '150% 50%',

   }
})
gsap.to('.headingDiv h2', {
   x: '50%',
   y: '30%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageOne',
      start: '60% 50%',
      scrub: 3,
      end: '150% 50%',

   }
})

// page two
gsap.fromTo('.pageTwoImgDiv', {

   y: '30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '20% 50%',
      scrub: 3,
      end: '100% 50%',

   }
}, {

   y: '-30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '20% 50%',
      scrub: 3,
      end: '100% 50%',

   }
})

// gsap.to('.pageTwoTextDivInner h3 span',{
//    color:'transparent',
//    x:20,
//    scrollTrigger:{
//       scroller:'body',
//       trigger:'.pageTwo',
//       start:'10% 50%',
//       scrub:3,
//       end:'30% 50%',

//      }
// })
gsap.to('.pageTwoTextDivInner .p1 p:last-child', {

   width: '100%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '10% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})
gsap.to('.pageTwoTextDivInner .p2 p:last-child', {

   width: '100%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '12% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})
gsap.to('.pageTwoTextDivInner .p3 p:last-child', {

   width: '100%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '14% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})
gsap.to('.pageTwoTextDivInner .p4 p:last-child', {

   width: '100%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '16% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})
gsap.to('.pageTwoTextDivInner .p5 p:last-child', {

   width: '100%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '18% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})
gsap.to('.pageTwoTextDivInner .p6 p:last-child', {

   width: '100%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageTwo',
      start: '20% 50%',
      scrub: 5,
      end: '55% 50%',

   }
})

// page three

gsap.from('.pageThree span', {
   x: '40%',
   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageThree',
      scrub: 3,
      start: '0% 50%',
      end: "60% 50%"
   }
})

// page four

gsap.fromTo('.imgOneDiv', {

   y: '10%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '0% 50%',
      scrub: 1,
      end: '40% 50%',


   }
}, {

   y: '-20%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '0% 50%',
      scrub: 1,
      end: '40% 50%',

   }
})

gsap.fromTo('.imgTwoDiv', {

   y: '10%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '10% 50%',
      scrub: 1,
      end: '50% 50%',


   }
}, {

   y: '-15%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '10% 50%',
      scrub: 1,
      end: '50% 50%',

   }
})
gsap.fromTo('.imgFourDiv', {

   y: '10%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '50% 50%',
      scrub: 1,
      end: '90% 50%',


   }
}, {

   y: '-5%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '50% 50%',
      scrub: 1,
      end: '90% 50%',

   }
})

gsap.fromTo('.imgThreeDiv', {

   y: '10%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '40% 50%',
      scrub: 1,
      end: '80% 50%',


   }
}, {

   y: '-10%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '40% 50%',
      scrub: 1,
      end: '80% 50%',

   }
})

gsap.from('.imgOneDiv h4', {

   top: '30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '0% 50%',
      scrub: 1,
      end: '40% 50%',
   }
})

gsap.from('.imgTwoDiv h4', {

   top: '30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '10% 50%',
      scrub: 1,
      end: '50% 50%',
   }
})
gsap.from('.imgThreeDiv h4', {

   top: '30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '40% 50%',
      scrub: 1,
      end: '80% 50%',
   }
})
gsap.from('.imgFourDiv h4', {

   top: '30%',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '50% 50%',
      scrub: 1,
      end: '90% 50%',
   }
})


gsap.from('.imgOneDiv img', {

   scale: 1.25,

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '0% 50%',
      scrub: 1,
      end: '40% 50%',
   }
})

gsap.from('.imgTwoDiv img', {

   scale: 1.25,

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '10% 50%',
      scrub: 1,
      end: '50% 50%',
   }
})

gsap.from('.imgThreeDiv img', {

   scale: 1.25,


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '40% 50%',
      scrub: 1,
      end: '80% 50%',
   }
})

gsap.from('.imgFourDiv img', {

   scale: 1.25,


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFour',
      start: '50% 50%',
      scrub: 1,
      end: '90% 50%',
   }
})

// page five

gsap.to('.pageFiveInnerRow .imgDiv1', {

  width:'100%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFive',
      start: '10% 50%',
      scrub: 5,
      end: '70% 50%',
     
   }
})
gsap.to('.pageFiveInnerRow .imgDiv2', {

  width:'100%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFive',
      start: '20% 50%',
      scrub: 5,
      end: '80% 50%',
     
   }
})
gsap.to('.pageFiveInnerRow .imgDiv3', {

  width:'100%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFive',
      start: '30% 50%',
      scrub: 5,
      end: '90% 50%',
     
   }
})
gsap.to('.pageFiveInnerRow .imgDiv4', {

  width:'100%',


   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageFive',
      start: '40% 50%',
      scrub: 5,
      end: '100% 50%',
     
   }
})

// page six

gsap.to('.pageSixInner span:nth-child(1)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
      start: '10% 50%',
      scrub: 3,
      end: '100% 100%',

   }
})
gsap.to('.pageSixInner span:nth-child(2)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(3)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(5)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(6)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(7)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(8)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})
gsap.to('.pageSixInner span:nth-child(9)',{
   transform:'translateY(0%)',

   scrollTrigger: {
      scroller: 'body',
      trigger: '.pageSix',
        start: '10% 50%',
      scrub: 3,
      end: '100% 100%',
     
   }
})

