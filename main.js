


const loadingScreen = document.querySelector('.loading-screen');
gsap.registerPlugin(ScrollTrigger);

function pageTransitionIn() {
    return gsap.to(loadingScreen, 0.5, {scaleY:1, transformOrigin:'top left'})
}
function pageTransitionOut() {
    return gsap.timeline({delay:1}).add('start').to(loadingScreen, 0.5, {scaleY:0,transformOrigin:'bottom left', delay:0.25},'start').call(contentAnimation,[container] , 'start');
}

function contentAnimation(container) {
    return gsap.timeline().from('h1',{opacity:0, translateY:10, duration:0.5})
}
barba.init({
    transitions: [{
        name: 'first-barba',
        async leave(data) {
            await pageTransitionIn();
            data.current.container.remove();
        },
        async enter(data) {
           await pageTransitionOut(data.next.container);
        }
    }]
});

const tl = gsap.timeline().from(".sect2 p", {
    opacity:0,
    scrollTrigger: {
        markers:true,
        trigger:'.sect2 p',
        scrub:true,
        start: 'top center',
        end: 'bottom center'
    }
})
.to('.sect2 p', {
    opacity:1,
    scrollTrigger: {
        markers:{
            startColor:'blue',
            endColor:'yellow'
        },
        trigger:'.sect2 p',
        scrub:true,
        start:'top+=400 center',
        end: 'top+=500 center'
    }
})