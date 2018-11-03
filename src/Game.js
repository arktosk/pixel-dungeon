/**
 * Game instance
 * @author Arkadiusz S. Krauzowicz
 */
class Game {
  constructor() {
    /**
     * Prepare canvas.
     */
    this.canvas = document.createElement("canvas");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }

  start() {
    /**
     * Set canvas properties and style.
     * Then render canvas.
     */
    this.canvas.width = 800;
    this.canvas.height = 480;
    this.canvas.style.border = '1px solid';
    this.context = this.canvas.getContext("2d");
  }
}

export default Game