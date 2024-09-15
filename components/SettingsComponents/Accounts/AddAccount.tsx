import Button from "@/components/Button";
import CustomDropdown from "@/components/CustomDropdown";
import InputField from "@/components/InputField";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import { formatDropdownOptions } from "@/components/utils/formatDropdownOptions";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React from "react";

const AddAccount = () => {
  const { data: Banks, isLoading: ldnBanks } = useGet(`/transactions/banks`);
  const { data, error, isLoading, execute } = usePost();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
    },
    // validationSchema: productValidationSchema,
    onSubmit: async (values) => {},
  });
  const handleSelect = (option: any) => {
    formik.setFieldValue("bank", option.label);
  };
  const options = isLoading
    ? [{ label: "Select Category", value: "" }]
    : formatDropdownOptions(Banks?.data, "Select Category");
  console.log("BANKS", Banks);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <SaveOrCancle isLoading={isLoading} />
        <h4 className="font-bold text-md">Category</h4>
        <CustomDropdown
          options={Banks?.data}
          onSelect={handleSelect}
          loading={ldnBanks}
          error={formik.errors.category}
        />
      </form>
    </div>
  );
};

export default AddAccount;
