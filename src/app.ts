import GoofyGoobers from './GoofyGoobers.js';

const game: GoofyGoobers = new GoofyGoobers(document.getElementById('canvas') as HTMLCanvasElement);

window.addEventListener('load', () => {
  game.start();
});
