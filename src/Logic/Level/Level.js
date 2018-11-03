import { random } from 'lodash';

import Room from '../Room/Room';

/**
 * Define consts.
 */
const GRID_HEIGHT = 32;
const GRID_WIDTH  = 32;
const MAX_ROOMS   = 15;
const ROOM_SIZE_RANGE = [3, 12];

/**
 * Level class
 * @method createDungeon Create dungeon grid.
 */
class Level {

  constructor( width = GRID_HEIGHT, height = GRID_WIDTH, maxRooms = MAX_ROOMS ) {

    this.maxRooms = maxRooms;
    this.grid = {
      columns:   width,
      rows:      height,
      structure: [],
    };

    this.createDungeon()
    this.placeRoom()
  }

  createDungeon() {
    let levelStructure = [];

    for ( let gridRow = 0; gridRow < this.grid.rows; gridRow ++ ) {
      levelStructure.push( [] );

      for ( let gridColumn = 0; gridColumn < this.grid.columns; gridColumn ++ ) {
        let randomOpacity = random( 0.3, 0.8 );
        levelStructure[gridRow].push({
          type: 0,
          color: `rgba( 0, 0, 0, ${ randomOpacity } )`
        });
      }
    }
    this.grid.structure = levelStructure;

    return this.grid;
  }

  placeRoom( currentRoom = new Room ) {    
    let x = random( 1, GRID_WIDTH  - currentRoom.width );
    let y = random( 1, GRID_HEIGHT - currentRoom.height );

    let levelStructure = this.grid.structure;

    for (let i = y; i < y + currentRoom.height; i++) {
      for (let j = x; j < x + currentRoom.width; j++) {

        let randomOpacity = random( 0.3, 0.8 );

        levelStructure[i][j] = {
          type: 'room',
          id: 'Custom Room',
          color: `rgba( 230, 250, 0, ${ randomOpacity } )`
        };
      }
    }
  
    this.grid.structure = levelStructure;
  }

  render( context ) {
    let levelStructure = this.grid.structure;

    for ( let gridRow = 0; gridRow < this.grid.rows; gridRow ++ ) {
      for ( let gridColumn = 0; gridColumn < this.grid.columns; gridColumn ++ ) {
        let gridCell = levelStructure[ gridRow ][ gridColumn ];

        context.fillStyle = gridCell.color;
        context.fillRect( gridRow * 25, gridColumn * 25, 25, 25 );
      }
    }
  }
}

export default Level