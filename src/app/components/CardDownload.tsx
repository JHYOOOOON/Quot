import { styled } from "styled-components";

import { Card } from "./sections";

export const CardDownload = () => {
	return (
		<Wrapper>
			<Card />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
