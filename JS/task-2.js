const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingridientsListRef = document.querySelector('#ingredients');

const addIngridient = function (ingridient) {
  const ingridientListItemRef = document.createElement('li');
  ingridientListItemRef.textContent = ingridient;
  return ingridientListItemRef;
};
const ingridientsList = ingredients.map(ingredient =>
  addIngridient(ingredient),
);
ingridientsListRef.append(...ingridientsList);
