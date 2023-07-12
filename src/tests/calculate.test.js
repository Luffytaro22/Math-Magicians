import calculate from '../logic/calculate';

describe('calculate', () => {
  test('resets calculator data when AC button is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });

  test('updates next value when a number button is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '2';
    const expected = {
      total: '10',
      next: '52',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });

  test('clears next value and updates total when there is no operation', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: null,
    };
    const buttonName = '0';
    const expected = {
      total: null,
      next: '50',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });

  test('shows the total when the equal is pressed', () => {
    const obj = {
      total: '40',
      next: null,
      operation: '=',
    };
    const buttonName = '=';
    const expected = {
      total: '40',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
});
