const _options = {
    root: null,
    rootMargin: '-100% 0px 1000% 0px',
    threshold: [.2],
}

const _observer = new IntersectionObserver((targets) => {
  for (const target of targets) {
      if (target.isIntersecting) {
        console.log('here')
      }
  };
}, _options);

_observer.observe(document.body)