"use client";

import { useAtomValue } from "jotai";

import { cardInformAtom } from "@/store";

export const Card = () => {
  const cardInform = useAtomValue(cardInformAtom);

  return (
    <div>
      <p>{cardInform.bookQuotes}</p>
      <p>
        {cardInform.author}, 『{cardInform.name}』,
        {cardInform.translator ? ` ${cardInform.translator}, ` : " "},{" "}
        {cardInform.publisher}({cardInform.publicationYear}), p{cardInform.page}
        .
      </p>
    </div>
  );
};
