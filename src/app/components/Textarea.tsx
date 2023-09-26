import { styled } from "styled-components";

export const Textarea = styled.textarea`
	font-family: inherit;
	width: 300px;
	height: 150px;
	padding: 7px 9px;
	border: 1px solid #d0d0d0;
	border-radius: 2px;
	resize: none;
	&:focus {
		outline: 1px solid #007cd5;
		border: 1px solid #007cd5;
	}
`;
