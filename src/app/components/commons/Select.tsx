import React from "react";
import { styled } from "styled-components";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
	options: string[];
}

export const Select = ({ onChange, defaultValue, options, ...rest }: ISelect) => {
	return (
		<StyledSelect onChange={onChange} defaultValue={defaultValue} {...rest}>
			{options.map((option) => (
				<option key={option}>{option}</option>
			))}
		</StyledSelect>
	);
};

const StyledSelect = styled.select`
	width: 150px;
	position: relative;
	font-family: inherit;
	padding: 7px 9px;
	border: 1px solid #d0d0d0;
	border-radius: 2px;
	/* 화살표 커스텀 */
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 5px;
	&:focus {
		outline: 1px solid #007cd5;
		border: 1px solid #007cd5;
	}
`;
