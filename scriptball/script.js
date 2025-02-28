let showBall = false
let x = 250
let y = 100
const WIDTH = 400;
const HEIGHT = 500;

function setup() {
    createCanvas(HEIGHT, WIDTH);
}

function mousePressed(){
    showBall = true
}

function draw() {
    background(200); 
    if(showBall === true){
        circle(x, y, 25)
        if(y = HEIGHT){
            
        }
        y++
    }
} 

