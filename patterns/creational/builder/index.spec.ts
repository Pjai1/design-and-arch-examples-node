import { describe, it, expect, beforeEach } from 'vitest';
import { BobTheBuilder, type UserBuilder } from './index';

describe('Builder Pattern', () => {
  let bobTheBuilder: UserBuilder;

  beforeEach(() => {
    bobTheBuilder = new BobTheBuilder();
  });

  it('should create a user with only required fields', () => {
    const user = bobTheBuilder.setFirstName('John').setLastName('Doe').build();

    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
  });

  it('should create a user with all fields', () => {
    const user = bobTheBuilder
      .setFirstName('Jane')
      .setLastName('Smith')
      .setAge(30)
      .setEmail('jane.smith@example.com')
      .setPhone('123-456-7890')
      .setAddress('123 Main St')
      .build();

    expect(user.firstName).toBe('Jane');
    expect(user.lastName).toBe('Smith');
    expect(user.age).toBe(30);
    expect(user.email).toBe('jane.smith@example.com');
    expect(user.phone).toBe('123-456-7890');
    expect(user.address).toBe('123 Main St');
  });
});
