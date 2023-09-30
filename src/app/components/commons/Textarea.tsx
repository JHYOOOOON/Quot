import { styled } from "styled-components";

import { Focus } from "@/CommonStyle";

export const Textarea = styled.textarea`
	${Focus}

	width: 100%;
	max-width: 390px;
	min-width: 300px;
	height: 150px;
	resize: none;
`;
