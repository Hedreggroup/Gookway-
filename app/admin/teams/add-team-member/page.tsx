"use client";
import Button from "@/components/Button";
import CustomDropdown from "@/components/CustomDropdown";
import InputField from "@/components/InputField";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import { formatDropdownOptions } from "@/components/utils/formatDropdownOptions";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import addMemberValidationSchema from "./addMemberValidation";
import Spinner from "@/components/utils/Spinner";
import { resolve } from "path";
import SlideAnimation from "@/components/Animations/SlideAnimation";

const AddTeamMember = ({ setOpenModal }: any) => {
  const { data: vendorRoles, isLoading: ldnVendorRoles } =
    useGet(`/users/admin-roles`);

  const { data, error, isLoading, execute } = usePost();
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      role: "",
    },
    validationSchema: addMemberValidationSchema,
    onSubmit: async (values) => {
      execute(`/users/create-user`, {
        full_name: values.full_name,
        email: values.email,
        role: values.role,
      });
    },
  });
  const handleSelect = (option: any) => {
    formik.setFieldValue("role", option?.value);
  };
  const options = isLoading
    ? [{ label: "Select Category", value: "" }]
    : formatDropdownOptions(vendorRoles?.data, "Select Category", "code");

  useEffect(() => {
    if (data?.data) {
      setOpenModal(false);
      formik.resetForm();
    }
  }, [data?.data]);
  return (
    <div className="pt-20 flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-2 sm:w-1/2 bg-red-50 p-8"
      >
        <h3 className="font-bold text-xl">Add New Team Member</h3>
        <InputField
          label="Full Name"
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          error={formik.errors.full_name}
        />
        <InputField
          label="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <h4 className="font-light text-sm">User Role:</h4>
        <CustomDropdown
          options={isLoading ? [] : options}
          onSelect={handleSelect}
          loading={ldnVendorRoles}
          showSearchBox
          error={formik.errors.role}
        />
        <div className="mt-12"></div>
        <SaveOrCancle
          isLoading={isLoading}
          onCancel={() => setOpenModal?.(false)}
        />
      </form>
    </div>
  );
};

export default AddTeamMember;
