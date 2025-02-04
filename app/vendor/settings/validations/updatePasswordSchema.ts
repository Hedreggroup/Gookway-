import * as Yup from "yup";

export const updatePasswordSchema = Yup.object({
    password: Yup.string().required("Last password is required"),
    cpassword: Yup.string().required("Confirm new password is required"),
});
