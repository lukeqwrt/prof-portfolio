const menu = document.querySelector('#mobile-menu')
const mylist = document.querySelector('.list')

// display mobile menu

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    mylist.classList.toggle('active-list')
});

window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav-container');
    header.classList.toggle("sticky", window.scrollY > 0)
    mylist.classList.remove('active-list', window.scrollY == 0)
    menu.classList.remove('is-active', window.scrollY == 0)
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 600){
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active')
            mylist.classList.remove('active-list')
        }
    }
})

// get the element to animate
var element = document.getElementById('skills');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      
      const timeline = gsap.timeline({defaults: { duration: 1}})
      timeline
        .to('.animating', { width: '100%',stagger: .1 })
      element.classList.add('animate');
  }
}
