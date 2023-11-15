function loader() {
    var a = 0;
    setInterval(function () {
        a = a + Math.floor(Math.random() * 20);
        if (a < 100) {
            document.querySelector("#main #loader  h1").innerHTML = a + "%";
        }

        else {
            a = 100;
            document.querySelector("#main #loader  h1 ").innerHTML = a + "%";
        }

    }, 200)
}

loader();

var load = gsap.timeline();

load.to("#loader h1", {
    scale: 2,
    onstart: loader(),
    ease: Power3,
})


load.to("#loader ", {
    transform: "translateY(-100vh)",
    ease: Power3,
    delay: 2,
    backgroundColor: "#5F6A4A",

})


function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive();

function page1animation() {

    // var tl = gsap.timeline()

    load.from("#landingpage svg", {
        opacity: 0,
        y: -50,
        duration: .5,
    })


    load.from("#landingpage img", {
        scale: 0.4,
        duration: .7,
        ease: Power2.easeIn,
        delay: -1,
    })


    load.from("body  #nav ", {
        opacity: 0,
        y: -50,
        duration: .7,
        delay: -.1,
        ease: Power2.easeOut,

    })
}

function page2animation() {
    var h2 = document.querySelectorAll("#page2 #text-container h2");
    h2.forEach(function (elem) {
        var textdata = elem.textContent;


        var splittedtext = textdata.split("")
        var clutter = "";

        splittedtext.forEach(function (val) {
            clutter += `<span>${val}</span>`

        });

        elem.innerHTML = clutter;
    })

    gsap.to("#page2 #text-container h2 span ", {
        color: "#E3E3C4",
        stagger: .1,
        duration: .2,
        ease: Power2.easeIn,


        scrollTrigger: {
            trigger: "#text-container h2 span ",
            scroller: "#main",
            // markers :true,
            start: "top 25%",
            end: "top 5%",
            scrub: 4,
        }
    })

    gsap.to("#page2 #svg2, #page2 #svg3", {
        transform: "translateX(-100vw)",
        duration: 0.3,
        ease: Power4,

        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            scrub: 5,
        }

    })
}

function page3animation() {
    var h2 = document.querySelectorAll("#page3 h2");
    h2.forEach(function (elem) {
        var textdata = elem.textContent;


        var splittedtext = textdata.split("")
        var clutter = "";

        splittedtext.forEach(function (val) {
            clutter += `<span>${val}</span>`

        });

        elem.innerHTML = clutter;
    })


    gsap.to("#page3 h2 span", {

        color: "#434B34",
        stagger: .1,
        duration: .2,
        ease: Power2.easeIn,

        scrollTrigger: {
            trigger: "#page3 h2 span",
            scroller: "#main",
            scrub: 2,
        }

    })


    var tl2 = gsap.timeline(
        {
            scrollTrigger: {
                trigger: "#section #left ",
                scroller: "body",
                // markers:true,
                start: "top 10%",
                end: "top 0%",
                scrub: 3,

            }
        }
    );

    tl2.to("#section #left p ", {
        opacity: 1,
        y: -10,
        ease: Power2.easeIn,


    }, 'a')


    tl2.to("#section #left #smalltext ", {
        opacity: 1,
        y: -10,
        ease: Power2.easeIn,
    })


    tl2.to("#section #left img", {
        opacity: 1,
        y: -20,
        ease: Power2.easeIn,
    }, 'b')



    tl2.to("#section #right #img1", {
        opacity: 1,
        y: -20,
        ease: Power2.easeIn,
        stagger: .2,
    }, 'a')


    tl2.to(" #section #right #img2", {
        opacity: 1,
        y: -20,
        ease: Power2.easeIn,
        stagger: .2,
    }, 'b')
}

function page4animation() {

    gsap.to("#page4 .elem", {
        opacity: 1,
        y: -30,
        stagger: .1,


        scrollTrigger: {
            trigger: "#page4 .elem",
            scroller: "#main",
            // markers:true,
            start: "top 5%",
            end: "top -5%",
            scrub: 3,

        }

    })

}

page1animation();
page2animation();
page3animation();
page4animation();


(function page5swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "1.4",
        pagination: {
            el: ".swiper-pagination",
            //   clickable: true,
            type: "fraction",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})()




