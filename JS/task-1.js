const categoriesListRef = [...document.querySelectorAll('.item')];
const categoriesCount = categoriesListRef.length;
console.log(`В списке ${categoriesCount} категории`);
const categoryItemsMapped = categoriesListRef.map(category => {
  const categoryTitle = category.querySelector('h2');
  const categoryItems = category.querySelectorAll('li');
  return { title: categoryTitle.textContent, itemsCount: categoryItems.length };
});
//categoryItemsMapped.forEach(category => {
  console.log(
    `Категория: ${category.title} \r\nКоличество элементов: ${category.itemsCount}`,
  );
});
