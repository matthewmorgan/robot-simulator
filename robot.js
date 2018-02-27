class Robot {
  orient(currentDirection) {
    this.bearing = currentDirection;
    if (currentDirection === "crood") {
      throw "Invalid Robot Bearing";
    }
  }
}

export default Robot
