let cowGif;

// Use a DOM <img> so the browser keeps the GIF animating.
// We draw the current frame into the p5 canvas every tick.
function setup() {
  createCanvas(800, 600);

  // create a DOM image that the browser will animate
  cowGif = createImg('assets/polishcow.gif');

  // keep it rendering but visually negligible so the GIF keeps animating
  // (display:none or completely off-screen can cause some browsers to pause GIFs)
  cowGif.style('position', 'absolute');
  cowGif.style('left', '0px');
  cowGif.style('top', '0px');
  cowGif.style('width', '1px');
  cowGif.style('height', '1px');
  cowGif.style('opacity', '0.01');

  console.log('DOM cowGif created:', cowGif.elt);
}

function draw() {
  background(255, 255, 0);

  // draw the current animated frame from the underlying HTMLImageElement
  if (cowGif && cowGif.elt && cowGif.elt.complete) {
    // drawImage keeps using the current animated frame from the browser
    drawingContext.drawImage(cowGif.elt, 0, 0, width, height);
  } else {
    // fallback while loading
    fill(0);
    textAlign(CENTER, CENTER);
    text('loading...', width / 2, height / 2);
  }
}