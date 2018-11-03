import { random } from 'lodash';
    
const ROOM_SIZE_RANGE = [3, 12];

/**
 * 
 */
class Room {
  constructor() {
    const [ min, max ] = ROOM_SIZE_RANGE;

    this.height = random(min, max);
    this.width = random(min,max);

    this.id = 'O';
  }
}

export default Room;