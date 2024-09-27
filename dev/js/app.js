// init controller
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".index_about",
})
.setClassToggle(".top_pic", "zap")
.addTo(controller);