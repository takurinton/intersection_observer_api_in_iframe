const scroll = 0.8;
const _options = {
    root: null,
    rootMargin: '-100% 0px 1000% 0px',
    threshold: 1 - scroll,
}

const _observer = new IntersectionObserver(targets => {
  for (const target of targets) {
      if (!target.isIntersecting) {
        console.log('here is 80%');
      } else {
          console.log('out of viewport');
      }
  };
}, _options);

_observer.observe(document.body)