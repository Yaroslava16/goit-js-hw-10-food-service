import menuItemMarkupTpl from "../templates/menu-item-markup";
import menu from "./menu.json";

const menuMarkup = document.querySelector(".js-menu");
const cardsMenuMarkup = createCardsMenuMarkup("cards");

menuMarkup.insertAdjacentHTML("beforeend", cardsMenuMarkup);

function createCardsMenuMarkup(cards) {
  return menu.map(menuItemMarkupTpl).join("");
}

const addIngredientsOfDish = (menu) => {
  return menu.map(({ ingredients }) => {
    return ingredients.map((ingredient) => {
      return `<li class="tag-list__item">${ingredient}</li>`;
    });
  });
};

const arrIngredientsOfDish = addIngredientsOfDish(menu);

const listOfIngredients = document.querySelectorAll(".tag-list");

listOfIngredients.forEach((dish, index) => {
  dish.insertAdjacentHTML("beforeend", arrIngredientsOfDish[index].join(""));
});
