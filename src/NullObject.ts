export interface Displayable<T> {
  display(format: (v: T) => string): string;
}

class Display<T> implements Displayable<T> {
  constructor(readonly value: T) {}

  display(format: (v: T) => string): string {
    return format(this.value);
  }
}

class NullObject<T> implements Displayable<T> {
  display(format: (v: T) => string): string {
    return '';
  }
}

export class User {
  constructor(readonly id: number, readonly name: string) {
    this.id = id;
    this.name = name;
  }
}

export class UserRepository {
  static clients: User[] = [new User(1, 'jim'), new User(2, 'john')];

  constructor() {}

  getById(id: number): Displayable<User> {
    const client = UserRepository.clients.find(c => c.id == id);

    if (client) {
      return new Display(client);
    } else {
      return new NullObject<User>();
    }
  }
}
