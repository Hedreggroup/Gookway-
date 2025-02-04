"use client";

import Button from "@/components/Button";
import DownloadAppComponent from "@/components/DownloadAppComponent";
import InputField from "@/components/InputField";
import Loader from "@/components/Loader";
import MainLayout from "@/components/MainLayout";
import Nav from "@/components/Nav";
import { IRegisterUser } from "@/components/signup/inex";
import TextSpanLink from "@/components/TextSpanLink";
import Spinner from "@/components/utils/Spinner";
import Toast from "@/components/utils/Toastify/Toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePost } from "@/hooks/usePosts";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { forgotPasswordSchema } from "./forgotPasswordSchema";

export interface LoginResponse {
  data: {
    token: string;
    user: {
      name: string;
      email: string;
      role: "vendor" | "customer"; // Add the role here
    };
  };
}

const ForgotPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  console.log("searchParams", searchParams.get("returnUrl"));

  const { data, error, isLoading, execute } = usePost<LoginResponse>();
  const [forgotPasswordEmail, setForgotPasswordEmail] = useLocalStorage<any>(
    "forgot-password-email",
    ""
  );

  const handleAdminLogin = async (values: { email: string }) => {
    setForgotPasswordEmail(values.email);
    execute("/users/forgot-password", {
      email: values.email,
    });
  };
  useEffect(() => {
    if (data) {
      router.push(`/user/change-password?email=${forgotPasswordEmail}`);
    }
  }, [data, router]);
  return (
    <MainLayout>
      <div className="mt-16 md:w-[90%] m-auto flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="sm:w-1/2 ">
          <h1 className="text-4xl font-black text-center">Forgot Password</h1>
          <div
            className={"sm:w-[90%] w-[95%] bg-[#F6F6F6] p-8 my-2 rounded-lg"}
          >
            <Formik
              initialValues={{ email: "" }}
              validationSchema={forgotPasswordSchema}
              onSubmit={handleAdminLogin}
            >
              {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                  <InputField
                    withRedBorder
                    width="full"
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
                    Send Otp
                  </Button>
                  <TextSpanLink
                    questionText="You have an account?"
                    linkText="Login"
                    href={"/user/login"}
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
      <ForgotPassword />
    </Suspense>
  );
};
export default page;
