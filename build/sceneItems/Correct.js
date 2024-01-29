import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Correct extends ScoreItem {
    constructor(maxX, maxY) {
        super();
        this.posX = maxX;
        this.posY = (Math.random() * maxY);
        let image;
        const randomImage = Math.random();
        if (randomImage > 0.9) {
            image = './assets/strong1.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +1;
        }
        else if (randomImage > 0.8) {
            image = './assets/strong2.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +5;
        }
        else if (randomImage > 0.7) {
            image = './assets/strong3.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +10;
        }
        else if (randomImage > 0.6) {
            image = './assets/strong4.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +15;
        }
        else if (randomImage > 0.5) {
            image = './assets/strong5.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +20;
        }
        else if (randomImage > 0.4) {
            image = './assets/strong6.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +25;
        }
        else if (randomImage > 0.3) {
            image = './assets/strong7.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +30;
        }
        else if (randomImage > 0.2) {
            image = './assets/strong8.png';
            ;
            this.speed = 0.06;
            this.shieldModifier = +40;
        }
        else if (randomImage > 0.1) {
            image = './assets/strong9.png';
            this.speed = 0.06;
            this.shieldModifier = +50;
        }
        else {
            image = './assets/strong10.png';
            this.speed = 0.06;
            this.shieldModifier = +100;
        }
        this.image = CanvasRenderer.loadNewImage(image);
    }
    update(elapsed) {
        this.posX -= elapsed * this.speed;
    }
}
//# sourceMappingURL=Correct.js.map