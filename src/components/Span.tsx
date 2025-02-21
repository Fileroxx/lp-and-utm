import { ReactNode } from "react";

interface SpanProps {
  children: ReactNode;
  textAlign?: "left" | "center" | "right";
  color?: string;
  fontSize?: string; 
  fontWeight?: "light" | "normal" | "medium" | "bold" | "extrabold"; 
}

const Span = ({
  children,
  textAlign = "left",
  color = "#ffffff",
  fontSize = "30px",
  fontWeight = "light",
}: SpanProps) => {
  return (
    <span
      className={`font-${fontWeight}`}
      style={{
        fontFamily: "Space-Grotesk, Arial",
        textAlign,
        color,
        fontSize,
        zIndex: 1,
      }}
    >
      {children}
    </span>
  );
};

export default Span;
