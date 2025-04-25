interface User {
  firstName: string;
  lastName: string;
  age?: number;
  email?: string;
  phone?: string;
  address?: string;
}

export interface UserBuilder {
  setFirstName(firstName: string): UserBuilder;
  setLastName(lastName: string): UserBuilder;
  setAge(age: number): UserBuilder;
  setEmail(email: string): UserBuilder;
  setPhone(phone: string): UserBuilder;
  setAddress(address: string): UserBuilder;
  build(): User;
}

export class BobTheBuilder implements UserBuilder {
  private user: User;

  constructor() {
    this.user = {
      firstName: '',
      lastName: '',
    };
  }

  setFirstName(firstName: string): UserBuilder {
    this.user.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): UserBuilder {
    this.user.lastName = lastName;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setPhone(phone: string): UserBuilder {
    this.user.phone = phone;
    return this;
  }

  setAddress(address: string): UserBuilder {
    this.user.address = address;
    return this;
  }

  build(): User {
    return this.user;
  }
}
