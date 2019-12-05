export class Snowflake {
    constructor(x, y, size) {
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(1, 1.5);
        this.stopped = false;
        this.color = "white";
        this.borderColor = "white";
        this.x = x;
        this.y = y;
        this.size = size;
    }
    getX() { return this.x; }
    setX(x) { this.x = x; }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
        if (this.stopped == false) {
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    move() {
        if (this.stopped == false) {
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map