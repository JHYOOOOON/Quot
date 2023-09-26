import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Quot;",
	description: "Quot;에서 인상 깊게 읽은 책 문구를 인용하여 이미지로 저장해보세요.",
	keywords: "책,문구,인용,출처",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
