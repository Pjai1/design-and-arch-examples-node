import { describe, it, expect, vi } from 'vitest';
import { FlyingBird, Penguin, Rectangle, Square } from './liskov-substitution';

describe('Liskov Substitution Principle', () => {
  describe('Bird Movement', () => {
    it('should allow flying bird to move', () => {
      const bird = new FlyingBird();
      const consoleSpy = vi.spyOn(console, 'log');

      bird.move();

      expect(consoleSpy).toHaveBeenCalledWith('I can fly');
    });

    it('should allow penguin to move', () => {
      const penguin = new Penguin();
      const consoleSpy = vi.spyOn(console, 'log');

      penguin.move();

      expect(consoleSpy).toHaveBeenCalledWith('I can swim');
    });
  });

  describe('Shape Area', () => {
    it('should calculate rectangle area correctly', () => {
      const rectangle = new Rectangle(4, 5);
      expect(rectangle.getArea()).toBe(20);
    });

    it('should calculate square area correctly', () => {
      const square = new Square(4);
      expect(square.getArea()).toBe(16);
    });
  });
});
