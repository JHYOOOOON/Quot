"use client";

import styled from "styled-components";

interface ILabel {
  label: string;
  name: string;
  position?: "left" | "top";
  children: React.ReactNode;
}

export const Label = ({ label, name, position = "left", children }: ILabel) => {
  return (
    <Wrapper className={`${position}`}>
      <label htmlFor={name}>{label}</label>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 7px;
  .top {
    flex-direction: column;
  }
`;
