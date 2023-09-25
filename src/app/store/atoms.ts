import { atom } from "jotai";
import { BookQuotes, Source } from ".";

export const bookQuotesAtom = atom<BookQuotes>("");

export const sourceAtom = atom<Source>({
  author: "",
  name: "",
  publisher: "",
  translator: "",
  publicationYear: new Date().getFullYear(),
  page: "",
});
