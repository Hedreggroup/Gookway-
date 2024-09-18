import AnimatedModal from "@/components/AnimatedModal 1/AnimatedModal";
import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";

export const ProductImageSlider = ({
  images,
  currentImage,
  hoverHandler,
}: {
  images: [];
  currentImage: any;
  hoverHandler: any;
}) => {
  return (
    <div
      style={
        {
          // height: window.innerWidth < 700 && "10vh",
          // background: "black",
        }
      }
    >
      <div
        style={{ position: "absolute" }}
        className="class_justify_contents_column"
      >
        {images.map((image, i) => (
          <div
            style={{
              border:
                currentImage === image ? "1px solid var(--light-orange)" : "",
            }}
            key={i}
            onMouseOver={() => hoverHandler(image, i)}
          >
            <img src={image} alt="" height={"60px"} width="60px" />
          </div>
        ))}
      </div>
      <img
        src={currentImage}
        alt=""
        height={"100%"}
        style={{
          minHeight: window.innerWidth < 700 ? "100px" : "800px",
          objectFit: "contain",
          marginLeft: "-10px",
        }}
        width={window.innerWidth < 700 ? "100%" : "100%"}
      />
    </div>
  );
};
const ProductImages = ({ images, isAdmin = false }: any) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [showFullImage, setShowFullImage] = useState(false);
  const hoverHandler = (image: any, i: number) => {
    setCurrentImage(image);
  };
  return (
    <div id="product-images" className="flex flex-col">
      <AnimatedModal
        openModal={showFullImage}
        setOpenModal={setShowFullImage}
        style={{ width: window.innerWidth < 700 ? "70vh" : "100vh" }}
        modalHeight={window.innerWidth < 700 ? "70vh" : "100vh"}
        bkdropclassName={"full_backdrop"}
      >
        <ProductImageSlider
          images={images}
          currentImage={currentImage}
          hoverHandler={hoverHandler}
        />
      </AnimatedModal>
      <div
        id="product-image"
        className="  flex items-center justify-center"
        onClick={() => setShowFullImage(true)}
        style={{ cursor: "zoom-in" }}
      >
        <img src={currentImage} alt="" className="object-contain h-96 w-96" />
      </div>
      <div
        id="vertical-images"
        className="flex items-center justify-start mt-3"
      >
        {images.map((image: any, i: number) => (
          <div
            className="object-cover border border-gray-300 p-2"
            key={i}
            onMouseOver={() => hoverHandler(image, i)}
          >
            <img
              src={image}
              alt=""
              height={window.innerWidth < 700 ? "80px" : "100px"}
              width={window.innerWidth < 700 ? "60px" : "80px"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
