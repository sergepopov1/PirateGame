import CanvasRenderer from '../CanvasRenderer.js';
import SceneItem from './Character.js';
export default class TopDownPlayer extends SceneItem {
    walkUp = false;
    walkRight = false;
    walkDown = false;
    walkLeft = false;
    collisionOffsetTop;
    collisionOffsetBottom;
    mapX;
    mapY;
    constructor() {
        super();
        this.characterImage = CanvasRenderer.loadNewImage('../../assets/characterFront.png');
        this.posX = 0;
        this.posY = 0;
        this.speed = 0.12;
        this.startMapX = 21;
        this.startMapY = 31;
        this.width = this.characterImage.width;
        this.height = this.characterImage.height;
        this.collisionOffsetTop = 7;
        this.collisionOffsetBottom = 3;
    }
    movingUp() {
        this.walkUp = true;
    }
    movingRight() {
        this.walkRight = true;
    }
    movingDown() {
        this.walkDown = true;
    }
    movingLeft() {
        this.walkLeft = true;
    }
    update(elsapsed, tileX, tileY) {
        if (this.walkUp) {
            this.characterImage = CanvasRenderer.loadNewImage('../../assets/characterBack.png');
            this.posY += elsapsed * this.speed;
            this.walkUp = false;
        }
        if (this.walkRight) {
            this.characterImage = CanvasRenderer.loadNewImage('../../assets/characterRight.png');
            this.posX -= elsapsed * this.speed;
            this.walkRight = false;
        }
        if (this.walkDown) {
            this.characterImage = CanvasRenderer.loadNewImage('../../assets/characterFront.png');
            this.posY -= elsapsed * this.speed;
            this.walkDown = false;
        }
        if (this.walkLeft) {
            this.characterImage = CanvasRenderer.loadNewImage('../../assets/characterLeft.png');
            this.posX += elsapsed * this.speed;
            this.walkLeft = false;
        }
    }
    getMapX(backGroundPosX) {
        const offsetX = Math.round(backGroundPosX) - 10;
        this.mapX = Math.abs(offsetX);
        return this.mapX;
    }
    getMapY(backgroundPosY) {
        const offsetY = Math.round(backgroundPosY) - 7;
        this.mapY = Math.abs(offsetY);
        return this.mapY;
    }
}
//# sourceMappingURL=TopDownPlayer.js.map