import { ChangeEvent, MouseEventHandler, useState } from "react";
import { styled } from "styled-components";
import { useAtom } from "jotai";

import { Color, ColorButton, Label, Section, Select } from "..";
import { Font, bgColorsAtom, fontAtom } from "@/store";

export const CardStyles = () => {
	const [bgColors, setBgColors] = useAtom(bgColorsAtom);
	const [bgColor, setBgColor] = useState("#ffffff");
	const [font, setFont] = useAtom(fontAtom);
	const fonts: Font[] = ["monospace", "IBMPlexSans", "NanumMyeongjo", "NotoSans"];

	const handleBgColorDelete = (targetIndex: number) => {
		setBgColors((prevColors) => prevColors.filter((_, index) => index !== targetIndex));
	};

	const handleColorSelect: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		if (bgColors.length === 4) {
			alert("최대 4개까지만 설정 가능합니다.");
			return;
		}
		setBgColors((prevColors) => [...prevColors, bgColor]);
	};

	const handleFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setFont(event.target.value as Font);
	};

	return (
		<Section title="꾸미기">
			<Label label="글꼴" name="font">
				<Select onChange={handleFontChange} defaultValue={font} options={fonts} />
			</Label>
			<div>
				<Label label="배경색상(최대 4개)" name="backgroundColors" position="top">
					<Color
						value={bgColor}
						onClick={handleColorSelect}
						onChange={(event) => {
							setBgColor(event.target.value);
						}}
					/>
				</Label>
				<ColorsWrapper>
					{bgColors.map((color, index) => (
						<ColorButton
							key={`${index}_color`}
							color={color}
							index={index}
							handleDelete={handleBgColorDelete}
						/>
					))}
				</ColorsWrapper>
			</div>
		</Section>
	);
};

const ColorsWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 9px;
`;
