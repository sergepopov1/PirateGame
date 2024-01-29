import GameLoop from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Correct from './Correct.js';
import Player from './Player.js';
import Wrong from './Wrong.js';
import ScoreItem from './ScoreItem.js';

console.log('Script loaded and running.');

export default class SubmarineGame extends GameLoop {
  private canvas: HTMLCanvasElement;

  private scoreItems: ScoreItem[];

  private player: Player;

  private keyListener: KeyListener;

  private yourScore: number;

  private timeElapsed: number;

  private timeToNext: number;

  private nextPasswordsDrop: number;

  private gamePaused: boolean;

  private backgroundImage: HTMLImageElement = CanvasRenderer.loadNewImage('./assets/bg.png');

  private startScreenImage: HTMLImageElement = CanvasRenderer.loadNewImage('./assets/seabg.png');

  private gameStarted: boolean = false;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();

    this.yourScore = 0;
    this.timeElapsed = 0;

    this.timeToNext = Math.random() * 500;

    this.nextPasswordsDrop = 1000;

    this.scoreItems = [];
    this.player = new Player(this.canvas.width, this.canvas.height);

    this.gamePaused = false;
  }

  /**
   * Create a new item
   *
   */
  private makeItem(): void {
    if (Math.random() > 0.5) {
      this.scoreItems.push(new Wrong(this.canvas.width, this.canvas.height));
    } else {
      this.scoreItems.push(new Correct(this.canvas.width, this.canvas.height));
    }
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (!this.gameStarted && this.keyListener.keyPressed(KeyListener.KEY_E)) {
      this.gameStarted = true;
    }

    if (this.keyListener.keyPressed(KeyListener.KEY_P)) {
      this.gamePaused = !this.gamePaused;
    }

    if (!this.gamePaused && this.gameStarted) {
      if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
        this.player.moveUp();
      }
      if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
        this.player.moveDown();
      }
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    if (this.gamePaused || !this.gameStarted) {
      return true;
    }

    if (this.state === GameLoop.STATE_STOPPING || this.gamePaused || !this.gameStarted) {
      return false;
    }

    this.timeElapsed += elapsed;

    console.log('Time Elapsed:', this.timeElapsed);

    if (this.timeElapsed > 50000) {
      console.log('Stopping the game');
      this.stop();
      return false;
    }

    this.player.update(elapsed);
    this.scoreItems.forEach((item: ScoreItem) => item.update(elapsed));

    // Loop through all the items and check if they collide with the player
    // Remove all items that are out of the screen
    this.scoreItems = this.scoreItems.filter((item: ScoreItem) => {
      if (this.player.itemCollided(item)) {
        this.yourScore += item.getShieldValue();
        return false;
      }
      return (item.getPosX() > 0);
    });

    this.timeToNext -= elapsed;
    if (this.timeToNext < 0) {
      this.makeItem();
      this.timeToNext = 4000;
    }

    this.nextPasswordsDrop -= elapsed;
    if (this.nextPasswordsDrop <= 0) {
      this.makeItem();
      this.nextPasswordsDrop = 2000;
    }

    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);

    if (!this.gameStarted) {
      CanvasRenderer.drawImage(this.canvas, this.startScreenImage, 0, 0);
    } else {
      CanvasRenderer.drawImage(this.canvas, this.backgroundImage, 0, 0);

      this.player.render(this.canvas);
      this.scoreItems.forEach((item: ScoreItem) => item.render(this.canvas));

      if (this.timeElapsed > 50000 && this.yourScore > 10) {
        CanvasRenderer.writeText(this.canvas, `You won, your final score is: ${this.yourScore}`, this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
      } else if (this.timeElapsed > 50000 && this.yourScore < 0) {
        CanvasRenderer.writeText(this.canvas, `Try again, your final score is: ${this.yourScore}`, this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
      }

      if (this.gamePaused) {
        CanvasRenderer.writeText(this.canvas, 'GAME PAUSED', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
      }

      CanvasRenderer.writeText(this.canvas, `Score: ${this.yourScore}`, 10, 45, 'left', 'Arial', 32, 'white');
      CanvasRenderer.writeText(this.canvas, `Time: ${Math.ceil(this.timeElapsed / 1000)}`, 10, 85, 'left', 'Arial', 32, 'white');
    }
  }
}
