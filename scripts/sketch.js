const WIDTH = 500;
const HEIGHT = 800;

let ball;
let ball2;

function setup() {
    createCanvas(HEIGHT, WIDTH);

    ball = new Ball(100, 100, 50, 5);
    ball2 = new Ball(100, 700, 20, 10);
}

function draw() {
    background(200);
    ball.update();
    ball2.update();
}

