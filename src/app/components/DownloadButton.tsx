import { styled } from "styled-components";
import html2canvas from "html2canvas";
import { FiDownload } from "react-icons/fi";

import { CARD_ID } from "./sections";
import { useAtomValue } from "jotai";
import { sourceAtom } from "@/store";

export const DownloadButton = () => {
	const { name } = useAtomValue(sourceAtom);

	const downloadImage = (url: string) => {
		const link = document.createElement("a");
		link.download = name ? name : "anonymous";
		link.href = url;
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	const handleClick = async () => {
		const target = document.getElementById(CARD_ID) as HTMLElement;
		const options = { scale: 4 };
		const canvas = await html2canvas(target, options);
		const url = canvas.toDataURL("image/png");
		downloadImage(url);
	};

	return (
		<Button onClick={handleClick}>
			<FiDownload />
			이미지 저장
		</Button>
	);
};

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 3px;
	font-family: inherit;
	padding: 5px 7px;
	color: #029702;
	border: 2px solid #029702;
	border-radius: 5px;
	background-color: white;
	cursor: pointer;
	transition: background-color 0.2s;
	&:hover,
	&:focus {
		background-color: #029702;
		color: white;
	}
`;
