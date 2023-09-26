"use client";

import { useAtom } from "jotai";
import { ChangeEvent, HTMLInputTypeAttribute, MouseEventHandler, useState } from "react";

import { Source, bgColorsAtom, bookQuotesAtom, sourceAtom } from "@/store";
import { ColorButton, Input, Label, Textarea } from ".";
import { Color } from "./Color";
import { styled } from "styled-components";

type SourceItem = {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	valueKey: keyof Source;
	placeholder?: string;
};

export const Form = () => {
	const [bookQuotes, setBookQuotes] = useAtom(bookQuotesAtom);
	const [source, setSource] = useAtom(sourceAtom);
	const [bgColors, setBgColors] = useAtom(bgColorsAtom);
	const [bgColor, setBgColor] = useState("#000000");
	const sourceItems: SourceItem[] = [
		{ label: "저자", name: "author", type: "text", valueKey: "author" },
		{ label: "제목", name: "name", type: "text", valueKey: "name" },
		{ label: "출판사", name: "publisher", type: "text", valueKey: "publisher" },
		{
			label: "옮긴이",
			name: "translator",
			type: "text",
			valueKey: "translator",
		},
		{
			label: "출판연도",
			name: "publicationYear",
			type: "number",
			valueKey: "publicationYear",
		},
		{
			label: "페이지",
			name: "page",
			type: "text",
			valueKey: "page",
			placeholder: "예: 12, 50-53",
		},
	];

	const handleChange = (valueKey: keyof Source) => (event: ChangeEvent<HTMLInputElement>) => {
		setSource((prevSource) => ({
			...prevSource,
			[valueKey]: event.target.value,
		}));
	};

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

	return (
		<Wrapper>
			<Label label="인용 문구" name="bookQuotes" position="top">
				<Textarea
					id="bookQuotes"
					value={bookQuotes}
					onChange={(e) => setBookQuotes(e.target.value)}
					placeholder={"인용하고 싶은 문구를 작성해주세요"}
				/>
			</Label>
			<Section>
				{sourceItems.map((item) => (
					<Label label={item.label} name={item.name} key={item.label}>
						<Input
							name={item.name}
							value={source[item.valueKey]}
							onChange={handleChange(item.valueKey)}
							placeholder={item.placeholder ? item.placeholder : item.label}
						/>
					</Label>
				))}
			</Section>
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
		</Wrapper>
	);
};

const Section = styled.section`
	display: flex;
	gap: 7px;
	flex-wrap: wrap;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 500px;
`;

const ColorsWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 9px;
`;
