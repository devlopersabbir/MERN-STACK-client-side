import { atom } from "recoil";

export const popup = atom({
  key: "popup",
  default: {
    popup: false,
  },
});
