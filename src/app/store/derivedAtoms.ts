import { atom } from "jotai";
import { bookQuotesAtom, sourceAtom } from ".";

export const cardInformAtom = atom((get) => ({
  bookQuotes: get(bookQuotesAtom),
  ...get(sourceAtom),
}));
