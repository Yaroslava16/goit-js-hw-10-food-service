import menuItemsMarkupTpl from "../templates/menu-item-markup";
import menu from "./menu.json";
import refs from "./refs";
import { addIngredientsOfDish } from "../js/add-ingredients-of-the-dish";

const cardsMenuMarkup = menuItemsMarkupTpl(menu);

refs.menuMarkup.insertAdjacentHTML("beforeend", cardsMenuMarkup);

const arrIngredientsOfDish = addIngredientsOfDish(menu);

refs.listOfIngredients.forEach((dish, index) => {
  dish.insertAdjacentHTML("beforeend", arrIngredientsOfDish[index].join(""));
});

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.checkbox.addEventListener("change", changeTheme);

function changeTheme() {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  }
}

if (localStorage.getItem("theme")) {
  refs.body.classList.add(localStorage.getItem("theme"));
}

if (refs.body.classList.contains(Theme.DARK)) {
  refs.checkbox.checked = true;
}
