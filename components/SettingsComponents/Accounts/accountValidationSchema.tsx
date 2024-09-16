import * as Yup from "yup";

const accountValidationSchema = Yup.object().shape({
  account_no: Yup.string()
    .required("Account number is required")
    .matches(/^\d{10}$/, "Account number must be exactly 10 digits"),
  bank_code: Yup.string().required("Bank selection is required"),
});

export default accountValidationSchema;
