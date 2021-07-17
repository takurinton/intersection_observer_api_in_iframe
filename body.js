const scroll = 0.8;
const _options = {
    root: null,
    rootMargin: '-100% 0px 100% 0px',
    // threshold: [...Array(10)].map((_, i) => i/10),
    threshold: 1 - scroll,
}

const func = (target) => {
    if (!target.isIntersecting) {
        console.log('80% here')
    } else {
        console.log('out of viewport')
    }
}

const onChange = (t, options, func) => {
    const observer = new IntersectionObserver(targets => {
        targets.forEach(target => {
            func(target);
        });
    }, options);
    observer.observe(t)
}

onChange(document.body, _options, func);
