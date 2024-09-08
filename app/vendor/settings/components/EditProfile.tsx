"use client";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import React from "react";
import UpdateProfilePicture from "./UpdateProfilePicture";
import { Form, Formik } from "formik";
import { editProfileSchema } from "../validations/editprofileSchema";
import { usePost } from "@/hooks/usePosts";
import InputField from "@/components/InputField";
import { usePatch } from "@/hooks/usePatch";

const EditProfile = () => {
  const { data, error, isLoading, execute } = usePatch<any>();
  const handleUpdate = async (values: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }) => {
    execute("/users/", {
      full_name: values.first_name + " " + values.last_name,
      email: values.email,
      phone: values.phone,
    });
  };
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "", phone: "" }}
      validationSchema={editProfileSchema}
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
            <UpdateProfilePicture uploadEndpoint="/users/update-profile-image" />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <InputField
                height={55}
                label={"First Name"}
                name="first_name"
                placeholder="Enter first name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.first_name && errors.first_name
                    ? errors.first_name
                    : ""
                }
              />
              <InputField
                height={55}
                label={"Last Name"}
                name="last_name"
                placeholder="Enter last name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.last_name && errors.last_name ? errors.last_name : ""
                }
              />
              <InputField
                height={55}
                label={"Email"}
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email ? errors.email : ""}
              />
              <InputField
                height={55}
                label={"Phone"}
                name="phone"
                placeholder="Enter phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone ? errors.phone : ""}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfile;
