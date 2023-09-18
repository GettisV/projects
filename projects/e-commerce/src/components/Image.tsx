import React from "react";

interface IImage {
  src: string;
  className: string;
  alt: string;
}

export default function Image({ src, className, alt }: IImage) {
  return <img src={src} className={className} alt={alt} />;
}

Image.defaultProps = {
  className: "",
  alt: "",
};
