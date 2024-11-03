const options = {
  strings: ['std.println("Hello! PlosClan!\\n"); //From Lumos.&ensp;'],
  typeSpeed: 50,
  startDelay: 300,
  autoInsertCss: true,
  loop: false,
};

const typed = new Typed('#typed', options);

gsap.registerPlugin(ScrollTrigger);
const responsible = document.querySelectorAll('.responsibly > *');
const intro = gsap.timeline({});
intro
    .fromTo(
        responsible, {autoAlpha: 0, y: -100},
        {autoAlpha: 1, y: 0, stagger: 0.2, duration: 0.75}, '<')
    .add('hide')
    .fromTo(
        responsible[2], {autoAlpha: 1, y: 0},
        {autoAlpha: 1, y: 0, duration: 0.75, yoyo: true, repeat: 1});
ScrollTrigger.create({
  trigger: '.responsibly',
  animation: intro,
  // pin: true,
  start: 'top center',
  end: '+=500',
  toggleActions: 'play none play none',
  onLeave: () => intro.reverse('hide')
  // onEnterBack: () => intro.play(),
  // markers: true,
});
ScrollTrigger.create({
  trigger: '.teamwork',
  animation: gsap.to('.teamwork', {autoAlpha: 0, y: -100}),
  // pin: true,
  start: 'bottom 38%',
  end: 'bottom 38%',
  toggleActions: 'play none none reverse'
  // markers: true,
});

ScrollTrigger.create({
    trigger: '.teamworkX',
    animation: gsap.to('.teamworkX', {autoAlpha: 0, y: -100}),
    // pin: true,
    start: 'bottom 5%',
    end: 'bottom 5%',
    toggleActions: 'play none none reverse'
    // markers: true,
  });

gsap.to(
    '.number',
    {innerText: 200, duration: 3, snap: {innerText: 1}, ease: 'linear'});

gsap.to(
    '.number1',
    {innerText: 79, duration: 3, snap: {innerText: 1}, ease: 'linear'});

gsap.to(
    '.number2',
    {innerText: 25, duration: 3, snap: {innerText: 1}, ease: 'linear'});
