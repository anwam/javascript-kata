import { sayHi } from './index';

describe('Say Hi Kata', () => {
  it('should return string', () => {
    const result = sayHi({ name: 'Alex', age: 32 });
    expect(result).toEqual("Hi. My name is Alex and I'm 32 years old");
  });

  it('should return say hi to Frank', () => {
    const result = sayHi({ name: 'Frank', age: 68 });
    expect(result).toEqual("Hi. My name is Frank and I'm 68 years old");
  });
});
