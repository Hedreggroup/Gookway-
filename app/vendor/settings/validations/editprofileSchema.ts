import * as Yup from "yup";

export const editProfileSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().required("Price is required").positive("Price must be positive"),
});
