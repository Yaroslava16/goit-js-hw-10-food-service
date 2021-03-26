import menuItemsMarkupTpl from "../templates/menu-item-markup";
import menu from "./menu.json";
import { addIngredientsOfDish } from "../js/add-ingredients-of-the-dish";

const menuMarkup = document.querySelector(".js-menu");
const body = document.querySelector("body");
console.log(body);
const cardsMenuMarkup = menuItemsMarkupTpl(menu);

menuMarkup.insertAdjacentHTML("beforeend", cardsMenuMarkup);

const arrIngredientsOfDish = addIngredientsOfDish(menu);
const listOfIngredients = document.querySelectorAll(".tag-list");

listOfIngredients.forEach((dish, index) => {
  dish.insertAdjacentHTML("beforeend", arrIngredientsOfDish[index].join(""));
});

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const checkbox = document.querySelector("#theme-switch-toggle");

checkbox.addEventListener("change", changeTheme);

function changeTheme() {
  if (body.classList.conteins(Theme.DARK)) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  }
}

if (localStorage.getItem("theme")) {
  body.classList.add(localStorage.getItem("theme"));
}

if (body.classList.contains("dark-theme")) {
  checkBox.checked = true;
}
