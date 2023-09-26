"use client";

import { styled } from "styled-components";

import { CardContents, CardStyles } from "./sections";

export const Form = () => {
	return (
		<Wrapper>
			<CardContents />
			<CardStyles />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 500px;
`;
