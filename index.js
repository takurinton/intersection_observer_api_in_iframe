const options = {
  root: null,
  rootMargin: '0px',
  threshold: [0.5],
}
  
const observer = new IntersectionObserver((targets) => {
    for (const target of targets) {
      if (target.isIntersecting) {
        console.log(`${target.target.id} is intersecting`)
      }
    };
}, options);

const targets = document.querySelectorAll('.hoge');
targets.forEach(target => observer.observe(target));