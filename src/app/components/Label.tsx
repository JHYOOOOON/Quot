"use client";

import styled from "styled-components";

interface ILabel {
	label: string;
	name: string;
	position?: "left" | "top";
	children: React.ReactNode;
}

export const Label = ({ label, name, position = "left", children }: ILabel) => {
	return (
		<Wrapper className={`${position}`}>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	gap: 5px;
	&.left {
		align-items: center;
	}
	&.top {
		flex-direction: column;
	}
`;

const StyledLabel = styled.label`
	height: fit-content;
	font-size: var(--font-size-300);
`;
