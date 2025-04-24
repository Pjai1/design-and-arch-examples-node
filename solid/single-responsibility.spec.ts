import { describe, it, expect, vi } from 'vitest';
import { UserData, UserDisplay } from './single-responsibility';

describe('Single Responsibility Principle', () => {
  describe('UserData', () => {
    it('should save user data to database', () => {
      const userData = new UserData('John Doe', 'john@example.com');
      const consoleSpy = vi.spyOn(console, 'log');

      userData.saveToDatabase();

      expect(consoleSpy).toHaveBeenCalledWith('Saving user John Doe to database');
    });
  });

  describe('UserDisplay', () => {
    it('should display user information', () => {
      const userData = new UserData('John Doe', 'john@example.com');
      const userDisplay = new UserDisplay(userData);
      const consoleSpy = vi.spyOn(console, 'log');

      userDisplay.displayUser();

      expect(consoleSpy).toHaveBeenCalledWith('User: John Doe, Email: john@example.com');
    });
  });
});
