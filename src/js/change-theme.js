import refs from "./refs";

export const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

export function changeTheme() {
  if (refs.body.classList.contains(Theme.DARK)) {
    changeClassBody(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    changeClassBody(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", Theme.DARK);
  }
}

export function changeClassBody(classAdd, classRemove) {
  refs.body.classList.remove(classRemove);
  refs.body.classList.add(classAdd);
}
