import Button from "@/components/Button";
import CustomDropdown from "@/components/CustomDropdown";
import InputField from "@/components/InputField";
import SaveOrCancle from "@/components/SaveOrCancle/SaveOrCancle";
import { formatDropdownOptions } from "@/components/utils/formatDropdownOptions";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useFormik } from "formik";
import React, { useEffect } from "react";

import Spinner from "@/components/utils/Spinner";
import { resolve } from "path";
import SlideAnimation from "@/components/Animations/SlideAnimation";
import { deleteMemberValidationSchema } from "./add-team-member/addMemberValidation";
import { User } from "@/models/user.model";
import { useDelete } from "@/hooks/useDelete";

const DeleteTeamMember = ({
  user,
  setOpenModal,
  endpoint,
}: {
  user: User;
  setOpenModal: any;
  endpoint?: string;
}) => {
  const { data, error, isLoading, execute } = useDelete();
  const formik = useFormik({
    initialValues: {
      email: user.email,
      confirm_email: "",
    },
    validationSchema: deleteMemberValidationSchema,
    onSubmit: async (values) => {
      execute(endpoint ?? `/users/delete-vendor-user/${user._id}`, {});
    },
  });

  useEffect(() => {
    if (data) {
      setOpenModal?.(false);
      formik.resetForm();
    }
  }, [data]);
  return (
    <div className="pt-8">
      <form onSubmit={formik.handleSubmit} className="mt-2 ">
        <h3 className="font-bold text-xl">Delete Team Member</h3>
        <p className="text-gray-700 mb-4 mt-4">
          Are you sure you want to delete {user.full_name} with email{" "}
          {user.email} ?
        </p>
        <input type="hidden" name="email" value={formik.values.email} />

        <InputField
          label="Email"
          name="confirm_email"
          value={formik.values.confirm_email}
          onChange={formik.handleChange}
          error={formik.errors.confirm_email}
        />
        <SaveOrCancle
          isLoading={isLoading}
          onCancel={() => setOpenModal?.(false)}
        />
      </form>
    </div>
  );
};

export default DeleteTeamMember;
