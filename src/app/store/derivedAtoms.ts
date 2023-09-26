import { atom } from "jotai";
import { bgColorsAtom, bookQuotesAtom, fontAtom, sourceAtom } from ".";

export const cardInformAtom = atom((get) => ({
	bookQuotes: get(bookQuotesAtom),
	...get(sourceAtom),
	bgColors: get(bgColorsAtom),
	font: get(fontAtom),
}));
