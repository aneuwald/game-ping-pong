class Player extends Ball {
    constructor(x, y, size) {
        super(x, y, size);
        this.weapon = new Ball(x, y, size / 5);
    }

    update() {
        this.draw();
        this.updateWeapon();
        this.drawNumberOfBullet();
    }

    updateWeapon() {
        // Pegar ângulo do mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const angle = Math.atan2(dy, dx); // FIXED: dx and dy order

        // Distância da arma ao jogador
        const distance = this.size * 0.6;   
        
        // Calcular a posição da arma
        this.weapon.x = this.x + Math.cos(angle) * distance;
        this.weapon.y = this.y + Math.sin(angle) * distance;

        // Desenhar a arma
        this.weapon.draw();
    }

    drawNumberOfBullet() {
        fill(0);
        textSize(this.size / 2);
        textAlign(CENTER, CENTER);
        text(BULLETS.length, this.x, this.y);
        fill(255)
    }
}