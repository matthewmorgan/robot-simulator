const directions = ['north', 'east', 'south', 'west'];

class Robot {
  at(x, y) {
    this.coordinates = [x, y];
  }

  orient(currentDirection) {
    if (!directions.includes(currentDirection)) {
      throw "Invalid Robot Bearing";
    }
    this.bearing = currentDirection;
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
        this.bearing = "east";
        break;
      case "east":
        this.bearing = "south";
        break;
      case "south":
        this.bearing = "west";
        break;
      default:
        this.bearing = "north";
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.bearing = "west";
        break;
      case "east":
        this.bearing = "north";
        break;
      case "south":
        this.bearing = "east";
        break;
      default:
        this.bearing = "south";
    }
  }



}

export default Robot
