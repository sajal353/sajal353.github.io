var hoverDistort1 = new hoverEffect({
    parent: document.querySelector(".imghover1"),
    intensity: 0.3,
    image1:
        "assets/liquidgrey.png",
    image2:
        "assets/liquidblue.png",
    displacementImage: "displacement-maps/heightMap.png",
    imagesRatio: 3 / 4,
    speedIn: 1.6,
    speedOut: 1.6,
    angle: 180
});

var hoverDistort2 = new hoverEffect({
    parent: document.querySelector(".imghover2"),
    intensity: 0.3,
    image1:
        "assets/liquidgrey.png",
    image2:
        "assets/liquidblue.png",
    displacementImage: "displacement-maps/heightMap.png",
    imagesRatio: 3 / 4,
    speedIn: 1.6,
    speedOut: 1.6
});