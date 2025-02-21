import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setPosition(newPosition);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
    };

    const startDrag = () => {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchend", stopDrag);
    };

    containerRef.current?.addEventListener("mousedown", startDrag);
    containerRef.current?.addEventListener("touchstart", startDrag);

    return () => {
      stopDrag();
      containerRef.current?.removeEventListener("mousedown", startDrag);
      containerRef.current?.removeEventListener("touchstart", startDrag);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto aspect-[1] overflow-hidden border-gradient"
      style={{ userSelect: "none", touchAction: "none" }}
    >
      <style>
        {`
          .border-gradient {
            border-width: 1px;
            border-style: solid;
            border-image-source: linear-gradient(to bottom, rgba(255, 176, 19, 1) 10%, rgba(0, 0, 0, 0) 40%);
            border-image-slice: 1;
          }
        `}
      </style>
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: "clip-path 0.1s ease",
        }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-[#00000072]"
        style={{
          left: `calc(${position}% - 1px)`,
          transition: "left 0.1s ease",
        }}
      />

      <div
        className="
          absolute
          top-1/2
          w-[64px] h-[64px]
          flex items-center justify-center
          bg-yellow-500
          text-white
          font-bold
          border border-[#e6a600]
          rounded-full
          shadow-lg
          cursor-ew-resize
        "
        style={{
          left: `calc(${position}% - 30px)`,
          transform: "translateY(-50%)",
          transition: "left 0.1s ease",
          fontSize: "36px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 60px 50px -30px #ffd466"
        }}
      >
      ↔
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
