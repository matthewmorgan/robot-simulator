class Robot {

  orient(currentDirection) {
    this.bearing = currentDirection;
    if (currentDirection === "crood") {
      throw "Invalid Robot Bearing";
    }
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

}

export default Robot
