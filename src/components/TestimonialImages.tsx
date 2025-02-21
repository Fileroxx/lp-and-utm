import React from "react";

interface TestimonialImagesProps {
  images: string[]; // Lista de URLs das imagens
}

const TestimonialImages: React.FC<TestimonialImagesProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {images.map((src, index) => (
        <div key={index} className="testimonial-card" data-aos="fade-right">
          <img src={src} alt={`Depoimento ${index + 1}`} className="w-full h-auto max-w-xs rounded-lg shadow-lg" />
        </div>
      ))}
    </div>
  );
};

export default TestimonialImages;
