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
  constructor(private database: Database) {} // Depends on abstraction

  saveUser(user: string) {
    this.database.save(user);
  }
}

// Usage example
const mysqlDatabase = new MySQLDatabase();
const mongoDatabase = new MongoDB();

// We can easily switch between different database implementations
const userServiceWithMySQL = new UserService(mysqlDatabase);
const userServiceWithMongo = new UserService(mongoDatabase);

userServiceWithMySQL.saveUser('John Doe'); // Uses MySQL
userServiceWithMongo.saveUser('Jane Doe'); // Uses MongoDB

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

appWithConsole.doSomething(); // Logs to console
appWithFile.doSomething(); // Logs to file
