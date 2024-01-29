import CanvasRenderer from '../CanvasRenderer.js';
export default class Character {
    characterImage;
    height;
    width;
    posX;
    posY;
    startMapX;
    startMapY;
    speed;
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getSpriteSheetWidth() {
        return this.characterImage.width;
    }
    getSpriteSheetHeight() {
        return this.characterImage.height;
    }
    getHeight() {
        return this.characterImage.height;
    }
    getWidth() {
        return this.characterImage.width;
    }
    getStartMapX() {
        return this.startMapX;
    }
    getStartMapY() {
        return this.startMapY;
    }
    render(canvas, maxX, maxY) {
        CanvasRenderer.drawImage(canvas, this.characterImage, maxX / 2, maxY / 2);
    }
}
//# sourceMappingURL=Character.js.map