export default class Rover {
  x = 0;
  maxX;
  y = 0;
  maxY;
  z = 0; //number corresponding to the position in the directions array
  directions = ["N", "E", "S", "W"];
  constructor(xCoord, yCoord) {
    this.maxX = xCoord;
    this.maxY = yCoord;
  }
  setMaxes(mX, mY) {
    if (mX < 0 || mY < 0) return false;
    this.maxX = mX;
    this.maxY = mY;
    return true;
  }
  setStart(xCoord, yCoord, zDir) {
    if (
      xCoord > this.maxX ||
      xCoord < 0 ||
      yCoord > this.maxY ||
      yCoord < 0 ||
      !this.directions.includes(zDir)
    )
      return false;
    this.x = xCoord;
    this.y = yCoord;
    this.z = this.directions.indexOf(zDir) * 90;
    return true;
  }
  move() {
    switch (this.z) {
      case 0: //N
        this.y++;
        break;
      case 90: //E
        this.x++;
        break;
      case 180: //S
        this.y--;
        break;
      default:
        //W
        this.x--;
    }
    if (this.x < 0 || this.x > this.maxX || this.y < 0 || this.y > this.maxY) {
      return false;
    }
    return true;
  }
  rotate(dir) {
    if (dir === "L") {
      //N,W,S,E
      this.z = this.z - 90 < 0 ? 270 : this.z - 90;
    } else {
      //N,E,S,W
      this.z += 90;
      this.z = this.z === 360 ? 0 : this.z;
    }
  }
  calculate(ins) {
    if (!/^[m-ml-lr-rM-ML-LR-R]+$/.test(ins)) return false; //checking that it only consists of M,L, and R
    for (let i = 0; i < ins.length; i++) {
      //traversing through second input
      if (ins.charAt(i).toUpperCase() === "M") {
        const error = this.move();
        if (!error) return false;
      } else if (
        ins.charAt(i).toUpperCase() === "L" ||
        ins.charAt(i).toUpperCase() === "R"
      ) {
        this.rotate(ins.charAt(i).toUpperCase());
      }
    }
    return `${this.x} ${this.y} ${this.directions[(this.z / 90) % 4]}`;
  }
}
