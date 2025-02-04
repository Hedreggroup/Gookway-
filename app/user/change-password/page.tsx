"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Loader from "@/components/Loader";
import MainLayout from "@/components/MainLayout";
import TextSpanLink from "@/components/TextSpanLink";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePost } from "@/hooks/usePosts";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import * as Yup from "yup";
import { LoginResponse } from "../forgot-password/page";
import ResendOtpComponent from "./ResendOtpComponent";

const changePasswordSchema = Yup.object({
  otp: Yup.string().required("OTP is required"),
  new_password: Yup.string().required("New password is required"),
  confirm_new: Yup.string()
    .oneOf([Yup.ref("new_password")], "Passwords must match")
    .required("Confirm new password is required"),
});

const ChangePassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const forgotPasswordEmail = searchParams.get("email");

  const { data, error, isLoading, execute } = usePost<LoginResponse>();
  const [user, setUser] = useLocalStorage<any>("user", "");

  const handleAdminLogin = async (values: {
    otp: string;
    new_password: string;
    confirm_new: string;
  }) => {
    execute("/users/reset-password", {
      otp: values.otp,
      password: values.new_password,
      email: forgotPasswordEmail,
      confirm_new: values.confirm_new,
    });
  };
  useEffect(() => {
    if (data) {
      router.push("/login");
    }
  }, [data, router]);
  return (
    <MainLayout>
      <div className="mt-16 md:w-[90%] m-auto flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="sm:w-1/2 ">
          <h1 className="text-4xl font-black text-center">Change Password</h1>
          <div
            className={"sm:w-[90%] w-[95%] bg-[#F6F6F6] p-8 my-2 rounded-lg"}
          >
            <Formik
              initialValues={{ otp: "", confirm_new: "", new_password: "" }}
              validationSchema={changePasswordSchema}
              onSubmit={handleAdminLogin}
            >
              {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                  <InputField
                    withRedBorder
                    width="full"
                    height={55}
                    label={"OTP"}
                    prefixIcon={
                      <Icon icon="mage:email-fill" className="text-red-500 " />
                    }
                    name="otp"
                    placeholder="Enter otp sent to your email"
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.otp && errors.otp ? errors.otp : ""}
                  />
                  <InputField
                    withRedBorder
                    width="full"
                    height={55}
                    label={"New Password"}
                    prefixIcon={
                      <Icon icon="mage:email-fill" className="text-red-500 " />
                    }
                    name="new_password"
                    placeholder="Enter password"
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.new_password && errors.new_password
                        ? errors.new_password
                        : ""
                    }
                  />
                  <InputField
                    withRedBorder
                    width="full"
                    height={55}
                    label={"Confirm Password"}
                    name="confirm_new"
                    prefixIcon={
                      <Icon
                        icon="solar:lock-bold-duotone"
                        className="text-red-500 "
                      />
                    }
                    placeholder="Confirm password"
                    value={values.confirm_new}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.confirm_new && errors.confirm_new
                        ? errors.confirm_new
                        : ""
                    }
                    type={"cpassword"}
                  />
                  {error && (
                    <p className="text-red-400 text-center">Error: {error}</p>
                  )}
                  <p className="mt-8"></p>
                  <Button
                    loading={isLoading}
                    width="full"
                    height={"16"}
                    type="submit"
                  >
                    Change Password
                  </Button>
                  <ResendOtpComponent email={forgotPasswordEmail ?? ""} />
                  <TextSpanLink
                    questionText="You have an account?"
                    linkText="Login"
                    href={"/user/register"}
                  />
                  <TextSpanLink
                    questionText="Be a Vendor?"
                    linkText="Sell On Gookway"
                    href={"/user/register?userType=vendor"}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ChangePassword />
    </Suspense>
  );
};
export default page;
