import { ReactNode } from "react";

interface ButtonPulseProps {
  children: ReactNode;
  background?: string;
  textColor?: string;
  onClick?: () => void;
}

const ButtonPulse = ({
  children,
  background = "linear-gradient(to right, #C4A484, #F5E1A4)",
  textColor = "#ffffff",
  onClick,
}: ButtonPulseProps) => {
  
  const isGradient = background.includes("gradient");
  const boxShadow = isGradient
    ? "0 0 0 50px rgba(255, 255, 255, 0)"
    : `0 0 0 50px rgba(${hexToRgb(background)}, 0)`;



  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(0.98);
              box-shadow: 0 0 0 0 ${isGradient ? "rgba(255, 255, 255, 0.3)" : `rgba(${hexToRgb(background)}, 0.5)`};
            }
            70% {
              transform: scale(1);
              box-shadow: ${boxShadow};
            }
            100% {
              transform: scale(0.98);
              box-shadow: 0 0 0 0 ${isGradient ? "rgba(255, 255, 255, 0)" : `rgba(${hexToRgb(background)}, 0)`};
            }
          }
        `}
      </style>

      <button
        className="relative cursor-pointer text-lg font-light px-6 py-3 rounded-full focus:outline-none transition-transform duration-200 hover:scale-105"
        style={{
          background: background,
          color: textColor,
          animation: "pulse 2s infinite",
          fontFamily: "Space Grotesk",
          fontWeight: 600,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonPulse;

/**
 * Converte uma cor HEX para RGB para ser usada no efeito de pulsação.
 */
const hexToRgb = (hex: string) => {
  if (hex.includes("gradient")) return ""; // Gradientes não podem ser convertidos para RGB

  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};
