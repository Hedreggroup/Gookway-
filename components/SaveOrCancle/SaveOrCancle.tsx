import React from "react";
import Button from "../Button";

const SaveOrCancle = ({ isLoading, onSave }: any) => {
  return (
    <div className="flex items-center gap-4 justify-end">
      <Button color="white" withBorder width="52" height={50} type="submit" is>
        Cancle
      </Button>
      <Button
        onClick={onSave}
        loading={isLoading}
        width="52"
        height={50}
        type="submit"
      >
        Save
      </Button>
    </div>
  );
};

export default SaveOrCancle;
