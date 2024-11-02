"use client";
import InputField from "@/components/InputField";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import SaveOrCancle from "../SaveOrCancle/SaveOrCancle";

const accountValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .min(100, "Amount must be greater than 100"),
  otp: Yup.string().required("Otp is required"),
});

const WithdrawFromWallet = ({ setOpenModal }: any) => {
  const { data, error, isLoading, execute } = usePost();
  const formik = useFormik({
    initialValues: {
      amount: "",
      otp: "",
    },
    validationSchema: accountValidationSchema,
    onSubmit: async (values) => {
      execute(`/transactions/withdraw`, {
        amount: values.amount,
        otp: values.otp,
      });
    },
  });

  useEffect(() => {
    if (data?.data) {
      const { url } = data.data;
      setOpenModal(false);
      if (url) {
        window.location.href = url;
      }
      console.log("url", data, url);
    }
  }, [data?.data]);
  return (
    <div className="pt-20">
      <form onSubmit={formik.handleSubmit} className="mt-2 ">
        <h3 className="text-2xl">Withdrawal Request</h3>
        <InputField
          label="OTP"
          name="otp"
          placeholder={"Enter Otp"}
          value={formik.values.otp}
          onChange={formik.handleChange}
          error={formik.errors.otp}
        />
        <InputField
          label="Amount"
          name="amount"
          placeholder={"Enter Amount(Min 100)"}
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.errors.amount}
        />
        {error && <p className="text-red-500">{error}</p>}
        <SaveOrCancle
          isLoading={isLoading}
          labelText={"Continue"}
          onCancel={() => setOpenModal?.(false)}
        />
      </form>
    </div>
  );
};

export default WithdrawFromWallet;
