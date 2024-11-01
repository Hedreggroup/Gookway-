"use client";
import InputField from "@/components/InputField";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import SaveOrCancle from "../SaveOrCancle/SaveOrCancle";

const accountValidationSchema = Yup.object().shape({
  amount: Yup.number().required("Account number is required"),
});

const WithdrawFromWallet = ({ setOpenModal }: any) => {
  const { data, error, isLoading, execute } = usePost();
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: accountValidationSchema,
    onSubmit: async (values) => {
      execute(`/transactions/withdraw`, {
        amount: values.amount,
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
          label="Amount"
          name="amount"
          placeholder={"Enter Amount"}
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
