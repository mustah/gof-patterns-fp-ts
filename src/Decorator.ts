export class Taxes {
  static generalTax(salary: number): number {
    return salary * 0.8;
  }

  static regionalTax(salary: number): number {
    return salary * 0.95;
  }

  static healthInsurance(salary: number): number {
    return salary - 200;
  }
}

export interface Functor<T> {
  value: T;
  readonly map: <R>(f: (a: T) => R) => Functor<R>;
}

export class Decorator<T> implements Functor<T> {

  private constructor(readonly value: T) {
  }

  static of<T>(value: T): Functor<T> {
    return new Decorator<T>(value);
  }

  map<R>(func: (a: T) => R): Functor<R> {
    return Decorator.of(func(this.value));
  }

}
