"use client";

import { useAtomValue } from "jotai";
import { styled } from "styled-components";

import { BgColors, Font, cardInformAtom } from "@/store";

export const Card = () => {
	const cardInform = useAtomValue(cardInformAtom);

	return (
		<Wrapper $bgcolors={cardInform.bgColors} $font={cardInform.font}>
			<Quote>{cardInform.bookQuotes}</Quote>
			<Source>
				{cardInform.author}, 『{cardInform.name}』,
				{cardInform.translator ? ` ${cardInform.translator}, ` : " "}
				{cardInform.publisher}({cardInform.publicationYear}), p{cardInform.page}.
			</Source>
		</Wrapper>
	);
};

const DEG = [45, 135, 225, 315];
const FROM = [0, 10, 10, 100];
const TO = [70, 80, 80, 0];

const hexToRgb = (hex: string) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
		: null;
};

const Wrapper = styled.section<{ $bgcolors: BgColors; $font: Font }>`
	font-family: ${({ $font }) => $font}, "sans-serif";
	display: flex;
	flex-direction: column;
	width: 300px;
	padding: 35px 40px;
	line-height: 1.5;
	background: ${({ $bgcolors }) => {
		if ($bgcolors) {
			return $bgcolors.length === 1
				? $bgcolors[0]
				: $bgcolors
						.map(
							(color, index) =>
								`linear-gradient(${DEG[index]}deg, rgba(${hexToRgb(color)}, 1) ${
									FROM[index]
								}%, rgba(${hexToRgb(color)}, 0) ${TO[index]}%)`
						)
						.join(",");
		} else return "#ffffff";
	}};
`;

const Quote = styled.p`
	margin: 0;
	margin-bottom: 20px;
`;

const Source = styled.p`
	margin: 0;
`;
