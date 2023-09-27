import html2canvas from "html2canvas";

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

	return <button onClick={handleClick}>이미지 저장</button>;
};
