"use client";

import { useAtomValue } from "jotai";
import { styled } from "styled-components";

import { BgColors, cardInformAtom } from "@/store";

export const Card = () => {
  const cardInform = useAtomValue(cardInformAtom);

  return (
    <Wrapper $bgcolors={cardInform.bgColors}>
      <p>{cardInform.bookQuotes}</p>
      <p>
        {cardInform.author}, 『{cardInform.name}』,
        {cardInform.translator ? ` ${cardInform.translator}, ` : " "}
        {cardInform.publisher}({cardInform.publicationYear}), p{cardInform.page}
        .
      </p>
    </Wrapper>
  );
};

const DEG = [45, 135, 225, 315];
const FROM = [0, 10, 10, 100];
const TO = [70, 80, 80, 0];

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
};

const Wrapper = styled.div<{ $bgcolors: BgColors }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  aspect-ratio: 1/1;
  padding: 20px 40px;
  line-height: 1.5;
  background: ${({ $bgcolors }) => {
    if ($bgcolors) {
      return $bgcolors.length === 1
        ? $bgcolors[0]
        : $bgcolors
            .map(
              (color, index) =>
                `linear-gradient(${DEG[index]}deg, rgba(${hexToRgb(
                  color
                )}, 1) ${FROM[index]}%, rgba(${hexToRgb(color)}, 0) ${
                  TO[index]
                }%)`
            )
            .join(",");
    } else return "#ffffff";
  }};
`;
