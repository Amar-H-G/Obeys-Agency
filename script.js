//timer
// let h5Timer = document.querySelector("#line1-part1 h5");
// let grow = 0;
// let timer = setInterval(() => {
//   if (grow < 100) {
//     grow++;
//     h5Timer.textContent = grow;
//   } else {
//     h5Timer.textContent = grow;
//   }
// }, 35);

//Timeline

//Loader Hide

let tl = gsap.timeline();
//loder
tl.from(".line h1", {
  y: 150,
  stagger: 0.3,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  // when start then it execute
  onStart: function () {
    let h5Timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    let timer = setInterval(() => {
      if (grow < 100) {
        grow++;
        h5Timer.textContent = grow;
      } else {
        h5Timer.textContent = grow;
      }
    }, 35);
  },
});
tl.to(".line h2", {
  animationName: "nowAnim",
  opacity: 1,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3.8,
});

tl.from("#page1", {
  y: 1600,
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
});

tl.to("#loader", {
  display: "none",
});
