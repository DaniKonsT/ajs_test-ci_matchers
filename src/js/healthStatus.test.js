import healthStatus from './healthStatus';

describe('healthStatus', () => {
  test('should return "healthy" for health > 50', () => {
    const result = healthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });

  test('should return "wounded" for health between 15 and 50 inclusive', () => {
    const result1 = healthStatus({ name: 'Маг', health: 50 });
    expect(result1).toBe('wounded');

    const result2 = healthStatus({ name: 'Маг', health: 30 });
    expect(result2).toBe('wounded');

    const result3 = healthStatus({ name: 'Маг', health: 15 });
    expect(result3).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    const result = healthStatus({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });
});
