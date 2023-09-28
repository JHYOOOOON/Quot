"use client";

import styled, { css } from "styled-components";

interface ILabel {
	label: string;
	name: string;
	position?: "left" | "top";
	children: React.ReactNode;
	required?: boolean;
}

export const Label = ({ label, name, position = "left", children, required = false }: ILabel) => {
	return (
		<Wrapper className={`${position} `}>
			<StyledLabel htmlFor={name} required={required}>
				{label}
			</StyledLabel>
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

const StyledLabel = styled.label<{ required?: boolean }>`
	height: fit-content;
	font-size: var(--font-size-300);
	${({ required }) => {
		return (
			required &&
			css`
				&::after {
					content: "*";
					color: #d40000;
				}
			`
		);
	}}
`;
