export class Snowflake {


    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-2, 2);
    private ySpeed: number = random(1, 1.5);
    private stopped: boolean = false;
    private color: string = "white";
    private borderColor: string = "white";

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

    public move(): void {

        if (this.stopped == false) {

            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

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
