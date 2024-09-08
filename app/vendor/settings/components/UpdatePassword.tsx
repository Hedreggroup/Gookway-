"use client";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import React from "react";
import UpdateProfilePicture from "./UpdateProfilePicture";
import { Form, Formik } from "formik";
import { usePost } from "@/hooks/usePosts";
import InputField from "@/components/InputField";
import { usePatch } from "@/hooks/usePatch";
import { updatePasswordSchema } from "../validations/updatePasswordSchema";

const UpdatePassword = () => {
  const { data, error, isLoading, execute } = usePatch<any>();
  const handleUpdate = async (values: {
    old_password: string;
    new_password: string;
    confirm_new: string;
  }) => {
    execute("/users/", {
      old_password: values.old_password,
      new_password: values.new_password,
      confirm_new: values.confirm_new,
    });
  };
  return (
    <Formik
      initialValues={{ old_password: "", new_password: "", confirm_new: "" }}
      validationSchema={updatePasswordSchema}
      onSubmit={handleUpdate}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <SaveOrCancle />
          <div className="bg-white p-8 rounded-lg mt-4">
            <h3 className="text-xl">Profile Details</h3>
            <p className="text-gray-400 text-xs">
              Enter your profile information
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <InputField
                height={55}
                label={"Old Password"}
                name="old_password"
                placeholder="Enter old password"
                value={values.old_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.old_password && errors.old_password
                    ? errors.old_password
                    : ""
                }
              />
              <InputField
                height={55}
                label={"New password"}
                name="new_password"
                placeholder="Enter new password"
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
                height={55}
                label={"Confirm new password"}
                name="confirm_new"
                placeholder="Enter confirm_new"
                value={values.confirm_new}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirm_new && errors.confirm_new
                    ? errors.confirm_new
                    : ""
                }
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePassword;
