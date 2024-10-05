"use client";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { usePost } from "@/hooks/usePosts";
import InputField from "@/components/InputField";
import { usePatch } from "@/hooks/usePatch";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";
import { shippingAddressSchema } from "../validations/addShippingValidations";

const AddShippingAddress = ({ closeModal }: any) => {
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);
  const {
    data: getUser,
    isLoading: loadingUser,
    error: errorUser,
    refetch,
  } = useGet(`/users`);
  const { data, error, isLoading, execute } = usePost<any>();
  const handleUpdate = async (values: any) => {
    console.log("values", values);

    let {
      first_name,
      last_name,
      email,
      phone,
      address,
      country,
      state,
      city,
      postal_code,
    } = values;
    let shipping_address = `${first_name} ${last_name}  ${phone} ${email} ${address} ${state} ${city} ${country} ${postal_code}`;
    console.log("SJPPDS", shipping_address);
    console.log("shipping_address", shipping_address);
    var data = {
      addresses: [shipping_address],
    };
    console.log("data", typeof shipping_address);

    // return;
    execute("/users/add-shipping-addresses", data);
  };
  useEffect(() => {
    if (getUser?.data) {
      setUser(getUser?.data?.user);
    }
  }, [getUser?.data]);
  useEffect(() => {
    if (data?.data) {
      closeModal?.();
    }
  }, [data?.data]);
  return (
    <Formik
      initialValues={{
        first_name: user?.full_name!.split(" ")[0]!,
        last_name: user?.full_name!.split(" ")[1]!,
        email: user?.email,
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postal_code: "",
      }}
      validationSchema={shippingAddressSchema}
      onSubmit={handleUpdate}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <div className="bg-white p-4 sm:p-8 rounded-lg mt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl">Billing Details</h3>
                <p className="text-gray-400 text-xs">
                  Enter your billing information
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
                placeholder="Enter email"
                disabled
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
            <InputField
              height={55}
              label={"Address "}
              name="address"
              placeholder="Enter address "
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && errors.address ? errors.address : ""}
            />
            {/* country state starts here */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <InputField
                height={55}
                label={"Country *"}
                name="country"
                placeholder="Enter Country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.country && errors.country ? errors.country : ""}
              />
              <InputField
                height={55}
                label={"State *"}
                name="state"
                placeholder="Enter state "
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.state && errors.state ? errors.state : ""}
              />
              <InputField
                height={55}
                label={"City *"}
                name="city"
                placeholder={"E.g Abuja"}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city && errors.city ? errors.city : ""}
              />
              <InputField
                height={55}
                label={"Postal Code (Optional)"}
                name="postal_code"
                placeholder="Enter postal code"
                value={values.postal_code}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.postal_code && errors.postal_code
                    ? errors.postal_code
                    : ""
                }
              />
            </div>
          </div>
          <SaveOrCancle
            onCancel={() => {
              closeModal?.();
              console.log("CANCLE");
            }}
            isLoading={isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddShippingAddress;
