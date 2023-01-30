


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

const tl = gsap.timeline({
    immediateRender:false,
    scrollTrigger: {
    }
}).from(".sect2 p", {
    opacity:0,
    scrollTrigger: {
        trigger:'.sect2 p',
        scrub:true,
        start: 'top center',
        end: 'bottom center'
    }
})
.to('.sect2 p', {
    opacity:0,
    immediateRender: false,
    scrollTrigger: {
        trigger:'.sect2 p',
        scrub:true,
        start:'top+=400 center',
        end: 'top+=500 center'
    }
})
// .from('.sect3 .bubble', {
//     yPercent: '200',
//     immediateRender: false,
//     scrollTrigger: {
//         trigger:'.sect3',
//         markers:true,
//         pin:true,
//         scrub:true,
//         start: 'top top',
//         end: 'center top+=200',
//         markers: {
//             startColor: 'red',
//             endColor: 'orange'
//         }
//     }
// }).fromTo('.sect3 .bubble',{
//     opacity:1,
//     scrollTrigger: {

//     }
// })

var tl2 = gsap.timeline();
tl2.from('.sect3 .bubble', {
    y:600,
    duration:2
})
.to('.sect3 p', {
    opacity:0,
    duration:0.5
},"-=0.5")

.to('.sect3 .bubble', {
    left:900,
    scale:1.2,
    duration:2
})
.from('.sect3 h3', {
    opacity:0,
    left:600,
    duration:1
})
.to('.sect3 .bubble', {
    opacity:1,
    duration:2
} )
ScrollTrigger.create({
    trigger: '.sect3',
    pin:true,
    start:'top top',
    end: '+200%',
    scrub:true,
    animation:tl2
})

