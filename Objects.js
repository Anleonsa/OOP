/**
 *Regular Polygon
*/
function RegularPolygon({sides, sideLength}){
  this.sides = sides;
  this.sideLength = sideLength;
  this.getPerimeter = () => this.sides * this.sideLength;
  this.getArea = () => {
    const halfCenterAngle = 360 / (2 * this.sides);
    let apothem = this.sideLength / (2 * Math.tan(halfCenterAngle * Math.PI / 180));
    apothem = parseInt(apothem * 100000) / 100000 //Round number to 5 decimal places
    return this.getPerimeter() * apothem / 2;
  }
}
const polygon = new RegularPolygon({sides: 4, sideLength: 3})


//Written as an object literal it would be:

const polygon2 = {
  sides: 4,
  sideLength: 3,
  getPerimeter: function(){return this.sides * this.sideLength},
  getArea: function() {
    const halfCenterAngle = 360 / (2 * this.sides);
    let apothem = this.sideLength / (2 * Math.tan(halfCenterAngle * Math.PI / 180));
    apothem = parseInt(apothem * 100000) / 100000 //Round number to 5 decimal places
    return this.getPerimeter() * apothem / 2;
  }
}


/**
 *Regular polygon with getters and setters
*/
const poly = {
  sides: 4,
  sideLength: 3,

  get getSides() {
    return this.sides;
  },
  set setSides(newSides){
    this.sides = newSides;
  },

  get getSideLength() {
    return this.sideLength;
  },
  set setSideLength(newSideLength) {
    this.sideLength = newSideLength;
  },

  get getPerimeter() {
    return this.sides * this.sideLength;
  },
  get getArea() {
    const halfCenterAngle = 360 / (2 * this.sides);
    let apothem = this.sideLength / (2 * Math.tan(halfCenterAngle * Math.PI / 180));
    apothem = parseInt(apothem * 100000) / 100000 //Round number to 5 decimal places
    return this.getPerimeter * apothem / 2;
  }
}
