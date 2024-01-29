import GameLoop from './GameLoop.js';
import SubmarineGame from './SubmarineGame.js';
export default class GoofyGoobers extends GameLoop {
    canvas;
    submarineGame;
    submarinePhase = true;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.submarineGame = new SubmarineGame(this.canvas);
    }
    update(elapsed) {
        this.submarineGame.update(elapsed);
        return true;
    }
    render() {
        this.submarineGame.render();
    }
    processInput() {
        this.submarineGame.processInput();
    }
}
//# sourceMappingURL=GoofyGoobers.js.map