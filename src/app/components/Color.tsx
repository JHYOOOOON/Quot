"use client";

import { ChangeEventHandler, MouseEventHandler } from "react";

interface IColor {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Color = ({ onClick, value, onChange }: IColor) => {
  return (
    <div>
      <input type="color" value={value} onChange={onChange} />
      <button onClick={onClick}>+</button>
    </div>
  );
};
