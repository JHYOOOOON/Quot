"use client";

import { ChangeEventHandler, MouseEventHandler } from "react";
import { styled } from "styled-components";

interface IColor {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Color = ({ onClick, value, onChange }: IColor) => {
	return (
		<Wrapper>
			<ColorChip type="color" value={value} onChange={onChange} />
			<PlusButton onClick={onClick}>+</PlusButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f3f3f3;
	padding: 3px 5px;
	border-radius: 5px;
`;

const ColorChip = styled.input`
	width: 40px;
	height: 40px;
	border: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	&::-webkit-color-swatch {
		border-radius: 3px;
		border: none;
	}
`;

const PlusButton = styled.button`
	padding: 3px 7px;
	border-radius: 50%;
	border: none;
	background-color: white;
	cursor: pointer;
	&:hover {
		background-color: #000;
		color: white;
	}
`;
