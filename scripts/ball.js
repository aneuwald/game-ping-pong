class Ball {
    x;
    y;
    size;
    velocity;
    velX;
    velY;

    constructor(x, y, size, vel) {
        this.x = x;
        this.y = y;

        this.size = size;
        this.velocity = vel;

        this.velX = vel;
        this.velY = vel;
    }

    update() {
        
        if (this.x > WIDTH - this.size / 2) {
            this.velX = this.velocity * -1;
        }
        if (this.x < this.size / 2) {
            this.velX = this.velocity;
        }

        this.x += this.velX;
        
        if (this.y > HEIGHT - this.size / 2) {
            this.velY = this.velocity * -1;
        }
        if (this.y < this.size / 2) {
            this.velY = this.velocity;
        }

        this.y += this.velY;

        ellipse(this.y, this.x, this.size);
        textSize(this.size)
        textAlign(CENTER)
        text('alex', this.y, this.x)
    }
}
