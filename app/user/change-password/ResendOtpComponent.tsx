import { usePost } from "@/hooks/usePosts";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ResendOtpComponent = ({ email }: { email: string }) => {
  const { data, isLoading: ldn, execute } = usePost();
  const handleResendOtp = () => {
    execute(`/users/resend-otp`, {
      email: email,
      otpType: "forgot password",
    });
  };
  return (
    <div
      onClick={handleResendOtp}
      className="flex items-center gap-4 justify-center my-2 cursor-pointer"
    >
      <p>Resent Otp</p>
      {!ldn ? (
        <Icon icon="mdi:email-resend" className="text-red-500 " />
      ) : (
        <Icon
          icon="line-md:loading-twotone-loop"
          className="text-red-500 text-3xl"
        />
      )}
    </div>
  );
};

export default ResendOtpComponent;
