"use client"

import Image from "next/image";
import Loading from "./components/Loading";
import Curser from "./components/Curser";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
import Technolgies from "./components/Technologies";
import SchedulingButton from "./components/sub components/SchedulingButton";


gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  useEffect(() => {
    gsap.from(".page1 h2,.page1 h3", {
      // y: 10,
      // delay: 0.3,
      // duration: 0.1
    })
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h2",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top -10%",
        scrub: 3
      }
    })
    tl.to(".page1 h2", {
      x: -100,
    }, "anim")
    tl.to(".page1 h3", {
      x: 100
    }, "anim")
    tl.to(".page1 video", {
      width: "95%"
    }, "anim")

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h2",
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
        trigger: ".page1 h2",
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

    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h2",
        scroller: "body",
        // markers:true,
        start: "top -105%",
        end: "top -115%",
        scrub: 3
      }
    })

    tl4.to("#nav", {
      backgroundColor: "#0F0D0D"
    })

    // return () => {
    //   second
    // }
  }, [])


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


  return (
    <>

      <Loading />
      <Curser />

      <main className="main">
        <p className="fixed right-0 top-1/3 origin-bottom-right -rotate-90 bg-[#EDBFFF] px-5 py-3 rounded-[20px_20px_0_0] text-[#0F0D0D] font-extrabold text-[2vmin] z-[500] border-[#0F0D0D] border-2 border-b-0">Under Development 🚧</p>
        <header className="page1">

          <h2 className="bigh1">Code, Design,</h2>
          <h3 className="bigh2">Delight, & Deliver.</h3>
          <p>We create websites that are attractive and easy to use.</p>
          <video autoPlay muted loop src="/media/bgbig.webm"></video>

        </header>
        <div className="page2">
          <h2>We are NoSleepPixel 🌙 Team,</h2>
          <div className="page2-container">
            <div className="page2-left">
              <h3>A CREATIVE
                COLLECTIVE
                MADE TO UNLOCK
                <span>YOUR WEBSITE</span>
                POTENTIAL
              </h3>
            </div>
            <div className="page2-right">
              <h1>We blend strategic vision with creative finesse, crafting compelling digital experiences. Our
                tailored approach brings Eye-Catching web design and Responsive Web Solutions to life,
                born in IN - Serving clients globally</h1>
              <button>About us</button>
            </div>
          </div>

        </div>
        <div className="page3">

          <h2>We work on many things</h2>


          <div className="page3-part1">
            <div>

              <Image height={350} width={350} src="/media/ecom.jpg" title="E-commerece" alt="showing an e-commerece website example image" />
              <h3>E-Commerce</h3>
            </div>

            <div>
              <video autoPlay loop muted
                src="/media/memo&invite.mp4"></video>
              <h3>Invitations & Memories </h3>

            </div>
          </div>
          <div className="page3-part2">
            <div>
              <Image height={250} width={500}
                src="/media/personalsite.webp" title="Personal Website"
                alt="showing a personal website example image" />
              <h3>Personal Website & Portfolios</h3>

            </div>
            <div>
              <video autoPlay loop muted
                src="/media/business&ads.mp4"></video>
              <h3>Business & ADs</h3>

            </div>
          </div>

        </div>

        <Technolgies />

        <section className="page4">
          <div className="elem elem1">
            <Image height={350} width={350} src="/media/design1.webp" title="wireframe design" alt="showing an image of a designing tablet where it shows the wireframe of an application website" />
            <div className="text-div">
              <h2>Design</h2>
              <h2>Design</h2>
            </div>
            <Image height={150} width={150} src="/media/design 2.webp" title="web designing UI/UX" alt="An Image of guy looking at the screen where he is designing a website" />
          </div>
          <div className="elem">
            <Image height={150} width={150} src="/media/frontend 1.webp" title="Frontend code" alt="An Image of computer screeens where there is frontend development like css and other things" />
            <div className="text-div">
              <h2>Frontend</h2>
              <h2>Frontend</h2>
            </div>
            <Image height={150} width={150} src="/media/frontend 2.webp" title="Making a Webiste" alt="the image represents a guy making a website in his laptop" />
          </div>
          <div className="elem">
            <Image height={150} width={150} src="/media/backend 2.webp" title="Backend code" alt="Image shows there is a lot of backend code and javascript" />
            <div className="text-div">
              <h2>Backend</h2>
              <h2>Backend</h2>
            </div>
            <Image height={150} width={150} src="/media/backend 1.webp" title="full stack website" alt="Image shows a person coding a full stack website using different technologies and frameworks" />
          </div>
        </section>

        <article id="types" className="page5">
          <h2>Common Questions</h2>
          <details className="box">
            <summary>Will I be able to update the content on my website easily?</summary>
            <p>Yes, we design websites with user-friendly content management that allow you to easily edit text, images, and
              other content without needing technical expertise.</p>
          </details>
          <details className="box">
            <summary>How long will it take to complete my website?</summary>
            <p>The timeline for completing a website can vary depending on the complexity of the project and our current
              workload. However, we'll work closely with you to establish a timeline that meets your needs and keeps you
              informed of our progress along the way.</p>
          </details>
          <details className="box">
            <summary>Do you provide hosting services for my website?</summary>
            <p>While we don't directly offer hosting services, we can assist you in selecting a reliable hosting provider
              that best suits your needs. We'll ensure that your website is set up properly on the chosen hosting platform
              for optimal performance.</p>
          </details>
          <details className="box">
            <summary>What happens if I encounter issues with my website after it's launched?</summary>
            <p>We offer ongoing support and maintenance services to address any issues that may arise with your website
              after it's launched. Simply reach out to us, and we'll work quickly to resolve any issues and ensure your
              website continues to perform optimally.</p>
          </details>
          <details className="box">
            <summary>Will my website be mobile-friendly?</summary>
            <p>Yes, all the websites we design are responsive, meaning they adapt and display properly on various devices
              such as smartphones, tablets, and desktops. This ensures that your website provides a seamless user experience
              across different screen sizes.</p>
          </details>
        </article>
        <footer id="FOOTER" className="footer">


          <div className="container">
            <div className="footer_inner">

              <div className="layout">
                <div className="layout_item w-50">

                  <h3 className="newsletter_title">We love hearing from our visitors! Whether you have a question, a suggestion,
                    or just want to say hello, feel free to reach out to us. We'll do our best
                    to get back to you as soon as possible.</h3>

                </div>


                <div className="contactLinks">
                  <h2>Contact</h2>
                  <SchedulingButton/>
                  <Link target="_blank" className="text-[6vmin] md:text-[3vmin]" href="mailto:nosleeppixel@gmail.com">nosleeppixel@gmail.com</Link>
                  <a className="footer_insta" href="https://www.instagram.com/nosleeppixel" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2476 2476" id="instagram">
                      <path
                        d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5">
                      </path>
                    </svg>Instagram</a>
                  <p className="footer_share" onClick={shareUrl}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72 72">
                      <path
                        d="M 48.730469 10.037109 C 43.199469 10.037109 38.699219 14.536359 38.699219 20.068359 C 38.699219 20.437847 38.720642 20.802863 38.759766 21.162109 L 26.601562 27.328125 C 25.073599 26.394326 23.285065 25.847656 21.367188 25.847656 C 15.810188 25.847656 11.287109 30.367781 11.287109 35.925781 C 11.287109 41.483781 15.810188 46.005859 21.367188 46.005859 C 23.359628 46.005859 25.213692 45.415871 26.779297 44.414062 L 39.017578 51.464844 C 39.006915 51.653493 38.990234 51.83998 38.990234 52.03125 C 38.990234 57.54025 43.471469 62.023438 48.980469 62.023438 C 54.489469 62.023437 58.972656 57.54025 58.972656 52.03125 C 58.972656 46.52225 54.488469 42.041016 48.980469 42.041016 C 46.546917 42.041016 44.317171 42.919248 42.582031 44.371094 L 31.255859 37.847656 C 31.376646 37.224963 31.445312 36.583265 31.445312 35.925781 C 31.445312 35.278544 31.378857 34.646813 31.261719 34.033203 L 42.832031 28.164062 C 44.490112 29.375707 46.524474 30.101562 48.730469 30.101562 C 54.261469 30.101562 58.763672 25.600359 58.763672 20.068359 C 58.763672 14.536359 54.261469 10.037109 48.730469 10.037109 z">
                      </path>
                    </svg>
                    Share URL
                  </p>
                </div>
                <div className="footer_qr">
                  <Image height={150} width={150} src="/media/qr.png" title="QR Code to Scan" alt="Image shows a qr code which is used to scan to use the no sleep pixel website in a different device" />
                  <h2>Scan to open <br /> in different device</h2>
                </div>

              </div>
            </div>
            <div className="footer_copyright">
              <p>&copy; 2024 NoSleepPixel.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
