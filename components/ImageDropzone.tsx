import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface ImageDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  buttonText?: string;
  description?: string;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  onDrop,
  buttonText,
  description,
}) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{ borderWidth: 1 }}
      className={`my-2 flex flex-col items-center justify-center w-full h-60 p-6   border-dashed rounded-lg cursor-pointer transition-colors ${
        isDragActive
          ? "border-blue-500 bg-red-50"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      <input {...getInputProps()} />
      <button
        type="button"
        className="mb-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-blue-700"
      >
        {buttonText ?? " Add Images"}
      </button>
      <p className="text-gray-400">
        {isDragActive
          ? "Drop the images here..."
          : description ?? "Drag & drop images here, or click to select files"}
      </p>
    </div>
  );
};

export default ImageDropzone;
