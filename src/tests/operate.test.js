import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  test('subtracts two numbers correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  test('multiplies two numbers correctly', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  test('divides two numbers correctly', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  test('handles division by zero', () => {
    expect(operate('8', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('calculates modulo correctly', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  test('handles modulo with division by zero', () => {
    expect(operate('6', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });
});
