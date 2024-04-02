import * as data from './allergenes.json';

export const formatedAllergens: Allergen[] = Object.entries(data)
  .map(([key, value]) => {
    if (key === 'default') return;

    return {
      key: key,
      value: value?.['name']?.['fr'],
    };
  })
  .filter(Boolean);
