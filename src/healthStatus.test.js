import sort from './healthStatus';

test('sort array and obj heroes', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortHeroes = sort(heroes);

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes).toEqual(expectedSortedHeroes);
});

test('does not sort original array', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortHeroes = sort(heroes);

  expect(sortHeroes).not.toBe(heroes);
});

test('zero array heroes', () => {
  const heroes = [];

  const sortHeroes = sort(heroes);

  expect(sortHeroes).toEqual([]);
});