import { describe, it, expect } from 'vitest';
import {
  Bird,
  PenguinBad,
  makeBirdFlyBad,
  ParrotGood,
  PenguinGood,
  makeBirdEatGood,
  makeBirdFlyGood,
} from './liskov-substitution';

describe('Liskov Substitution Principle', () => {
  describe('Bad Implementation', () => {
    it('should allow a regular bird to fly', () => {
      const bird = new Bird();
      expect(() => makeBirdFlyBad(bird)).not.toThrow();
    });

    it('should throw when a penguin tries to fly', () => {
      const penguin = new PenguinBad();
      expect(() => makeBirdFlyBad(penguin)).toThrow('I cannot fly');
    });
  });

  describe('Good Implementation', () => {
    it('should allow a parrot to eat and fly', () => {
      const parrot = new ParrotGood();
      expect(() => makeBirdEatGood(parrot)).not.toThrow();
      expect(() => makeBirdFlyGood(parrot)).not.toThrow();
    });

    it('should allow a penguin to eat but not fly', () => {
      const penguin = new PenguinGood();
      expect(() => makeBirdEatGood(penguin)).not.toThrow();
    });
  });
});
