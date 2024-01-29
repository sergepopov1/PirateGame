import CanvasRenderer from '../CanvasRenderer.js';
export default class Boy {
    posX;
    posY;
    image;
    maxX;
    speed = 0.4;
    movingLeft = false;
    movingRight = false;
    constructor(canvasWidth, canvasHeight) {
        this.image = CanvasRenderer.loadNewImage('assets/boy.png');
        this.posX = canvasWidth - 200;
        this.posY = canvasHeight - 250;
        this.maxX = canvasWidth;
    }
    moveLeft() {
        this.movingLeft = true;
    }
    moveRight() {
        this.movingRight = true;
    }
    update(elapsed) {
        if (this.movingLeft) {
            this.posX -= this.speed * elapsed;
            if (this.posX < 0) {
                this.posX = 0;
            }
            this.movingLeft = false;
        }
        if (this.movingRight) {
            this.posX += this.speed * elapsed;
            if (this.posX + (this.image.width) > this.maxX) {
                this.posX = this.maxX - (this.image.width);
            }
            this.movingRight = false;
        }
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Boy.js.map