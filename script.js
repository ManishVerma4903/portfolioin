var p = document.querySelectorAll(".progress-num");
var pro = document.querySelectorAll(".progress");
var a = Array();
var bar = document.querySelector(".bars");
var xbar = document.querySelector(".xbar");
var sidenav = document.querySelector(".sidenav");


function formsubmit(){
  document.querySelector(".formdetail").style.display="block";
  document.querySelector("#form-main").style.display="none";
  setTimeout(()=>{
   location.reload();
    
  },3000);
  
}

function revealspan() {
  document.querySelectorAll(".reveal").forEach(function (e) {
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = e.innerHTML;
    parent.appendChild(child);
    e.innerHTML = "";
    e.appendChild(parent);
  });
}
function loader() {
  var t1 = gsap.timeline();

  t1.from(".child span", {
    x: 100,
    delay: 1,
    stagger: 0.2,
    duration: 1,
    ease: Power3.easeInOut,
  })
    .to(".parent .child", {
      y: "-100%",
      duration: 0.8,
      // delay:1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.6,
      ease: Circ.easeInOut,
    })
    .from(".links a ", {
      y: "-100%",
      opacity: 0,
    })
    .from(".logo", {
      x: "-100%",
      opacity: 0,
    })
    .from(".button", {
      x: "100%",
      opacity: 0,
    })
    .from(".bars", {
      x: "100%",
      opacity: 0,
    })

    .from(".home-left img ", {
      scale: 0,
      duration: 0.5,
    })
    .from(".pop", {
      y: "100%",
      stagger: 0.5,
    })
    .from(".socialinks a", {
      x: "100%",
      stagger: 0.1,
      opacity: 0,
      ease: Bounce.inOut,
    })
    .from(".resume", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay:-.2
    });
    
}

function about() {
  var t = gsap.timeline();
  t.from(".about-heading span", {
    y: "-100%",
    ease: Power1.in,
    scrollTrigger: {
      trigger: ".about-heading",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  })
    .from(".about-left h1 span", {
      y: "100%",
      ease: Power1.in,
      scrollTrigger: {
        trigger: ".about-left h1",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    })
    .from(".about-left p span", {
      x: "-100%",
      ease: Power1.in,
      scrollTrigger: {
        trigger: ".about-left p  ",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 5,
      },
    })
    .from(".about-img", {
      scale: 0,
      ease: Power1.in,
      // duration:2,
      scrollTrigger: {
        trigger: ".about-img",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 70%",
        scrub: 5,
      },
    });
}

function skill() {
  gsap.from(".skill-heading span", {
    y: "-100%",
    ease: Power1.in,
    scrollTrigger: {
      trigger: ".skill-heading",
      scroller: "body",
    //   markers: true,
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });
  var z = 0;
  p.forEach((i) => {
    a[z] = i.innerText;
    z++;
  });
  var z = 0;
  pro.forEach((i) => {
    i.style.width = "0px";
    gsap.to(i, {
      width: a[z],
      ease:Circ.easeInOut,
      delay:1,
      scrollTrigger: {
        trigger: ".progress",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
      },
    });
    z++;
  });
}
function project(){
    var tl  = gsap.timeline();
    tl
    .from(".project-heading span", {
        y: "-100%",
        ease: Power1.in,
        scrollTrigger: {
          trigger: ".project-heading",
          scroller: "body",
        //   markers: true,
          start: "top 90%",
          end:"top 70%",
          scrub: 2,
        }
    })
    .from(".project-img img",{
        scale:0,
        opacity:0,
        ease: Power1.in,
        scrollTrigger: {
            trigger: ".project-img",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end:"top 70%",
            scrub: 2,
          }
       }) 
       .from(".title h2 span",{
        x:"-100%",
        ease:Circ.easeInOut,
        scrollTrigger: {
            trigger: ".title h2",
            scroller: "body",
            // markers: true,
            start: "top 95%",
            end:"top 85%",
            scrub: 2,
          }
       })
       .from(".discription span",{
        y:"100%",
        ease:Circ.easeInOut,
        scrollTrigger: {
            trigger: ".discription",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end:"top 75%",
            scrub: 2,
          }
       })
       .from(".link h2 a span",{
        x:"-100%",
        ease:Circ.easeInOut,
        scrollTrigger: {
            trigger: ".link h2 a",
            scroller: "body",
            // markers: true,
            start: "top 99%",
            end:"top 95%",
            scrub: 2,
          }
       })
}

function contact(){
  var tl  = gsap.timeline();
    tl
    .from("#form-heading span", {
        y: "-100%",
        ease: Power1.in,
        scrollTrigger: {
          trigger: "#form-heading",
          scroller: "body",
          // markers: true,
          start: "top 90%",
          end:"top 70%",
          scrub: 2,
        }
    })
    .from("#form-main",{
      opacity:0,
      scale:0,
      // delay:5
      ease:Power1.easeInOut,
      scrollTrigger: {
        trigger: "#form-heading",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end:"top 50%",
        scrub: 2,
      }
    })
}

function bars(){
    bar.style.display = "none";
    sidenav.style.left = "0px";
    xbar.style.display="block";
    
  }
  function xbars(){
    bar.style.display = "block";
    sidenav.style.left = "-150%";
    xbar.style.display="none";
  
}

revealspan();
loader();
about();
skill();
project();
contact();
