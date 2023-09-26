"use client";

import { styled } from "styled-components";

interface IColorButton {
	color: string;
	index: number;
	handleDelete: (targetIndex: number) => void;
}
export const ColorButton = ({ color, index, handleDelete }: IColorButton) => {
	return (
		<Chip color={color}>
			<DeleteButton onClick={() => handleDelete(index)}>X</DeleteButton>
		</Chip>
	);
};

const Chip = styled.div<{ color: string }>`
	position: relative;
	width: 35px;
	height: 35px;
	border-radius: 2px;
	background-color: ${({ color }) => color};
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const DeleteButton = styled.button`
	font-size: 10px;
	position: absolute;
	top: -5px;
	right: -5px;
	width: 15px;
	height: 15px;
	color: red;
	background-color: #f0f0f0;
	border-radius: 50%;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	&:hover {
		background-color: #d0d0d0;
	}
`;
