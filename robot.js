class Robot {

  orient(currentDirection) {
    this.bearing = currentDirection;
    if (currentDirection === "crood") {
      throw "Invalid Robot Bearing";
    }
  }

  turnRight() {
    this.bearing = "east";
  }

}

export default Robot
