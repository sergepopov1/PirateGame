import GameLoop from './GameLoop.js';
import SubmarineGame from './SubmarineGame.js';

export default class GoofyGoobers extends GameLoop {
  private canvas: HTMLCanvasElement;

  public submarineGame : SubmarineGame;

  private submarinePhase : boolean = true;

  public constructor(canvas: HTMLCanvasElement) {
    super();

    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.submarineGame = new SubmarineGame(this.canvas);
  }

  /**
   *
   * @param elapsed The elapsed time in miliseconds
   * @returns A boolean value that determines if the game should stop or not
   */
  public override update(elapsed: number): boolean {
    this.submarineGame.update(elapsed);
    return true;
  }

  /**
   * Renders the game
   */
  public override render(): void {
    this.submarineGame.render();
  }

  /**
   * Processes the input
   */
  public override processInput(): void {
    this.submarineGame.processInput();
  }
}
