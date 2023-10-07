// 스크롤매직
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
// import Scrollbar from 'smooth-scrollbar';
var Scrollbar = window.Scrollbar;

const options = {
  'damping' : 0.1,
  'alwaysShowTracks' : true,
  // 'wheelEventTarget' : 
};

Scrollbar.init(document.querySelector("#inner-scrollbar"), options);
Scrollbar.initAll();