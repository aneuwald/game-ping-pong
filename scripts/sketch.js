const WIDTH = 500;
const HEIGHT = 800;

let ball;
let ball2;
let ball3;
let ball4;

function setup() {
    createCanvas(HEIGHT, WIDTH);

    ball = new Ball(100, 100, 50, 5);
    ball2 = new Ball(100, 700, 20, 10);
    ball3 = new Ball(300, 500, 15, 5 )
    ball4 = new Ball(200, 400, 150, 5)
}

function draw() {
    background(200);
    ball.update();
    ball2.update();
    ball3.update();
    ball4.update();	
}

