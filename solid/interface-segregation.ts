/**
 * Interface Segregation Principle (ISP) Example
 *
 * Clients should not be forced to depend on interfaces they do not use.
 */

// Bad Example: A single interface forcing clients to implement methods they don't need
interface BadWorker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// oxlint-disable-next-line eslint-no-unused-vars
class BadHumanWorker implements BadWorker {
  work() {
    console.log('Human is working');
  }

  eat() {
    console.log('Human is eating');
  }

  sleep() {
    console.log('Human is sleeping');
  }
}

// oxlint-disable-next-line eslint-no-unused-vars
class BadRobotWorker implements BadWorker {
  work() {
    console.log('Robot is working');
  }

  // Robots don't eat or sleep, but are forced to implement these methods
  eat() {
    throw new Error("Robots don't eat!");
  }

  sleep() {
    throw new Error("Robots don't sleep!");
  }
}

// Good Example: Segregated interfaces
export interface Workable {
  work(): void;
}

export interface Eatable {
  eat(): void;
}

export interface Sleepable {
  sleep(): void;
}

export class Human implements Workable, Eatable, Sleepable {
  work() {
    console.log('Human is working');
  }

  eat() {
    console.log('Human is eating');
  }

  sleep() {
    console.log('Human is sleeping');
  }
}

export class Robot implements Workable {
  work() {
    console.log('Robot is working');
  }
}

function makeWork(worker: Workable) {
  worker.work();
}

function makeEat(eater: Eatable) {
  eater.eat();
}

function makeSleep(sleeper: Sleepable) {
  sleeper.sleep();
}

const human = new Human();
const robot = new Robot();

makeWork(human);
makeWork(robot);
makeEat(human);
makeSleep(human);
