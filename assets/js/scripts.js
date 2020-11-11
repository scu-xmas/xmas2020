
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- .content-panel (light gray)---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-panel",
    scrub: true,
    pin: true,
    start: "top top",
    end: "bottom",
    // markers: {
    //   startColor: "green",
    //   endColor: "red",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});
tl.from("h2", {
  y: -120,
  opacity: 0,
  ease: "powerEase",
  duration: 1.2,
});
tl.from("h3", {
  y: -20,
  opacity: 0,
  ease: "powerEase",
  duration: 1.2,
});

tl.from(".content-panel p", {
  opacity: 0,
  ease: "powerEase",
  start:"-=100%",
  end:"-=100%",
  y: 80,
});


// img
tl.from("img", {
    y: 40,
    scale: 0.9,
    opacity: 0,
    transformOrigin: "center center",
    ease: "power2",
    duration: 1.2,
    stagger:2,
  });

// Exit
tl.to("content-panel, p, h2, h3, img", {
  y: 40,
  scale: 0.9,
  opacity: 0,
  transformOrigin: "center center",
  ease: "power2",
  start: "+=500",
  stagger:.3,
});

gsap.utils.toArray("nav a").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
  });
});
