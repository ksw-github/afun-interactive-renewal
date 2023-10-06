var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax2"})
.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax3"})
.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// 스무스 스크롤바
// var Scrollbar = window.Scrollbar;
// Scrollbar.initAll();

// import Scrollbar from 'smooth-scrollbar';
// Scrollbar.init(document.querySelector('#my-scrollbar'), options);