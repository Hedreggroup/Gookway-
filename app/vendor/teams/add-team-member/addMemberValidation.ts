import * as Yup from "yup";

export const addMemberValidationSchema = Yup.object().shape({
    full_name: Yup.string()
        .required("Full Name  is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required")
});

export const deleteMemberValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    confirm_email: Yup.string()
        .oneOf([Yup.ref("email")], "Email must match")
        .required("Email  is required"),
});