function page6animation() {
    gsap.to("#page6 #svgfirst, #page6 #svgsecond", {
        left: "-100vw",
        duration: 1,
        ease: Power3,
        stagger: .1,

        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            // markers : true,
            start: "top 50%",
            end: "top 15%",
            scrub: 5,
        }
    })



    var data = document.querySelectorAll("#page6 h3");
    data.forEach(function (elem) {
        var textdata = elem.textContent;
        var splittedtext = textdata.split("")
        var clutter = "";

        splittedtext.forEach(function (val) {
            clutter += `<span>${val}</span>`

        });


        elem.innerHTML = clutter;
    })


    var tl = gsap.timeline();
    tl.to("#page6 h3 span", {
        color: "#E3E3C4",
        stagger: .1,
        ease: Power4,

        scrollTrigger: {
            trigger: "#page6 h3 span ",
            scroller: "#main",
            // markers :true,
            start: "top 25%",
            end: "top 5%",
            scrub: 4,
        }

    })


    tl.to("#page6 #center-para ", {

        y: 30,
        stagger: 1,
        opacity: 1,
        duration: 0.5,
        ease: Expo.ease,
        scrollTrigger: {
            trigger: "#page6 #center-text p  ",
            scroller: "#main",
            // markers:true,
            start: "top 25%",
            end: "top 0%",
            scrub: 2,
        }

    })



    tl.to("#page6 #first-image-text ", {
        opacity: 1,
        duration: 0.5,
        y: 30,
        ease: Power3,



        scrollTrigger: {
            trigger: "#page6 #first-image-text ",
            scroller: "#main",
            scrub: 3,
        }

    }, 't')


    tl.to("#page6 #second-image-text ", {
        opacity: 1,
        duration: 0.5,
        y: 30,
        ease: Power3,

        scrollTrigger: {
            trigger: "#page6  #second-image-text",
            scroller: "#main",
            scrub: 3,
        }

    }, 't')



    tl.to("#page6 #third-image-text ", {
        opacity: 1,
        duration: 0.5,
        y: 30,
        ease: Power3,


        scrollTrigger: {
            trigger: "#page6 #third-image-text  ",
            scroller: "#main",
            scrub: 3,

        }

    }, 't')


    tl.to("#page6-part2 #navigate-text", {
        opacity: 1,
        y: -30,
        duration: 1,
        ease: Power3,
        yoyo: true,
        repeat: -1,

    })
}
page6animation()





function page6part2animate() {


    gsap.to("#page6-part2 #firstsvg, #page6-part2 #secondsvg", {
        transform: "translateX(-100vw)",
        duration: 1,
        ease: Power3.easeIn,

        scrollTrigger: {
            trigger: "#page6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 45%",
            end: "top 15%",
            scrub: 3,
        }
    })
}

page6part2animate()




function page7animate() {
    var data = document.querySelectorAll("#page7 h3");
    data.forEach(function (elem) {
        var textdata = elem.textContent;
        var splittedtext = textdata.split("")
        var clutter = "";

        splittedtext.forEach(function (val) {
            clutter += `<span>${val}</span>`

        });

        elem.innerHTML = clutter;
    })


    var tl = gsap.timeline();
    tl.to("#page7 h3 span", {
        color: "#E3E3C4",
        stagger: .1,
        ease: Power4,

        scrollTrigger: {
            trigger: "#page7 h3 span ",
            scroller: "#main",
            // markers :true,
            start: "top 25%",
            end: "top 5%",
            scrub: 4,
        }

    })
}

page7animate()



function page8animation() {
    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            // markers:true,
            start: "top 25%",
            end: "top -5%",
            // pin:true,
            scrub: 4,

        }
    });
    tl8.to("#page8 #part1", {
        transform: "translateX(-30%)",
        duration: .5,
        ease: Power3,

    }, 'n')


        .to("#page8 #part2", {
            transform: "translateX(30%)",
            duration: .5,
            ease: Power3,
        }, 'n')

        .to("#page8 #text-div", {
            width: "40%",
            duration: .5,
            ease: Power3,
            opacity: 1,

        }, 'n')


        .to("#page8 #text-div #bottom", {
            y: -30,
            opacity: 1,
            duration: .5,
            ease: Power2,

        })

}
page8animation()



function page9animate() {

    gsap.to("#page9 #svg1 , #pqge9 #svg2", {
        transform: "translateX(-100vw)",
        duration: 1,
        ease: Power3,
        stagger: .1,

        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            start: "bottom 50%",
            end: "bottom 0%",
            scrub: 3,

        }
    })
}

