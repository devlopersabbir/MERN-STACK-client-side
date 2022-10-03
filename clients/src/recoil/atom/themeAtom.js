import { atom, selector } from "recoil";

export const themeAtom = atom({
  key: "theme",
  default: {
    theme: false,
  },
});

export const themeSelector = selector({
  key: "getThemeData",
  get: ({ get }) => {
    const themeSelectorValue = get(themeAtom);
    return themeSelectorValue;
    // if (themeSelectorValue.theme) {
    //   localStorage.setItem("mode", JSON.stringify(themeSelectorValue.theme));
    // } else {
    //   localStorage.setItem("mode", JSON.stringify(themeSelectorValue.theme));
    // }
  },
});
