import { describe, it, expect, beforeEach } from 'vitest';
import { Rectangle, Circle, Triangle, AreaCalculatorOCP } from './open-closed';

describe('Open/Closed Principle', () => {
  let calculator: AreaCalculatorOCP;

  beforeEach(() => {
    calculator = new AreaCalculatorOCP();
  });

  describe('Rectangle', () => {
    it('should calculate area correctly', () => {
      const rectangle = new Rectangle(5, 10);
      expect(calculator.calculateArea(rectangle)).toBe(50);
    });
  });

  describe('Circle', () => {
    it('should calculate area correctly', () => {
      const circle = new Circle(7);
      expect(calculator.calculateArea(circle)).toBeCloseTo(153.94, 2);
    });
  });

  describe('Triangle', () => {
    it('should calculate area correctly', () => {
      const triangle = new Triangle(4, 6);
      expect(calculator.calculateArea(triangle)).toBe(12);
    });
  });
});
