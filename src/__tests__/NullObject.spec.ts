import { Displayable, User, UserRepository } from '../NullObject';

describe('NullObject', () => {
  const getName = (user: User): string => user.name;

  test('getById', () => {
    const userRepository = new UserRepository();

    expect(userRepository.getById(1).display(getName)).toBe('jim');
    expect(userRepository.getById(5).display(getName)).toBe('');

  });

});
