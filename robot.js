const directions = ['north', 'east', 'south', 'west'];

class Robot {
  getInstruction(char) {
    switch(char) {
      case "L":
        return "turnLeft";
      case "R":
        return "turnRight";
      case "A":
        return "advance";
      default:
        return null;
    }
  }

  instructions(instruction) {
    const chars = instruction.split('');
    return chars.map(c => {
      return this.getInstruction(c);
    });
  }

  advance() {
    if (this.bearing == "north") {
      this.coordinates[1]++;
    } else if (this.bearing == "east") {
      this.coordinates[0]++;
    } else if (this.bearing === "south") {
      this.coordinates[1]--;
    } else {
      this.coordinates[0]--;
    }
  }

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
