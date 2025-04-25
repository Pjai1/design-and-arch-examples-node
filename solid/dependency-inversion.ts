/**
 * Dependency Inversion Principle (DIP) Example
 *
 * High-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Abstractions should not depend on details. Details should depend on abstractions.
 */

// Bad Example: High-level module directly depending on low-level module
class BadMySQLDatabase {
  save(data: string) {
    console.log(`Saving ${data} to MySQL database`);
  }
}

// oxlint-disable-next-line eslint-no-unused-vars
class BadUserService {
  private database: BadMySQLDatabase;

  constructor() {
    this.database = new BadMySQLDatabase(); // Direct dependency on MySQL
  }

  saveUser(user: string) {
    this.database.save(user);
  }
}

// Good Example: Using dependency injection and abstraction
export interface Database {
  save(data: string): void;
}

export class MySQLDatabase implements Database {
  save(data: string) {
    console.log(`Saving ${data} to MySQL database`);
  }
}

export class MongoDB implements Database {
  save(data: string) {
    console.log(`Saving ${data} to MongoDB`);
  }
}

export class UserService {
  constructor(private database: Database) {}

  saveUser(user: string) {
    this.database.save(user);
  }
}

const mysqlDatabase = new MySQLDatabase();
const mongoDatabase = new MongoDB();

const userServiceWithMySQL = new UserService(mysqlDatabase);
const userServiceWithMongo = new UserService(mongoDatabase);

userServiceWithMySQL.saveUser('John Doe');
userServiceWithMongo.saveUser('Jane Doe');

// Another example with logging
export interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(`[Console] ${message}`);
  }
}

export class FileLogger implements Logger {
  log(message: string) {
    console.log(`[File] ${message}`);
  }
}

export class Application {
  constructor(private logger: Logger) {}

  doSomething() {
    this.logger.log('Application is doing something');
  }
}

const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();

const appWithConsole = new Application(consoleLogger);
const appWithFile = new Application(fileLogger);

appWithConsole.doSomething();
appWithFile.doSomething();
