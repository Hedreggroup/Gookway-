import * as Yup from "yup";

export const shippingAddressSchema = Yup.object().shape({
    first_name: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters long"),

    last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters long"),

    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    phone: Yup.string() // Changed to string to handle different phone number formats
        .required("Phone number is required")
        .matches(/^\+?[0-9]*$/, "Phone number must be a valid format"),

    address: Yup.string()
        .required("Address is required"),

    country: Yup.string()
        .required("Country is required"),

    state: Yup.string()
        .required("State is required"),

    city: Yup.string()
        .required("City is required"),

    postal_code: Yup.string()
        .matches(/^[0-9]+$/, "Postal code must be numeric"),
});
