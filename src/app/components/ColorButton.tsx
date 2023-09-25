"use client";

import { styled } from "styled-components";

interface IColorButton {
  color: string;
  index: number;
  handleDelete: (targetIndex: number) => void;
}
export const ColorButton = ({ color, index, handleDelete }: IColorButton) => {
  return (
    <Wrapper>
      <Chip color={color} />
      <DeleteButton onClick={() => handleDelete(index)}>x</DeleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 2px;
  background-color: #f0f0f0;
  padding: 5px 7px;
  border-radius: 3px;
`;

const Chip = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  border-radius: 2px;
  background-color: ${({ color }) => color};
`;

const DeleteButton = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
