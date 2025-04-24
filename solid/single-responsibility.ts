/**
 * Single Responsibility Principle (SRP) Example
 *
 * A class should have only one reason to change, meaning it should have only one job or responsibility.
 */

// Bad Example: A class handling both user data and user display
class User {
  constructor(
    private name: string,
    private email: string,
  ) {}

  // This class is handling both data management and display logic
  saveToDatabase() {
    // Database logic here
    console.log(`Saving user ${this.name} to database`);
  }

  displayUser() {
    // Display logic here
    console.log(`User: ${this.name}, Email: ${this.email}`);
  }
}

// Good Example: Separating concerns into different classes
export class UserData {
  constructor(
    public name: string,
    public email: string,
  ) {}

  saveToDatabase() {
    // Database logic here
    console.log(`Saving user ${this.name} to database`);
  }
}

export class UserDisplay {
  constructor(private userData: UserData) {}

  displayUser() {
    // Display logic here
    console.log(`User: ${this.userData.name}, Email: ${this.userData.email}`);
  }
}

// Usage example
const userData = new UserData('John Doe', 'john@example.com');
const userDisplay = new UserDisplay(userData);

userData.saveToDatabase();
userDisplay.displayUser();
