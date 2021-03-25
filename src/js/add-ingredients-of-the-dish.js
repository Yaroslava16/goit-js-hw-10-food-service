export const addIngredientsOfDish = (menu) => {
  return menu.map(({ ingredients }) => {
    return ingredients.map((ingredient) => {
      return `<li class="tag-list__item">${ingredient}</li>`;
    });
  });
};
