const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach((category) => {

  const categoryName = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів у категорії ${categoryName}: ${categoryElementsCount}`);
});
