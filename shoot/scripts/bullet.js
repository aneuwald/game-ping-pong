class Bullet extends Ball {
    constructor(x, y, size, velocity, angle) {
        super(x, y, size);
        this.velocity = velocity;
        this.angle = angle;
    }

    update() {
        this.move();
        this.draw();
        this.checkBounds();
    }

    move() {
        this.x += Math.cos(this.angle) * this.velocity;
        this.y += Math.sin(this.angle) * this.velocity;
    }

    checkBounds() {
        const halfSize = this.size / 2;
        if (this.x < halfSize || this.x > width - this.size || this.y < this.size || this.y > height - this.size) {
            const index = BULLETS.indexOf(this);
            if (index > -1) {
                // Barulho da bala batendo
                if (SOUNDS.hit) {
                    SOUNDS.hit.play();
                }
                 // Remove a bala do array
                BULLETS.splice(index, 1);

            }
        }
    }
}