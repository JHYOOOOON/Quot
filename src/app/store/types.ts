export type Source = {
	author: string;
	name: string;
	publisher: string;
	translator?: string;
	publicationYear: number;
	page: string;
};

export type BookQuotes = string;

export type Color = string;

export type BgColors = Color[];

export type Font = "monospace" | "IBMPlexSans" | "NanumMyeongjo" | "NotoSans";
