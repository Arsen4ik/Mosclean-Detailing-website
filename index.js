let navbarMenu = document.querySelector('.navbar-menu')
let sideBar = document.querySelector('.side-bar')
let closeSideBar = document.querySelector('.close-side-bar')

let isNavbarMenu = false
navbarMenu.addEventListener('click', () => {
    if(!isNavbarMenu){
        sideBar.style.right = 0
        isNavbarMenu = true
    } else {
        sideBar.style.right = '-200px'
        isNavbarMenu = false
    }
})
closeSideBar.addEventListener('click', () => {
    sideBar.style.right = '-200px'
    isNavbarMenu = false
})
  

let cardsArr = []

let cards = document.querySelectorAll('#card')
cards.forEach(el => {

    el.sign = 0
    el.addEventListener('mouseenter', () => {
        let srcImg = el.firstChild.nextSibling.src
        let srcImgArr = []
        for(let i = 0; i < srcImg.length; i++){
            srcImgArr.push(srcImg[i])
        }
        if(!el.sign){
            el.sign = 1
            srcImgArr[srcImgArr.length-6] = el.sign
            el.style.transform = "rotateY(180deg)"
            setTimeout(() => {
                el.firstChild.nextSibling.src = srcImgArr.join('')
                el.firstChild.nextSibling.style.transform = "rotateY(180deg)"
                el.lastChild.previousSibling.style.transform = "rotateY(180deg)"
            }, 250)
        } else {
            el.sign = 0
            srcImgArr[srcImgArr.length-6] = el.sign
            el.style.transform = "rotateY(0deg)"
            setTimeout(() => {
                el.firstChild.nextSibling.src = srcImgArr.join('')
                el.firstChild.nextSibling.style.transform = "rotateY(0deg)"
                el.lastChild.previousSibling.style.transform = "rotateY(0deg)"
            }, 250)
        }
    })
    el.addEventListener('click', () => {
        let srcImg = el.firstChild.nextSibling.src
        let srcImgArr = []
        for(let i = 0; i < srcImg.length; i++){
            srcImgArr.push(srcImg[i])
        }
        if(!el.sign){
            el.sign = 1
            srcImgArr[srcImgArr.length-6] = el.sign
            el.style.transform = "rotateY(180deg)"
            setTimeout(() => {
                el.firstChild.nextSibling.src = srcImgArr.join('')
                el.firstChild.nextSibling.style.transform = "rotateY(180deg)"
                el.lastChild.previousSibling.style.transform = "rotateY(180deg)"
            }, 250)
        } else {
            el.sign = 0
            srcImgArr[srcImgArr.length-6] = el.sign
            el.style.transform = "rotateY(0deg)"
            setTimeout(() => {
                el.firstChild.nextSibling.src = srcImgArr.join('')
                el.firstChild.nextSibling.style.transform = "rotateY(0deg)"
                el.lastChild.previousSibling.style.transform = "rotateY(0deg)"
            }, 250)
        }
    })
})



function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });


let footerYear = document.querySelector('.footer-year')
footerYear.innerHTML = new Date().getFullYear()