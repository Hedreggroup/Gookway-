"use client";
import { login } from "@/components/store/slice/authSlice";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePost } from "@/hooks/usePosts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Button from "@/components/Button";
import whiteLogo from "@/app/assets/white-logo.png";
import InputField from "@/components/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { NextPageWithLayout } from "@/app/vendor/NextPageLayout";
import page from "@/app/admin/page";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AdminRoles, UserRole, VendorRoles } from "@/models/user.model";

// Define validation schema with Yup
export const AdminLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export interface AdminLoginResponse {
  data: {
    token: string;
    user: {
      name: string;
      email: string;
      role: "vendor" | "admin"; // Add the role here
    };
  };
}

const AdminLogin = ({ pageTitle }: any) => {
  useAuthRedirect();

  const { data, error, isLoading, execute } = usePost<AdminLoginResponse>();
  const [user, setUser] = useLocalStorage<any>("user", "");
  const [token, setToken] = useLocalStorage<any>("token", "");
  const [pageError, setPageError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure that the router is mounted
  }, []);

  useEffect(() => {
    if (isMounted && data) {
      dispatch(login(data.data.user));
      setUser(data.data.user);
      setToken(data.data.token);

      const userRole = data?.data?.user?.role;

      if (AdminRoles.includes(userRole)) {
        router.push("/admin");
      } else if (VendorRoles.includes(userRole)) {
        router.push("/vendor");
      } else {
        setPageError("No Access Allowed for this user");
      }
    }
  }, [data, dispatch, router, isMounted]);

  const handleAdminLogin = async (values: {
    email: string;
    password: string;
  }) => {
    execute("/users/login", {
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="min-h-screen p-2 sm:p-20  bg-gradient-to-tr from-red-300 via-white to-red-50 flex items-center justify-center">
      <div
        style={{
          borderWidth: ".5px",
          // width: window.innerWidth > 600 ? "43%" : "95%",
        }}
        className="w-[95%] md:w-[42%] lg:w-[35%] border-solid border-[#e7e8f1] hover:border hover:border-red-500 p-12 rounded-xl bg-shadow-lg flex  bg-white flex-col items-center justify-center"
      >
        <div className="bg-red-500 rounded-full flex items-center justify-center">
          <Image
            src={whiteLogo} // Path to your logo
            alt="Center Image"
            className="inset-0 m-auto animate-zoom"
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-blue-900 text-xl uppercase font-bold">
          {pageTitle ?? "Vendor Access"}
        </h1>

        {/* Use Formik for form management */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={AdminLoginSchema}
          onSubmit={handleAdminLogin}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <InputField
                withRedBorder
                width="72"
                height={55}
                label={"Email"}
                prefixIcon={
                  <Icon icon="mage:email-fill" className="text-red-500 " />
                }
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email ? errors.email : ""}
              />
              <InputField
                withRedBorder
                width="72"
                height={55}
                label={"Password"}
                name="password"
                prefixIcon={
                  <Icon
                    icon="solar:lock-bold-duotone"
                    className="text-red-500 "
                  />
                }
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.password && errors.password ? errors.password : ""
                }
                type={"password"}
              />

              {error && (
                <p className="text-red-400 text-center">Error: {error}</p>
              )}
              {pageError && (
                <p className="text-red-400 text-center">Error: {pageError}</p>
              )}
              <p className="mt-8"></p>
              <Button
                loading={isLoading}
                width="full"
                height={"16"}
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
