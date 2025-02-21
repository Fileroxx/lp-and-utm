import { ReactNode } from "react";

interface BlurCircleProps {
  color?: string;     
  width?: string;   
  height?: string;   
  blur?: string;       
  top?: string;          
  left?: string;       
  right?: string;     
  bottom?: string;    
  children?: ReactNode; 
}

const BlurCircle = ({
  color = "rgba(255, 255, 255, 0.3)", 
  width = "200px", 
  height= "200px",
  blur = "2000px", 
  top, 
  left, 
  right, 
  bottom, 
  children 
}: BlurCircleProps) => {
  return (
    <div
      className="absolute"
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        filter: `blur(${blur})`,
        borderRadius: "80%",
        top,
        left,
        right,
        bottom,
        zIndex: '0'
      }}
    >
      {children}
    </div>
  );
};

export default BlurCircle;
