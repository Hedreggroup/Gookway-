import * as Yup from "yup";
export interface RegisterResponse {
  data: {
    token: string;
    user: {
      full_name: string;
      email: string;
      role: "vendor" | "customer"; // Add the role here
    };
  };
}

export const RegistrationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/\d/, "Must contain a number")
    .matches(/[@$!%*?&]/, "Must contain a special character"),
});
