let t1 = gsap.timeline();

t1.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6, 
  delay: 0.5,
});

t1.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    let h5timer = document.querySelector("#line1-part1 h5");
    let grow = 0;

    setInterval(() => {
      if (grow < 100) {
        grow++;
        h5timer.innerHTML = grow;
      } else {
        h5timer.innerHTML = grow;
        clearInterval();
      }
    }, 35);
  },
});

t1.to(".line h2", {
    animationName: "anime",
    opacity:1
})

t1.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3.4,
});

t1.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:1,
    duration: 0.5,
    ease: Power4
})

t1.to("#loader",{
    display: "none"
})