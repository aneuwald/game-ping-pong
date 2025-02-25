class Ball {
    x;
    y;
    size;
    velocity;
    velX;
    velY;
    text;
    cor;

    constructor(x, y, size, vel, text, cor) {
        this.x = x;
        this.y = y;

        this.size = size;
        this.velocity = vel;

        this.velX = vel;
        this.velY = vel;

        this.text = text;
        this.cor = cor;

        this.velAdd = 1;
    }

    update() {
        
        if (this.x > WIDTH - this.size / 2) {
            this.velX = this.velocity * -1;
        }

        if (this.x < this.size / 2) {
            this.velX = this.velocity;
        }
        
        if (this.y > HEIGHT - this.size / 2) {
            this.velY = this.velocity * -1;
        }

        if (this.y < this.size / 2) {
            this.velY = this.velocity;
        }

        if (mouseIsPressed) {
            this.velAdd -= 0.05;
            if (this.velAdd < 0.1) {
                this.velAdd = 0.1;
            }
        } else {
            this.velAdd += 0.05;
            if (this.velAdd > 1) {
                this.velAdd = 1;
            }
        }

        this.x += this.velX * this.velAdd;
        this.y += this.velY * this.velAdd;

        fill(this.cor);
        ellipse(this.y, this.x, this.size);

        fill(color(0));
        textSize(this.size / 2)
        textAlign(CENTER, CENTER)
        text(this.text, this.y, this.x)
    }
}
