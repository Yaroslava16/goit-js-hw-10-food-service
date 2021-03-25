import menuItemsMarkupTpl from "../templates/menu-item-markup";
import menu from "./menu.json";
import { addIngredientsOfDish } from "../js/add-ingredients-of-the-dish";

const menuMarkup = document.querySelector(".js-menu");
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
  return document.body.classList.toggle(Theme.DARK);
}

function saveTheme() {
  if (checkbox.checked) {
    localStorage.setItem("checked", "true");
  } else {
    localStorage.setItem("checked", "false");
  }
}
// if (localStorage.getItem("checked") == "true") {
//   checkbox.setAttribute("checked", "checked");
