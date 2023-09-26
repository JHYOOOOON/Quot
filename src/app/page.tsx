"use client";

import { styled } from "styled-components";
import { Form, Card } from "./components";

export default function Home() {
	return (
		<Main>
			<Form />
			<Card />
		</Main>
	);
}

const Main = styled.main`
	margin: 0 auto;
	max-width: 1000px;
	display: flex;
	gap: 10px;
`;
