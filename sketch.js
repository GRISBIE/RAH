let cowGif;


function preload() {
  cowGif = loadImage('/assets/polishcow.gif');
}

function setup() {
  createCanvas(800, 600);
}	
function draw() {
  background(220);
  image(cowGif, 0, 0);
}