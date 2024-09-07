import * as Yup from "yup";

export const productValidationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    discountPrice: Yup.number()
        .min(0, "Discount cannot be negative")
        .max(100, "Discount cannot be more than 100%"),
    // weight: Yup.number().required("Weight is required").positive("Weight must be positive"),
    seoDescription: Yup.string().required("SEO description is required"),
});
