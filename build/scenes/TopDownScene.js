import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import Player from '../sceneItems/TopDownPlayer.js';
import Overworld from './Overworld.js';
import Scene from './Scene.js';
export default class TopDownScene extends Scene {
    player;
    imageAtlas;
    tileSize;
    collisionMap;
    currentWorld;
    maxX;
    maxY;
    backgroundPosX;
    backgroundPosY;
    offsetX;
    offsetY;
    moveUp = true;
    moveRight = true;
    moveDown = true;
    moveLeft = true;
    gameTrigger;
    phishyCatGame = false;
    pirateGame = false;
    constructor() {
        super();
        this.player = new Player();
        this.backgroundPosX = this.offsetX;
        this.backgroundPosY = this.offsetY;
        this.phishyCatGame = false;
        this.pirateGame = false;
        this.gameTrigger = 0;
    }
    update(elsapsed) {
        this.player.update(elsapsed, 32, 21);
        this.currentWorld = new Overworld();
        this.backgroundPosX = this.offsetX + this.player.getPosX();
        this.backgroundPosY = this.offsetY + this.player.getPosY();
        const playerMapXRight = this.player.getMapX((this.backgroundPosX + 6) / this.tileSize);
        const playerMapYSides = this.player.getMapY((this.backgroundPosY + 4) / this.tileSize);
        const playerMapXLeft = this.player.getMapX((this.backgroundPosX - 6) / this.tileSize);
        const playerMapYDown = this.player.getMapY((this.backgroundPosY) / this.tileSize);
        const playerMapXDown = this.player.getMapX((this.backgroundPosX) / this.tileSize);
        const playerMapYUp = this.player.getMapY((this.backgroundPosY) / this.tileSize);
        const playerMapXUp = this.player.getMapX((this.backgroundPosX) / this.tileSize);
        if (this.collisionMap[playerMapYDown][playerMapXDown] === 1) {
            this.moveDown = false;
        }
        else {
            this.moveDown = true;
        }
        if (this.collisionMap[playerMapYUp - 1][playerMapXUp] === 1) {
            this.moveUp = false;
        }
        else {
            this.moveUp = true;
        }
        if (this.collisionMap[playerMapYSides][playerMapXRight] === 1) {
            this.moveLeft = false;
        }
        else {
            this.moveLeft = true;
        }
        if (this.collisionMap[playerMapYSides][playerMapXLeft] === 1) {
            this.moveRight = false;
        }
        else {
            this.moveRight = true;
        }
        if (this.collisionMap[playerMapYDown][playerMapXDown] === 2) {
            this.gameTrigger = 2;
        }
        if (this.collisionMap[playerMapYDown][playerMapXDown] === 3) {
            this.gameTrigger = 3;
        }
        if (this.collisionMap[playerMapYDown][playerMapXDown] === 0) {
            this.gameTrigger = 0;
        }
    }
    render(canvas) {
        CanvasRenderer.clearCanvas(canvas);
        CanvasRenderer.drawImage(canvas, this.imageAtlas, Math.round(this.backgroundPosX), Math.round(this.backgroundPosY));
        this.player.render(canvas, this.maxX, this.maxY);
        if (this.gameTrigger !== 0) {
            CanvasRenderer.writeText(canvas, 'Press E to start', this.maxX * 0.5, this.maxY * 0.5, 'center', 'Arial', 25, 'white');
        }
    }
    processInput(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_W) && this.moveUp) {
            this.player.movingUp();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_D) && this.moveRight) {
            this.player.movingRight();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_S) && this.moveDown) {
            this.player.movingDown();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_A) && this.moveLeft) {
            this.player.movingLeft();
        }
        if (this.gameTrigger === 2 && keyListener.isKeyDown(KeyListener.KEY_E)) {
            this.phishyCatGame = true;
        }
        if (this.gameTrigger === 3 && keyListener.isKeyDown(KeyListener.KEY_E)) {
            this.pirateGame = true;
        }
    }
    resize(canvas) {
        canvas.width = 320;
        canvas.height = 190;
        canvas.style.transform = 'scale(4)';
        this.maxX = canvas.width;
        this.maxY = canvas.height;
    }
}
//# sourceMappingURL=TopDownScene.js.map