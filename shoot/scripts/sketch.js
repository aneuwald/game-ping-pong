const WIDTH = 800;
const HEIGHT = 500;

// É importate que o array de balas esteja fora da função draw
// Assim conseguimos acessar as balas de qualquer lugar do código
const BULLETS = [];

const PLAYER = new Player(WIDTH / 2, HEIGHT / 2, 50);

const SOUNDS = {}

function preload() {
    SOUNDS.shoot = loadSound('assets/shoot.mp3');
    SOUNDS.hit = loadSound('assets/hit.mp3');
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background(200);
    PLAYER.update();
    
    for (let bullet of BULLETS) {
        bullet.update();
    }
}

// Disparar a arma ao clicar com o mouse
function mousePressed() {
    // Calcular ângulo no momento do disparo
    const dx = mouseX - PLAYER.x;
    const dy = mouseY - PLAYER.y;
    const bulletAngle = Math.atan2(dy, dx);  // FIXED: dy first, then dx

    const bulletX = PLAYER.weapon.x;
    const bulletY = PLAYER.weapon.y;
    const bulletSize = PLAYER.weapon.size * 0.9;
    const bulletVelocity = 5;

    // Criar uma nova bala
    const newBullet = new Bullet(bulletX, bulletY, bulletSize, bulletVelocity, bulletAngle);

    // Adicionar ao array
    BULLETS.push(newBullet);

    if (SOUNDS.shoot) {
        SOUNDS.shoot.play();
    }
}