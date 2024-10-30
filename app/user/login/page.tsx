"use client";

import { AdminLoginSchema } from "@/components/AdminLogin/AdminLogin";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import { IRegisterUser } from "@/components/signup/inex";
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

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  console.log("searchParams", searchParams.get("returnUrl"));

  const { data, error, isLoading, execute } = usePost<LoginResponse>();
  const [user, setUser] = useLocalStorage<any>("user", "");
  const [token, setToken] = useLocalStorage<any>("user-token", "");
  const [loading, setLoading] = useState<boolean>(false);
  // const { returnUrl } = router.se;

  const handleAdminLogin = async (values: {
    email: string;
    password: string;
  }) => {
    execute("/users/login", {
      email: values.email,
      password: values.password,
    });
  };
  useEffect(() => {
    if (data) {
      setUser(data.data.user);
      setToken(data.data.token);
      router.push(returnUrl ?? "/");
    }
  }, [data, router]);
  return (
    <>
      <Nav />
      <div className="mt-52 md:w-[90%] m-auto flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-black">Login</h1>
        <div className={"sm:w-auto w-[95%] bg-[#F6F6F6] p-8 my-2 rounded-lg"}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={AdminLoginSchema}
            onSubmit={handleAdminLogin}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <InputField
                  withRedBorder
                  width="96"
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
                  width="96"
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
                <div className="formgroup my-5 w-full flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    style={{ height: "1.5rem", width: "1.5rem", color: "red" }}
                  />
                  <div className="w-full flex flex-col">
                    <label htmlFor="letter" className="text-red-600 font-bold">
                      Remember me
                    </label>
                  </div>
                </div>
                {error && (
                  <p className="text-red-400 text-center">Error: {error}</p>
                )}
                <p className="mt-8"></p>
                <Button
                  loading={isLoading}
                  width="full"
                  height={50}
                  type="submit"
                >
                  Login
                </Button>
                <div className="w-full flex justify-center items-center">
                  <p className="text-[#191919]">
                    Dont have an account?{" "}
                    <Link
                      href={"/user/register"}
                      className="font-black cursor-pointer text-red-600"
                      // onClick={() => {
                      //   setIsRegister(false);
                      //   setIsAuth(true);
                      // }}
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Login />
    </Suspense>
  );
};
export default page;
