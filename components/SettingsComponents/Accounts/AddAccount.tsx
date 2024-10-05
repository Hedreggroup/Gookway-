import Button from "@/components/Button";
import CustomDropdown from "@/components/CustomDropdown";
import InputField from "@/components/InputField";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import { formatDropdownOptions } from "@/components/utils/formatDropdownOptions";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import accountValidationSchema from "./accountValidationSchema";
import Spinner from "@/components/utils/Spinner";
import { resolve } from "path";
import SlideAnimation from "@/components/Animations/SlideAnimation";

const AddAccount = ({ setOpenModal }: any) => {
  const { data: Banks, isLoading: ldnBanks } = useGet(`/transactions/banks`);

  const { data, error, isLoading, execute } = usePost();
  const formik = useFormik({
    initialValues: {
      account_no: "",
      bank_code: "",
    },
    validationSchema: accountValidationSchema,
    onSubmit: async (values) => {
      execute(`/users/update-account`, {
        account_no: values.account_no,
        bank_code: values.bank_code,
      });
    },
  });
  const handleSelect = (option: any) => {
    formik.setFieldValue("bank_code", option?.value);
  };
  const options = isLoading
    ? [{ label: "Select Category", value: "" }]
    : formatDropdownOptions(Banks?.data, "Select Category", "code");

  const {
    data: ResolvedAccount,
    isLoading: ldn,
    refetch,
  } = useGet(
    `/transactions/resolve-account?account_no=${formik.values.account_no}&bank_code=${formik.values.bank_code}`,
    false
  );

  useEffect(() => {
    if (
      formik.values.account_no.length === 10 &&
      formik.values.bank_code !== ""
    ) {
      console.log("you can fire");
      refetch();
    }
  }, [formik.values]);
  // Object.entries(ResolvedAccount?.data).map(([key, value]) => {
  //   console.log(key);
  // });c
  console.log("REsove", ResolvedAccount?.data);
  useEffect(() => {
    if (data?.data) {
      setOpenModal(false);
      formik.resetForm();
    }
  }, [data?.data]);
  return (
    <div className="pt-20">
      <form onSubmit={formik.handleSubmit} className="mt-2 ">
        <InputField
          label="Account No"
          name="account_no"
          value={formik.values.account_no}
          onChange={formik.handleChange}
          error={formik.errors.account_no}
        />
        <h4 className="font-bold text-md">Bank</h4>

        <CustomDropdown
          options={isLoading ? [] : options}
          onSelect={handleSelect}
          loading={ldnBanks}
          showSearchBox
          error={formik.errors.bank_code}
        />
        {ldn && <Spinner size={25} color="#000000" />}
        {ResolvedAccount?.data && formik.values.account_no.length === 10 ? (
          <SlideAnimation>
            <div className="my-2 border border-1 border-gray-300 rounded-lg p-8 flex  items-start flex-col flex-wrap">
              {/* {...meterDetails?.content} */}
              {Object.entries(ResolvedAccount?.data || {}).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between w-full">
                    <strong>{key}:</strong>
                    <span>{`${value}`}</span>
                  </div>
                )
              )}
            </div>
            <SaveOrCancle
              isLoading={isLoading}
              onCancel={() => setOpenModal?.(false)}
            />
          </SlideAnimation>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default AddAccount;
