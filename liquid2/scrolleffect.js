let controller = new ScrollMagic.Controller();

const keypaddiv = document.querySelector(".keypad");

const cover = document.querySelector(".cover");

let keypadduration = 1500 + window.innerHeight;

let scene = new ScrollMagic.Scene({ triggerElement: keypaddiv, duration: keypadduration, triggerHook: 0 })
    .setPin(keypaddiv)
    .addTo(controller);

scene.on("update", e => {
    position = e.scrollPos;
    position -= window.innerHeight;
    width = position * 0.05;
    width = 95 - width;
    console.log("Position: " + position + " & Width: " + width + "");
    if (position > 10) {
        cover.style.width = "" + width + "vw";
        if (width < 2) {
            cover.style.opacity = "0";
        } else {
            cover.style.opacity = "1";
        }
    } else {
        cover.style.width = "95vw";
    }
});