export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  let notNum = /\D/g;
  if (notNum.test(this.side1) || notNum.test(this.side2) || notNum.test(this.side3)) {
    return "error"; 
  }
  if ((typeof this.side1 != "number") || (typeof this.side2 != "number") || (typeof this.side3 != "number")) { 
    return "error"; 
  }
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
      return "isosceles triangle";
    } else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
      return "equilateral triangle";
    } else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
      return "non number input";
    }
};