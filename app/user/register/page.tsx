"use client";
import { Formik, Form } from "formik";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Nav from "@/components/Nav";
import { Suspense, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Loader from "@/components/Loader";
import MainLayout from "@/components/MainLayout";
import { useRouter, useSearchParams } from "next/navigation";
import { UserRole } from "@/models/user.model";
import { usePost } from "@/hooks/usePosts";
import { RegisterResponse, RegistrationSchema } from "./models";

const Register = () => {
  const router = useRouter();
  const { data, error, isLoading, execute } = usePost<RegisterResponse>();
  const searchParams = useSearchParams();
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const userType = searchParams.get("userType");

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = (password: string) => {
    setPasswordCriteria({
      length: password.length > 5,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    });
  };
  const handleRegister = async (values: {
    full_name: string;
    email: string;
    password: string;
  }) => {
    setSubmittedEmail(values.email);
    execute("/users/register", {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
      role: userType ?? UserRole.CUSTOMER,
    });
  };
  useEffect(() => {
    if (data) {
      console.log("DATA", data);
      if (submittedEmail) {
        router.push(`/verify?email=${submittedEmail}`);
      }
    }
  }, [data, router]);
  return (
    <MainLayout>
      <div className="mt-8 sm:w-[90%] w-[96%] mx-auto flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-black">Register</h1>
        {userType === UserRole.VENDOR && (
          <div className="bg-green-50 p-8 text-green-600 rounded-lg">
            Register as a vendor and send us email to active your account
          </div>
        )}
        <div className="sm:w-[526px] w-[95%] bg-[#F6F6F6] p-8 my-2 rounded-lg">
          <Formik
            initialValues={{
              full_name: "",
              email: "",
              password: "",
              subscribe: false,
              notifications: false,
            }}
            validationSchema={RegistrationSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <InputField
                  label={"Full Name"}
                  name="full_name"
                  placeholder="Enter full name"
                  value={values.full_name}
                  height={55}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.full_name && errors.full_name
                      ? errors.full_name
                      : ""
                  }
                />
                <InputField
                  label={"Email"}
                  name="email"
                  prefixIcon={
                    <Icon icon="mage:email-fill" className="text-red-500 " />
                  }
                  height={55}
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email ? errors.email : ""}
                />
                <InputField
                  label={"Password"}
                  height={55}
                  name="password"
                  type="password"
                  prefixIcon={
                    <Icon
                      icon="solar:lock-bold-duotone"
                      className="text-red-500 "
                    />
                  }
                  placeholder="Enter password"
                  value={values.password}
                  onChange={(e: any) => {
                    handleChange(e);
                    handlePasswordChange(e.target.value);
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.password && errors.password ? errors.password : ""
                  }
                />
                <div className="my-3">
                  <p className="text-sm font-bold">
                    Password Strength Criteria:
                  </p>
                  <ul className="text-sm">
                    <li
                      className={
                        passwordCriteria.length
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      • Length greater than 5 characters
                    </li>
                    <li
                      className={
                        passwordCriteria.uppercase
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      • Contains uppercase letter (A-Z)
                    </li>
                    <li
                      className={
                        passwordCriteria.number
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      • Contains number (0-9)
                    </li>
                    <li
                      className={
                        passwordCriteria.specialChar
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      • Contains special characters
                    </li>
                  </ul>
                </div>
                <Button
                  loading={isLoading}
                  type="submit"
                  width="full"
                  height={16}
                >
                  Create an Account
                </Button>
                <p className="mt-4 text-center">
                  Already have an account?{" "}
                  <a href="/user/login" className="text-red-500 font-bold">
                    Login
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
};

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Register />
    </Suspense>
  );
};
export default page;
