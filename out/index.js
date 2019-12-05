import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
function setup() {
    let numBubbles = 15;
    let numBalls = 15;
    let numFlakes = 10;
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i = i + 1) {
        balls[i].draw();
        balls[i].move();
    }
    for (let i = 0; i < bubbles.length; i = i + 1) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < snowflakes.length; i = i + 1) {
        snowflakes[i].draw();
        snowflakes[i].move();
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map