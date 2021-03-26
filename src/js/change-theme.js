import refs from "./refs";

export const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

export function changeTheme() {
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
