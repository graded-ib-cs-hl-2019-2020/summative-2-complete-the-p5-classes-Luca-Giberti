//Make only move in X
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-5, 5);
    private ySpeed: number = random(-5, 5);
    private stopped: boolean = false;
    private color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    private borderColor: string = this.color;

    public getX() { return this.x }
    public setX(x: number) { this.x = x }
    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {

        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);

    }

    public move(): void {

// need to make transparent
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;

            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;

        }
    }
}
