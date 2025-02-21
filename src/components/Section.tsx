import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  paddingTop?: string;
  paddingBottom?: string;
  height?: string;
  centerContent?: boolean;
  centerX?: boolean;
  centerY?: boolean;
}

const Section = ({
  children,
  backgroundColor = "transparent",
  backgroundImage,
  paddingTop = "3rem",
  paddingBottom = "3rem",
  height = "600px",
  centerContent = false,
  centerX = false,
  centerY = false,
}: SectionProps) => {
  return (
    <section
      className={`relative w-full overflow-hidden flex ${
        centerContent
          ? "justify-center items-center"
          : centerX
          ? "justify-center"
          : centerY
          ? "items-center"
          : ""
      }`}
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: centerContent || centerY ? "0" : paddingTop,
        paddingBottom: centerContent || centerY ? "0" : paddingBottom,
        height,
      }}
    >
      {children}
    </section>
  );
};

export default Section;
