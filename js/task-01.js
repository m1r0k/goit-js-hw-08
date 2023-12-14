const categoriesList = document.getElementById('categories');

const categories = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`)
  console.log(`Elements: ${itemsCount}`);
});