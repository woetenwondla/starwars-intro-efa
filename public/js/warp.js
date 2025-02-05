import { Star } from './star.js';

const stars = [];
const minSpeed = 1;
const speedChange = 0.2;
let canvas;
let increaseSpeed = false;

export function setIncreaseSpeedTrue() {
    increaseSpeed = true;
}

export function setIncreaseSpeedFalse() {
    increaseSpeed = false;
}

export function warpAnimation() {
    canvas = document.getElementById('stars');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        const loc = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };
        stars.push(new Star(loc));
    }
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < 100; i++) {
        stars[i].draw(ctx);
    }
    animate();
}

function animate() {
    if (increaseSpeed) {
        increaseStarSpeed();
    } else {
        decreaseSpeedUntilMinSpeedHit();
    }
    Star.speed = Math.max(minSpeed, Math.min(Star.speed, Star.maxSpeed));
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
    }
    for (let i = 0; i < stars.length; i++) {
        stars[i].draw(ctx);
    }

    window.requestAnimationFrame(animate);
}

function increaseStarSpeed() {
    Star.speed += speedChange;
}

function decreaseSpeedUntilMinSpeedHit() {
    if (Star.speed >= minSpeed) {
        Star.speed -= speedChange;
    }
}
