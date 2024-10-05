import React from "react";
import Button from "../Button";

const SaveOrCancle = ({ isLoading, onCancel = () => {} }: any) => {
  return (
    <div className="flex items-center gap-4 justify-end">
      <Button
        color="white"
        withBorder
        width="52"
        height={50}
        onClick={(e: any) => {
          e.preventDefault(); // Prevent default form submission
          onCancel();
        }}
      >
        Cancle
      </Button>
      <Button loading={isLoading} width="52" height={50} type="submit">
        Save
      </Button>
    </div>
  );
};

export default SaveOrCancle;
