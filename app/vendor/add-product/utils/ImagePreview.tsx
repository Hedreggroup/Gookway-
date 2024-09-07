import React from "react";

const ImagePreview = ({ images }: any) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        {images.slice(0, 3).map((image: any, index: number) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`image-${index}`}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              margin: "5px",
            }}
          />
        ))}

        {images.length > 3 && (
          <div className="" style={{ position: "relative" }}>
            <img
              src={URL.createObjectURL(images[3])} // Show the 4th image
              alt={`image-more`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "5px",
                filter: "blur(2px)",
                WebkitFilter: "blur(8px)", // For compatibility with Safari
              }}
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent overlay
                backdropFilter: "blur(2px)", // Adds the glass effect
              }}
            >
              +{images.length - 3}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
