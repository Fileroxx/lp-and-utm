import React from "react";
import Paragraph from "./Paragraph";

interface TextCardsGradientProps {
  items: string[]; 
}

const TextCardsGradient: React.FC<TextCardsGradientProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
      {items.map((text, index) => (
        <div key={index} className="card-gradient" data-aos="fade-right">
          <Paragraph color="#fff" size="18px">
            {text}
          </Paragraph>
        </div>
      ))}

 
      <style>
        {`
          .card-gradient {
            border-width: 2px;
            border-style: solid;
            border-image-source: linear-gradient(to bottom, rgba(255, 224, 163, 1), rgba(255, 176, 19, 0));
            border-image-slice: 1;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default TextCardsGradient;
