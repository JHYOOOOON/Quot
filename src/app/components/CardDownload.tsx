import { styled } from "styled-components";

import { Card } from "./sections";
import { DownloadButton, Section } from ".";

export const CardDownload = () => {
	return (
		<Section title="미리보기">
			<Wrapper>
				<div>
					<DownloadButton />
				</div>
				<Card />
			</Wrapper>
		</Section>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
