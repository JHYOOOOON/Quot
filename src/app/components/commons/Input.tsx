import { styled, css } from "styled-components";

import { Focus } from "@/CommonStyle";

export const Input = styled.input<{ $width?: number }>`
	${Focus}

	${({ $width }) =>
		$width &&
		css`
			width: ${$width}px;
		`}
`;
