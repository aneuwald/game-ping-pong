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
        if (this.x < halfSize || this.x > width - halfSize || this.y < halfSize || this.y > height - halfSize) {
            const index = BULLETS.indexOf(this);
            if (index > -1) {
                if (SOUNDS.hit) {
                    SOUNDS.hit.play();
                }
                 // Remove a bala do array
                BULLETS.splice(index, 1);

                // Barulho da bala batendo
            }
        }
    }
}