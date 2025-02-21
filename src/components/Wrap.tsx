import { ReactNode } from "react";

interface WrapProps {
  children: ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

const Wrap = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
}: WrapProps) => {
  return (
    <div 
    className="flex"
    style={{
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems,
      gap: '6px'
    }}
    >
      {children}
    </div>
  );
};

export default Wrap;
