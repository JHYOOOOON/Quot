import { styled, css } from "styled-components";

export const Input = styled.input<{ $width?: number }>`
	font-family: inherit;
	padding: 7px 9px;
	border: 1px solid #d0d0d0;
	border-radius: 2px;
	&:focus {
		outline: 1px solid #007cd5;
		border: 1px solid #007cd5;
	}

	${({ $width }) =>
		$width &&
		css`
			width: ${$width}px;
		`}
`;
