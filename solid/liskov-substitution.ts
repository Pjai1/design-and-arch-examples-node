/**
 * Liskov Substitution Principle (LSP) Example
 *
 * The LSP states that objects of a superclass should be replaceable with objects of its subclasses
 * without breaking the application. Subclasses should not weaken preconditions or strengthen postconditions.
 */

// Bad implementation violating LSP
export class Bird {
  fly(): void {
    console.log('I can fly');
  }
}

export class PenguinBad extends Bird {
  fly(): void {
    throw new Error('I cannot fly');
  }
}

export function makeBirdFlyBad(bird: Bird): void {
  bird.fly();
}

// Good implementation following LSP
export interface BirdGood {
  eat(): void;
}

export interface FlyingBirdGood extends BirdGood {
  fly(): void;
}

export class ParrotGood implements FlyingBirdGood {
  eat(): void {
    console.log('Parrot is eating');
  }

  fly(): void {
    console.log('Parrot is flying');
  }
}

export class PenguinGood implements BirdGood {
  eat(): void {
    console.log('Penguin is eating');
  }
}

export function makeBirdEatGood(bird: BirdGood): void {
  bird.eat();
}

export function makeBirdFlyGood(bird: FlyingBirdGood): void {
  bird.fly();
}
