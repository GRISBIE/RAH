let cowGif;


function preload() {
  cowGif = loadImage('/assets/polishcow.gif');
}

function setup() {
  createCanvas(800, 600);
}	
function draw() {
  background(255,255,0);
  image(cowGif, 0, 0);
}