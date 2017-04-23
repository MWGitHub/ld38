import * as PIXI from 'pixi.js';

class Game {
  private app: PIXI.Application;

  constructor(element: HTMLCanvasElement) {
    this.app = new PIXI.Application({
      width: 880,
      height: 550,
      view: element
    });
  }

  tick(): void {

  }

  start(): void {
    this.tick();
  }
}

function start(element: HTMLCanvasElement) {
  const game = new Game(element);
  
  game.start();
}

export {
  start
};