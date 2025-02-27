class Ball {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw() {
        circle(this.x, this.y, this.size); // FIXED: Corrected coordinate order
    }
}