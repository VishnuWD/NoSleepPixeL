const loader = document.querySelector(".loader__container")
const body = document.querySelector("body")
const a = document.querySelector("a")

window.addEventListener("load", function () {
    loader.style.display = "none"
})



var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})


gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top -10%",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "95%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        // markers:true,
        start: "top -105%",
        end: "top -115%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})



function shareUrl() {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this website!',
        text: 'I found this interesting website and thought you might like it.',
        url: window.location.href
      })
      .then(() => alert('Successfully shared'))
      .catch((error) => alert('Error sharing:', error));
    } else {
      alert("Web Share API not supported. You can manually copy the URL to share.");
    }
  }

