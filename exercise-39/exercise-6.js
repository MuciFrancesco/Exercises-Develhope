class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    let area = 0;

    if (figure instanceof Square) {
      area = Math.pow(figure.side, 2);
    } else if (figure instanceof Rectangle) {
      area = figure.width * figure.height;
    } else {
      area = Math.pow(figure.radius, 2) * 3.14;
    }
    return area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
