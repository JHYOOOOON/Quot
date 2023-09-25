import { atom } from "jotai";
import { bgColorsAtom, bookQuotesAtom, sourceAtom } from ".";

export const cardInformAtom = atom((get) => ({
  bookQuotes: get(bookQuotesAtom),
  ...get(sourceAtom),
  bgColors: get(bgColorsAtom),
}));
