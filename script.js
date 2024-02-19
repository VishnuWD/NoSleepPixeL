const loader = document.querySelector(".loader__container")
const body = document.querySelector("body")
const a = document.querySelector("a")

window.addEventListener("load", function () {
    loader.style.display = "none"
})

window.addEventListener("blur", () => document.querySelector("title").text = "NS Pixel ~ See you 👋")
window.addEventListener("focus", () => document.querySelector("title").text = "NS Pixel ~ Creative Web Design Team")

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






// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         var att = elem.getAttribute("data-image")
//         crsr.style.width = "470px"
//         crsr.style.height = "370px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
//     })
//     elem.addEventListener("mouseleave",function(){
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})