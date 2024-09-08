import * as Yup from "yup";

export const updatePasswordSchema = Yup.object({
    old_password: Yup.string().required("Old password is required"),
    new_password: Yup.string().required("Last password is required"),
    confirm_new: Yup.string().required("Confirm new password is required"),
});
