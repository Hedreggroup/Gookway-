"use client";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import React, { useEffect } from "react";
import UpdateProfilePicture from "./UpdateProfilePicture";
import { Form, Formik } from "formik";
import { editProfileSchema } from "../../app/vendor/settings/validations/editprofileSchema";
import { usePost } from "@/hooks/usePosts";
import InputField from "@/components/InputField";
import { usePatch } from "@/hooks/usePatch";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";

const EditProfile = () => {
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);
  const {
    data: getUser,
    isLoading: loadingUser,
    error: errorUser,
    refetch,
  } = useGet(`/users`);
  const { data, error, isLoading, execute } = usePatch<any>();
  const handleUpdate = async (values: {
    first_name: string;
    last_name: string;
    phone: string;
  }) => {
    execute("/users/", {
      full_name: values.first_name + " " + values.last_name,
      phone: values.phone,
    });
  };
  useEffect(() => {
    if (getUser?.data) {
      setUser(getUser?.data?.user);
    }
  }, [getUser?.data]);
  return (
    <Formik
      initialValues={{
        first_name: user?.full_name?.split(" ")[0]!,
        last_name: user?.full_name?.split(" ")[1]!,
        phone: "",
      }}
      validationSchema={editProfileSchema}
      onSubmit={handleUpdate}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <SaveOrCancle isLoading={isLoading} />
          <div className="bg-white p-4 sm:p-8 rounded-lg mt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl">Profile Details</h3>
                <p className="text-gray-400 text-xs">
                  Enter your profile information
                </p>
              </div>
              <div>
                {getUser?.data?.user && (
                  <img
                    className="w-12 h-12 rounded-full"
                    src={getUser?.data?.user.profile_image}
                    alt="Profile"
                  />
                )}
              </div>
            </div>
            <UpdateProfilePicture
              uploadEndpoint="/users/update-profile-image"
              onComplete={() => refetch()}
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
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
                placeholder={getUser?.data?.user.email}
                // value={values.email}
                disabled={true}
                onChange={handleChange}
                onBlur={handleBlur}
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
