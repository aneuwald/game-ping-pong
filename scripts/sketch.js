const WIDTH = 900;
const HEIGHT = 1600;

const NUM_BALLS = 100;

const balls = [];

function setup() {
    createCanvas(HEIGHT, WIDTH);

    for (let i = 0; i < NUM_BALLS; i++) {
        const x = random(HEIGHT);
        const y = random(WIDTH);
        const size = random(10, 100);
        const velocity = random(2, 15);
        const cor = color(random(255), random(255), random(255));

        const newBall = new Ball(x, y, size, velocity, i, cor);

        balls.push(newBall);
    }
}

function draw() {
    background(200);

    for (let i = 0; i < NUM_BALLS; i++) {
        balls[i].update();
    }
}

