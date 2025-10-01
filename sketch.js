let cowGif;

function preload() {
    cowGif = loadImage('assets/polishcow.gif');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220, 200, 200);
    image(cowGif, 0, 0);
}
