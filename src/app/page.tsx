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
	width: fit-content;
	margin: 30px auto;
	display: flex;
	gap: 10px;
`;
