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
	padding: 0 30px;
	display: flex;
	gap: 20px;
`;
