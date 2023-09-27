"use client";

import { styled } from "styled-components";
import { Form, CardDownload } from "./components";

export default function Home() {
	return (
		<Main>
			<Form />
			<CardDownload />
		</Main>
	);
}

const Main = styled.main`
	margin: 0 auto;
	max-width: 1200px;
	display: flex;
	gap: 10px;
`;
