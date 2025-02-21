interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
}

const Image = ({
  src,
  alt = "Imagem",
  width = "auto",
  height = "auto",
  rounded = "rounded-lg",
  className = "",
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${rounded} ${className}`}
      style={{ width, height }}
    />
  );
};

export default Image;
