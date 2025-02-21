import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  textAlign?: "left" | "center" | "right"; 
  color?: string;
}

const Title = ({ 
  children,
  textAlign = "left",
  color = "#ffffff"

}: ContainerProps) => {
  return (
    <h1 className="font-light text-[30px] max-sm:text-center" 
    style={{
      fontFamily: 'Space-Grotesk, Arial',
      textAlign: textAlign ? textAlign : undefined,
      zIndex: '1',
      color: color
    }}
    >
      {children}
    </h1>
  );
};

export default Title;
