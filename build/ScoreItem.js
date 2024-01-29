import CanvasRenderer from './CanvasRenderer.js';
export default class ScoreItem {
    posX;
    posY;
    image;
    shieldModifier;
    speed = 0;
    constructor() {
        this.shieldModifier = 0;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
    getPosY() {
        return this.posY;
    }
    getPosX() {
        return this.posX;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    getShieldValue() {
        return this.shieldModifier;
    }
}
//# sourceMappingURL=ScoreItem.js.map