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
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            stock: ""
        },
        validationSchema: productValidationSchema,
        onSubmit: async (values) => {

            console.log("token at product form change", token)
            try {
                console.log("DES", values.description)
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("description", values.description);
                formData.append("category", values.category);
                formData.append("price", values.price.toString());
                formData.append("stock", values.stock);
                formData.append("discountPrice", values.discountPrice.toString());
                formData.append("weight", values.weight.toString());

                formData.append("seoDescription", values.seoDescription);
                if (values.tags && Array.isArray(values.tags)) {
                    values.tags.forEach((tag, index) => {
                        formData.append(`tags[${index}]`, tag); // Or just 'attendees[]' to let it auto-index
                    });
                }
                // Append images
                images.forEach((image: any) => {
                    formData.append("images", image);
                });

                // API request to upload product with axios
                setIsLoading(true);
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/products`, formData, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                });
                console.log("ERROR ADD PRO", response.data)
                if (response.status !== 200) {
                    throw new Error(response.data?.msg ?? "Failed to upload product");
                }
                SideToast.FireSuccess({ message: 'Product uploaded successfully' });
                setIsLoading(false);
                // alert("Product uploaded successfully");
            } catch (error: any) {
                setIsLoading(false);
                SideToast.FireError({ message: error?.response?.data?.msg || error.message });
            }
        },
    });

    return { formik, handleDrop, isLoading, images };
};
