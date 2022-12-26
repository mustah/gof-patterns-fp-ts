import { Decorator, Taxes } from '../Decorator';

describe('Decorator', () => {
  test('function calls', () => {
    const calculateSalary = (salary: number): number => {
      return Taxes.healthInsurance(
        Taxes.regionalTax(
          Taxes.generalTax(salary)
        )
      );
    }

    expect(calculateSalary(1000)).toBe(560);
  });

  test('functor example', () => {
    const calculateSalary = (salary: number): number => {
      return Decorator.of(salary)
        .map(Taxes.generalTax)
        .map(Taxes.regionalTax)
        .map(Taxes.healthInsurance)
        .value;
    }

    let actual = calculateSalary(1000);

    expect(actual).toBe(560);
  });
});
