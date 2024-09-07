import { productValidationSchema } from "@/app/vendor/add-product/utils/productValidationSchema";
import { useFormik } from "formik";
import { useState } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLocalStorage } from "./useLocalStorage";
import SideToast from "@/components/utils/Toastify/SideToast";
import { useGet } from "./useGet";

export const useProductForm = () => {
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [images, setImages] = useState<File[]>([]);

    const handleDrop = (acceptedFiles: File[]) => {
        setImages(acceptedFiles);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            category: "",
            price: "",
            discountPrice: "",
            weight: "",
            tags: "",
            seoDescription: "",
        },
        // validationSchema: productValidationSchema,
        onSubmit: async (values) => {
            console.log("token at product form change", token)
            try {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("description", values.description);
                formData.append("category", values.category);
                formData.append("price", values.price.toString());
                formData.append("discountPrice", values.discountPrice.toString());
                formData.append("weight", values.weight.toString());
                formData.append("tags", values.tags);
                formData.append("seoDescription", values.seoDescription);

                // Append images
                images.forEach((image: any) => {
                    formData.append("images", image);
                });

                // API request to upload product with axios
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/products`, formData, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                });

                if (response.status !== 200) {
                    throw new Error(response.data?.msg ?? "Failed to upload product");
                }
                SideToast.FireSuccess({ message: 'Product uploaded successfully' });

                // alert("Product uploaded successfully");
            } catch (error: any) {
                SideToast.FireError({ message: error?.response?.data?.msg || error.message });
            }
        },
    });

    return { formik, handleDrop, images };
};