page9animate()





function page10animate() {
    var data = document.querySelectorAll("#page10 #text h3");
    data.forEach(function (elem) {
        var textdata = elem.textContent;
        var splittedtext = textdata.split("")
        var clutter = "";

        splittedtext.forEach(function (val) {
            clutter += `<span>${val}</span>`

        });

        elem.innerHTML = clutter;
    })


    var tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: "#page10 #text h3 span ",
                scroller: "#main",
                // markers :true,
                start: "top 40%",
                end: "top 20%",
                scrub: 4,
            }
        }
    );
    tl.to("#page10 #text h3 span", {
        color: "#E3E3C4",
        stagger: .1,
        ease: Power4,


    })


    tl.to("#page10 #text p ", {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: Power3,

    })



    tl.to("#page10 #images #img3 ", {
        y: 10,
        opacity: 1,
        ease: Power3,
        duration: .5

    })


    tl.to(" #page10 #images #img2 ", {
        y: 10,
        opacity: 1,
        ease: Power3,
        duration: .5,
    })



    tl.to(" #page10 #images #img1 ", {
        y: 20,
        opacity: 1,
        ease: Power3,
        duration: .5,
    })


    tl.to(".bottom-navigate", {
        opacity: 1,
        y: -20,
        duration: 0.5,
        ease: Power3,
    })



}
page10animate()




function page11animation() {



    var tl11 = gsap.timeline();

    tl11.to("#text11 h3, #text11 p", {
        opacity: 1,
        duration: .5,
        ease: Power3,
        y: -35,
        stagger: .1,
        scrollTrigger: {
            trigger: "#text11",
            scroller: "#main",
            // markers :true,
            start: "top 15%",
            end: "top 0",
            scrub: 3,
        }

    })

        .to("#contents img", {
            opacity: 1,
            duration: .5,
            ease: Power3,
            y: -35,



            scrollTrigger: {
                trigger: "#contents img",
                scroller: "#main",
                // markers :true,
                start: "top 20%",
                end: "top 5%",
                scrub: 3,
            }

        }, 'r')

        .to("#contents #textright h3, #contents #textright p, #contents  #textright #btn11", {

            opacity: 1,
            duration: .5,
            ease: Power3,
            y: -20,
            stagger: .1,



            scrollTrigger: {
                trigger: "#textright",
                scroller: "#main",
                // markers :true,
                start: "top 20%",
                end: "top 5%",
                scrub: 3,
            }

        }, 'r')


        .to("#content2 img", {
            opacity: 1,
            duration: .5,
            ease: Power3,
            y: -35,



            scrollTrigger: {
                trigger: "#content2 img",
                scroller: "#main",
                // markers :true,
                start: "top 35%",
                end: "top 10%",
                scrub: 3,
            }
        }, 'm')

        .to("#content2 #text-left h3, #content2 #text-left p, #content2  #text-left #btn12", {

            opacity: 1,
            duration: .5,
            ease: Power3,
            y: -20,
            stagger: .1,


            scrollTrigger: {
                trigger: "#content2 img",
                scroller: "#main",
                // markers :true,
                start: "top 35%",
                end: "top 10%",
                scrub: 3,
            }

        }, 'm')
}
page11animation();



function page12() {
    gsap.to("#page12 .overlay-elem", {
        opacity: 1,
        y: "-30",
        ease: Power4,


        scrollTrigger: {
            trigger: ".overlay-elem",
            scroller: "#main",
            // markers :true,
            start: "bottom 110%",
            end: "top 40%",
            scrub: 3,

        }
    })
}
page12();




function cursormove(){
    var cursor = document.querySelector("#cursor");
var body = document.querySelector("body");

body.addEventListener("mousemove", function(dets){

    cursor.style.top   = dets.clientY + "px";
    cursor.style.left   = dets.clientX + "px";

})


}
cursormove();




function scollmousewheeleventhandling(){
    
    document.addEventListener("wheel", function(dets){

        if(dets.offsetY > 600){
           if(dets.deltaY > 0){
               gsap.to("#nav", {
                   opacity : 0,
                   ease:Power3,
       
               })
           }
        }
   
       if(dets.deltaY < 0){
           gsap.to("#nav", {
               opacity:1,
               backgroundColor : "F7F7EE",
               ease:Power3,
           })
       }
   
   })
}

scollmousewheeleventhandling();

