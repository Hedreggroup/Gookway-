"use client";
import CustomDropdown from "@/components/CustomDropdown";
import ImageDropzone from "@/components/ImageDropzone";
import InputField from "@/components/InputField";
import NormalTextArea from "@/components/TextArea/NormalTextArea";
import TextArea from "@/components/TextArea/TextArea";
import { formatDropdownOptions } from "@/components/utils/formatDropdownOptions";
import { useGet } from "@/hooks/useGet";
import { useProductForm } from "@/hooks/useProductForm";
import { useState } from "react";
import ImagePreview from "./utils/ImagePreview";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import Toast from "@/components/utils/Toastify/Toast";
import SideToast from "@/components/utils/Toastify/SideToast";

const AddProductForm = () => {
  const { data, isLoading, error } = useGet(`/category`);

  const { formik, handleDrop, images } = useProductForm();

  const options = isLoading
    ? [{ label: "Select Category", value: "" }]
    : formatDropdownOptions(data?.data, "Select Category");

  // const handleDrop = (acceptedFiles: File[]) => {
  //   setImages(acceptedFiles);
  // };

  const handleSelect = (option: any) => {
    formik.setFieldValue("category", option.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <SaveOrCancle onSave={() => SideToast.FireSuccess({})} />
      <div className="flex md:flex-row flex-col items-start justify-between my-4 gap-4">
        <div className="bg-white p-3 rounded-xl grow shadow-sm">
          <h4 className="font-bold text-md">Information</h4>
          <InputField
            label="Product Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <TextArea
            label="Product Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
          />

          <h4 className="font-bold text-md">Category</h4>
          <CustomDropdown
            options={options}
            onSelect={handleSelect}
            error={formik.errors.category}
          />

          <hr className="my-4" />
          <h4 className="font-bold text-md">Images</h4>
          <ImageDropzone onDrop={handleDrop} />
          <ImagePreview images={images} />
          <hr className="my-4" />
          <h4 className="font-bold text-md">Price</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end justify-between">
            <InputField
              label="Product Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.errors.price}
              placeholder="Enter price"
            />
            <InputField
              label="Discount Price(%)"
              name="discountPrice"
              value={formik.values.discountPrice}
              onChange={formik.handleChange}
              error={formik.errors.discountPrice}
              type="number"
              placeholder="Percentage discount"
            />
          </div>

          <hr className="my-4" />
          <h4 className="font-bold text-md">Shipping</h4>
          <InputField
            label="Weight"
            name="weight"
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={formik.errors.weight}
            placeholder=""
          />
        </div>

        <div className="w-72 grow-0">
          <div className="bg-white p-3 shadow-sm rounded-xl w-72 grow-0 mb-4">
            <h4 className="font-bold text-md">Tags</h4>
            <InputField
              label="Add Tags"
              name="tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              placeholder="Enter tag name"
            />
          </div>

          <div className="bg-white p-3 shadow-sm rounded-xl w-72 grow-0">
            <h4 className="font-bold text-md">SEO Settings</h4>
            <h4 className="font-bold text-md">Description</h4>
            <NormalTextArea
              label="SEO Description"
              name="seoDescription"
              value={formik.values.seoDescription}
              onChange={formik.handleChange}
              rows={6}
              error={formik.errors.seoDescription}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
