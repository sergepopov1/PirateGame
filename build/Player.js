import CanvasRenderer from './CanvasRenderer.js';
export default class Player {
    image;
    posX;
    posY;
    maxY;
    doAccelerate;
    acceleration = 0;
    constructor(canvasWidth, canvasHeight) {
        this.posX = 500;
        this.posY = canvasHeight / 2;
        this.image = CanvasRenderer.loadNewImage('assets/ship.png');
        this.maxY = canvasHeight;
        this.doAccelerate = 0;
    }
    itemCollided(item) {
        return (item.getPosX() < this.posX + this.image.width
            && item.getPosX() + item.getWidth() > this.posX
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() < this.posY + this.image.height);
    }
    moveUp() {
        this.doAccelerate = -1;
    }
    moveDown() {
        this.doAccelerate = 1;
    }
    update(elapsed) {
        if (this.doAccelerate !== 0) {
            this.acceleration += this.doAccelerate * (elapsed * 0.005);
            this.doAccelerate = 0;
        }
        this.posY += (this.acceleration * (elapsed / 10));
        if (this.posY < 0 - (this.image.height / 2)) {
            this.posY = this.maxY - (this.image.height / 2);
        }
        if (this.posY + (this.image.height / 2) > this.maxY) {
            this.posY = 0 - (this.image.height / 2);
        }
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Player.js.map