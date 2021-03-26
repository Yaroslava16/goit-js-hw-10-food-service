import menu from "./menu.json";
import menuItemsMarkupTpl from "../templates/menu-item-markup";
import refs from "./refs";
import { addIngredientsOfDish } from "../js/add-ingredients-of-the-dish";
import { Theme, changeTheme, changeClassBody } from "../js/change-theme";

const cardsMenuMarkup = menuItemsMarkupTpl(menu);

refs.menuMarkup.insertAdjacentHTML("beforeend", cardsMenuMarkup);

const arrIngredientsOfDish = addIngredientsOfDish(menu);

const listOfIngredients = document.querySelectorAll(".tag-list");

listOfIngredients.forEach((dish, index) => {
  dish.insertAdjacentHTML("beforeend", arrIngredientsOfDish[index].join(""));
});

refs.checkbox.addEventListener("change", changeTheme);

if (localStorage.getItem("theme")) {
  refs.body.classList.add(localStorage.getItem("theme"));
}

if (refs.body.classList.contains(Theme.DARK)) {
  refs.checkbox.checked = true;
}
