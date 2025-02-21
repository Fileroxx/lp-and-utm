import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  color?: string; 
  size?: string;  
  textAlign?: "left" | "center" | "right"; 
}

const Paragraph = ({ 
  children, 
  color = "#ffffff", 
  size = "16px", 
  textAlign= "left"
}: ParagraphProps) => {
  return (
    <p
      className="font-light leading-relaxed"
      style={{
        color: color,
        fontSize: size,
        textAlign: textAlign
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
