import NoDataFound from "@/components/NoDataFound/NoDataFound";
import Spinner from "@/components/utils/Spinner";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import AnimatedModal from "@/components/AnimatedModal 1/AnimatedModal";
import AddShippingAddress from "./AddShippingAddress";
import { useGlobalStore } from "@/components/store/userStore";
import ShippingAddressItem from "./ShippingAddressItem";
import { usePost } from "@/hooks/usePosts";

const ShippingAddress = () => {
  // const [selectedAddress, setSelectedAddress] = useState<any>(undefined);
  const { shippingDetails, setShippingDetails } = useGlobalStore();
  const {
    data: del,
    error: delErr,
    isLoading: delLdn,
    execute,
  } = usePost<any>();

  const [showModal, setShowModal] = useState(false);

  const { data: getUser, isLoading, error, refetch } = useGet(`/users`);
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (getUser?.data) {
      setCurrentUser(getUser?.data?.user);
      if (
        currentUser?.shipping_addresses &&
        currentUser?.shipping_addresses.length > 0
      ) {
        setShippingDetails(currentUser?.shipping_addresses?.[0]);
      } else {
        setShippingDetails(undefined);
      }
    }
  }, [isLoading, getUser?.data]);
  useEffect(() => {
    refetch();
  }, [showModal, del]);
  console.log("USER", currentUser);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const deleteAddress = (e: any, index: number) => {
    console.log("HEY");

    execute("/users/delete-shipping-address", {
      index: index,
    });
  };

  console.log("SELECTED ADDRED", shippingDetails);
  return (
    <>
      <AnimatedModal openModal={showModal} setOpenModal={setShowModal}>
        <AddShippingAddress closeModal={toggleModal} />
      </AnimatedModal>

      <div className="h-auto w-full flex-1 flex items-start flex-col sm:flex-row justify-between gap-4">
        <div className="py-4 px-2 bg-red-50">
          {currentUser?.shipping_addresses?.length === 0 ? (
            <div className=" p-2 h-auto w-full flex items-center justify-center text-center">
              <NoDataFound message={"No Shipping Addresses Added"} />
            </div>
          ) : (
            <div className=" w-full flex flex-col gap-2 my-2 ">
              {currentUser?.shipping_addresses.map((address: any, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 w-full p-2 rounded-lg"
                  style={{ border: "0.8px solid red " }}
                >
                  <ShippingAddressItem
                    address={address}
                    selectedAddress={shippingDetails}
                    onClick={() => setShippingDetails(address)}
                  />
                  <Icon
                    onClick={(e) => deleteAddress(e, index)}
                    icon="ic:round-delete"
                    className="text-red-400 text-3xl cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}
          <div
            className="flex gap-4 items-center text-red-500 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <Icon icon="fluent:add-12-filled" />
            <span>Add Shipping Address</span>
          </div>
        </div>
        <div className="sm:w-2/5 w-full h-full">
          <OrderSummaryItem />
        </div>
      </div>
    </>
  );
};
export default ShippingAddress;
