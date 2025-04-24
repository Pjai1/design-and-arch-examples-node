/**
 * Liskov Substitution Principle (LSP) Example
 *
 * Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
 */

// Bad Example: Violating LSP
class BadBird {
  fly() {
    console.log('I can fly');
  }
}

class BadPenguin extends BadBird {
  // Penguin can't fly, but it's forced to implement fly()
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

// Good Example: Following LSP
export interface Bird {
  move(): void;
}

export class FlyingBird implements Bird {
  move() {
    console.log('I can fly');
  }
}

export class Penguin implements Bird {
  move() {
    console.log('I can swim');
  }
}

// Usage example
function makeBirdMove(bird: Bird) {
  bird.move();
}

const flyingBird = new FlyingBird();
const penguin = new Penguin();

makeBirdMove(flyingBird); // Outputs: I can fly
makeBirdMove(penguin); // Outputs: I can swim

// Another example with shapes
export interface Shape {
  getArea(): number;
}

export class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  getArea(): number {
    return this.width * this.height;
  }
}

export class Square implements Shape {
  constructor(private side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}

// Both Rectangle and Square can be used interchangeably where Shape is expected
function printArea(shape: Shape) {
  console.log(`Area: ${shape.getArea()}`);
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

printArea(rectangle); // Outputs: Area: 20
printArea(square); // Outputs: Area: 16
