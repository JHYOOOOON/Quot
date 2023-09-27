import { HTMLAttributes } from "react";
import { styled } from "styled-components";

interface ISection extends HTMLAttributes<HTMLElement> {
	title: string;
}

export const Section = ({ children, title }: ISection) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Contents>{children}</Contents>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	font-weight: bold;
	font-size: var(--font-size-500);
	margin: 0;
	margin-bottom: 10px;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
