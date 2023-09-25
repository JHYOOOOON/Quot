"use client";

import { useAtom } from "jotai";
import { Source, bookQuotesAtom, sourceAtom } from "@/store";
import { Label } from ".";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

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
      placeholder: "12, 50-53 형식으로 작성해주세요",
    },
  ];

  const handleChange =
    (valueKey: keyof Source) => (event: ChangeEvent<HTMLInputElement>) => {
      setSource((prevSource) => ({
        ...prevSource,
        [valueKey]: event.target.value,
      }));
    };

  return (
    <form>
      <Label label="인용 문구" name="bookQuotes" position="top">
        <textarea
          id="bookQuotes"
          value={bookQuotes}
          onChange={(e) => setBookQuotes(e.target.value)}
          placeholder={"인용하고 싶은 문구를 작성해주세요"}
        />
      </Label>
      <div>
        {sourceItems.map((item) => (
          <Label label={item.label} name={item.name} key={item.label}>
            <input
              name={item.name}
              value={source[item.valueKey]}
              onChange={handleChange(item.valueKey)}
              placeholder={item.placeholder ? item.placeholder : item.name}
            />
          </Label>
        ))}
      </div>
    </form>
  );
};
