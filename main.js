

barba.init({
    transitions: [{
        name: 'first-barba',
        leave(data) {
            return gsap.to(data.current.container,1,  {
                opacity:0
            });
        },
        enter(data) {
            return gsap.from(data.next.container,1,  {
                opacity:0,
            })
        }
    }]
});