import { useState } from 'react';
import { useFormik } from 'formik';
import { productValidationSchema } from "@/app/vendor/add-product/utils/productValidationSchema";
import SideToast from "@/components/utils/Toastify/SideToast";
import { useLocalStorage } from "./useLocalStorage";
import axiosInstance from './interceptors/axiosInstance';

export const useProductForm = () => {
    const [token] = useLocalStorage<any>("token", "");  // No need to use setter here
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
            setIsLoading(true);

            try {
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
                        formData.append(`tags[${index}]`, tag);
                    });
                }
                images.forEach((image) => {
                    formData.append("images", image);
                });

                const response = await axiosInstance.post('/products', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (response.status !== 200) {
                    throw new Error(response.data?.msg ?? "Failed to upload product");
                }

                SideToast.FireSuccess({ message: 'Product uploaded successfully' });
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                SideToast.FireError({ message: error?.response?.data?.msg || error.message });
            }
        },
    });

    return { formik, handleDrop, isLoading, images };
};
