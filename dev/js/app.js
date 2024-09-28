// init controller
let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: ".index_about",
})
.setClassToggle(".top_pic", "zap")
.addTo(controller);