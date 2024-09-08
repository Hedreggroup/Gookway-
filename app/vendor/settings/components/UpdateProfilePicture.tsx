import React, { useState } from "react";
import ImageDropzone from "@/components/ImageDropzone";
import SideToast from "@/components/utils/Toastify/SideToast";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface UpdateProfilePictureProps {
  uploadEndpoint: string;
}

const UpdateProfilePicture: React.FC<UpdateProfilePictureProps> = ({
  uploadEndpoint,
}) => {
  const [token, setToken] = useLocalStorage<any>("token", "");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    // Only allow one file
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}${uploadEndpoint}`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }
      );
      const result = await response.json();
      console.log("RESPONSE ATUPLOAD", result);
      if (!response.ok) {
        let errorMsg = result.msg;
        throw new Error(errorMsg ?? "Upload failed");
      }

      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
      SideToast.FireError({
        message: error?.response?.data?.msg || error.message,
      });
    } finally {
      setUploading(false);
    }
  };

  React.useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, [image]);

  return (
    <div>
      <p className="text-gray-400">Profile Image</p>
      <div className="mt-3">
        <ImageDropzone onDrop={handleDrop} />
      </div>
      {uploading && <p className="text-blue-500">Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Upload successful!</p>}
    </div>
  );
};

export default UpdateProfilePicture;
