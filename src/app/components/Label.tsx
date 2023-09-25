"use client";

interface ILabel {
  label: string;
  name: string;
  position?: "left" | "top";
  children: React.ReactNode;
}

export const Label = ({ label, name, position = "left", children }: ILabel) => {
  return (
    <div className={`flex ${position === "left" ? "flex-row" : "flex-col"}`}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
};
