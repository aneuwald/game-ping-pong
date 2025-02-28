let x = 0;
let y = 0;
let showBall = false;

function setup() {
    createCanvas(800, 900);
}

function mousePressed() {
    x = mouseX;
    y = mouseY;
    showBall = true;
}

function draw() {
    background(200);

    if (showBall) {
        ellipse(x, y, 30, 30);
    }
}