function setup() {
  createCanvas(400, 400);
}

function draw() {
  let color = mouseIsPressed ? '#fff' : '#000';
  background(0, 0, 220);
  fill(color);
  ellipse(mouseX, mouseY, 80, 80);
}