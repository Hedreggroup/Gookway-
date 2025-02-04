import * as Yup from "yup";

const addMemberValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Account number is required")
        .matches(/^\d{10}$/, "Account number must be exactly 10 digits"),
    email: Yup.string().required("Bank selection is required"),
    role: Yup.string().required("Bank selection is required")
});

export default addMemberValidationSchema;
