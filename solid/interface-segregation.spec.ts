import { describe, it, expect, vi } from 'vitest';
import { Human, Robot } from './interface-segregation';

describe('Interface Segregation Principle', () => {
  describe('Human', () => {
    it('should be able to work', () => {
      const human = new Human();
      const consoleSpy = vi.spyOn(console, 'log');

      human.work();

      expect(consoleSpy).toHaveBeenCalledWith('Human is working');
    });

    it('should be able to eat', () => {
      const human = new Human();
      const consoleSpy = vi.spyOn(console, 'log');

      human.eat();

      expect(consoleSpy).toHaveBeenCalledWith('Human is eating');
    });

    it('should be able to sleep', () => {
      const human = new Human();
      const consoleSpy = vi.spyOn(console, 'log');

      human.sleep();

      expect(consoleSpy).toHaveBeenCalledWith('Human is sleeping');
    });
  });

  describe('Robot', () => {
    it('should be able to work', () => {
      const robot = new Robot();
      const consoleSpy = vi.spyOn(console, 'log');

      robot.work();

      expect(consoleSpy).toHaveBeenCalledWith('Robot is working');
    });
  });
});
