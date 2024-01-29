import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Wrong extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = (Math.random() * maxY);

    let image: string;
    const randomImage: number = Math.random();

    if (randomImage > 0.9) {
      image = './assets/weak1.png';;
      this.speed = 0.07;
      this.shieldModifier = -50;
    } else if (randomImage > 0.8) {
      image = './assets/weak2.png';;
      this.speed = 0.07;
      this.shieldModifier = -20;
    } else if (randomImage > 0.7) {
      image = './assets/weak3.png';;
      this.speed = 0.07;
      this.shieldModifier = -15;
    } else if (randomImage > 0.6) {
      image = './assets/weak4.png';;
      this.speed = 0.07;
      this.shieldModifier = -10;
    } else if (randomImage > 0.5) {
      image = './assets/weak5.png';;
      this.speed = 0.07;
      this.shieldModifier = -5;
    } else if (randomImage > 0.4) {
      image = './assets/weak6.png';;
      this.speed = 0.07;
      this.shieldModifier = -5;
    } else if (randomImage > 0.3) {
      image = './assets/weak7.png';;
      this.speed = 0.07;
      this.shieldModifier = -5;
    } else if (randomImage > 0.2) {
      image = './assets/weak8.png';;
      this.speed = 0.07;
      this.shieldModifier = -2;
    } else if (randomImage > 0.1){
      image = './assets/weak9.png';
      this.speed = 0.07;
      this.shieldModifier = +1;
    } else{
      image = './assets/weak10.png';
      this.speed = 0.07;
      this.shieldModifier = +1;
    }
    this.image = CanvasRenderer.loadNewImage(image);
  }

  /**
   * Update speed of wrong pass
   * Update position of wrong pass
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posX -= elapsed * this.speed;
  }
}
