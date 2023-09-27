import { useAtom } from "jotai";
import { Input, Label, Section, Textarea } from "..";
import { Source, bookQuotesAtom, sourceAtom } from "@/store";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { styled } from "styled-components";

type SourceItem = {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	valueKey: keyof Source;
	placeholder?: string;
};

export const CardContents = () => {
	const [bookQuotes, setBookQuotes] = useAtom(bookQuotesAtom);
	const [source, setSource] = useAtom(sourceAtom);
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

	return (
		<Section title="인용">
			<Label label="인용 문구" name="bookQuotes" position="top">
				<Textarea
					id="bookQuotes"
					value={bookQuotes}
					onChange={(e) => setBookQuotes(e.target.value)}
					placeholder={"인용하고 싶은 문구를 작성해주세요"}
				/>
			</Label>
			<Source>
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
			</Source>
		</Section>
	);
};

const Source = styled.section`
	display: flex;
	gap: 7px;
	flex-wrap: wrap;
	margin-top: 10px;
`;
