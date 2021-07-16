const scroll = 0.8;
const _options = {
    root: null,
    rootMargin: '-100% 0px 100% 0px',
    threshold: 1 - scroll,
}

const func = (target) => {
    if (!target.isIntersecting) {
        document.getElementById('body-content').innerHTML = 'hogehoge';
    } else {
        document.getElementById('body-content').innerHTML = '';
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
