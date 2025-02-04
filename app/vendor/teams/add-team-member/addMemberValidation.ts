import * as Yup from "yup";

const addMemberValidationSchema = Yup.object().shape({
    full_name: Yup.string()
        .required("Full Name  is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required")
});

export default addMemberValidationSchema;
