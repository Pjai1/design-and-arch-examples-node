import { describe, it, expect, vi } from 'vitest';
import { MySQLDatabase, MongoDB, UserService, ConsoleLogger, FileLogger, Application } from './dependency-inversion';

describe('Dependency Inversion Principle', () => {
  describe('Database Operations', () => {
    it('should save user data to MySQL', () => {
      const mysql = new MySQLDatabase();
      const userService = new UserService(mysql);
      const consoleSpy = vi.spyOn(console, 'log');

      userService.saveUser('John Doe');

      expect(consoleSpy).toHaveBeenCalledWith('Saving John Doe to MySQL database');
    });

    it('should save user data to MongoDB', () => {
      const mongo = new MongoDB();
      const userService = new UserService(mongo);
      const consoleSpy = vi.spyOn(console, 'log');

      userService.saveUser('Jane Doe');

      expect(consoleSpy).toHaveBeenCalledWith('Saving Jane Doe to MongoDB');
    });
  });

  describe('Logging Operations', () => {
    it('should log to console', () => {
      const consoleLogger = new ConsoleLogger();
      const app = new Application(consoleLogger);
      const consoleSpy = vi.spyOn(console, 'log');

      app.doSomething();

      expect(consoleSpy).toHaveBeenCalledWith('[Console] Application is doing something');
    });

    it('should log to file', () => {
      const fileLogger = new FileLogger();
      const app = new Application(fileLogger);
      const consoleSpy = vi.spyOn(console, 'log');

      app.doSomething();

      expect(consoleSpy).toHaveBeenCalledWith('[File] Application is doing something');
    });
  });
});
