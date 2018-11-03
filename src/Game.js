import Level from './Logic/Level/Level';

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
     */
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.canvas.style.border = '1px solid';

    /**
     * Save context.
     */
    this.context = this.canvas.getContext("2d");

    let level = new Level;

    // console.log( level.createDungeon() )

    level.render( this.context );
  }
}

export default Game