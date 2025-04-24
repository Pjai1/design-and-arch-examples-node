/**
 * Open/Closed Principle (OCP) Example
 *
 * Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
 */

// Bad Example: A class that needs to be modified for each new shape
class AreaCalculator {
  calculateArea(shape: any) {
    if (shape.type === 'rectangle') {
      return shape.width * shape.height;
    } else if (shape.type === 'circle') {
      return Math.PI * shape.radius * shape.radius;
    }
    // We need to modify this class every time we add a new shape
  }
}

// Good Example: Using abstraction to make the code open for extension
export interface Shape {
  calculateArea(): number;
}

export class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class AreaCalculatorOCP {
  calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}

// Usage example
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
const calculator = new AreaCalculatorOCP();

console.log(`Rectangle area: ${calculator.calculateArea(rectangle)}`);
console.log(`Circle area: ${calculator.calculateArea(circle)}`);

// Adding a new shape is easy - just implement the Shape interface
export class Triangle implements Shape {
  constructor(
    private base: number,
    private height: number,
  ) {}

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

const triangle = new Triangle(4, 6);
console.log(`Triangle area: ${calculator.calculateArea(triangle)}`);
