import { describe, it, expect } from 'vitest';
import { Rectangle, Circle, Triangle } from './open-closed';

describe('Open/Closed Principle - Shape Area Calculations', () => {
  it('should calculate rectangle area correctly', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.calculateArea()).toBe(50);
  });

  it('should calculate circle area correctly', () => {
    const circle = new Circle(7);
    expect(circle.calculateArea()).toBeCloseTo(153.938, 3);
  });

  it('should calculate triangle area correctly', () => {
    const triangle = new Triangle(4, 6);
    expect(triangle.calculateArea()).toBe(12);
  });
});
