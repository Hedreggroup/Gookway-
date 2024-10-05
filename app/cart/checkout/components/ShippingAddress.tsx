import NoDataFound from "@/components/NoDataFound/NoDataFound";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const ShippingAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState("1");
  const shippingAddresses: any = [];

  console.log("selectedAddress");
  console.log(selectedAddress);
  return (
    <div className="py-4  ">
      {shippingAddresses.length === 0 ? (
        <div className="bg-red-50 h-32 w-full flex items-center justify-center text-center">
          No shipping address found
        </div>
      ) : (
        <div className="w-screen flex flex-col gap-2 my-2">
          {shippingAddresses.map((address: any) => (
            <div
              key={address}
              className="flex items-center gap-2 w-full"
              onClick={() => setSelectedAddress(address)}
            >
              <Icon
                icon="fxemoji:radiobutton"
                className={`${"text-blue-200"}`}
              />
              <div className="border border-1 border-gray-100 rounded-lg p-2 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="">
                    <span className="font-medium text-xl">Arinze Chris</span>
                    <p className="text-gray-400 text-sm">+232-8323-3232</p>
                  </div>
                  <span>
                    {selectedAddress === address && (
                      <Icon icon="emojione-v1:check-mark-button" />
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-sm">No 10 Jos Road Massaksa</span>
                  <span className="text-sm">Abuja, Nigeria </span>
                  <p className="flex gap-20 text-sm">
                    Postal Code <span className="font-medium">743043 </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-4 items-center text-red-500">
        <Icon icon="fluent:add-12-filled" />
        <span>Add Shipping Address</span>
      </div>
    </div>
  );
};

export default ShippingAddress;
