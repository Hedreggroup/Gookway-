"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Bread";
import Modal from "@/components/Modal";
import { FaBullseye } from "react-icons/fa";
import Nav from "@/components/Nav";
import axios from "axios";
import Toast from "@/components/utils/Toastify/Toast";
import Spinner from "@/components/utils/Spinner";

const page = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
    Checkout: "Checkout",
  };
  const [information, setInformation] = useState<boolean>(true);
  const [cart, setCart] = useState<any>();
  const [payment, setPayment] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const token = localStorage.getItem("catcha%$#%");
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);
  const [billingDetails, setBillingDetails] = useState<any>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const [cardNumber, setCardNumber] = useState("");
  const [csv, setCsv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardPin, setCardPin] = useState("");
  console.log(billingDetails);
  const handleFetchCarts = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    setCart(response?.data.data);
    return response?.data.data.products;
  };
  const formatCardNumber = (value: any) => {
    // Remove all non-digit characters
    const formattedValue = value.replace(/\D/g, "").substring(0, 16); // Max 16 digits
    const formattedCardNumber =
      formattedValue.match(/.{1,4}/g)?.join(" ") || "";
    return formattedCardNumber;
  };
  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setCardNumber(formatCardNumber(value));
  };
  const handleCsvInputChange = (e: any) => {
    const { value } = e.target;
    setCsv(value);
  };
  const handleExpiryDateInputChange = (e: any) => {
    const { value } = e.target;
    setExpiryDate(value);
  };
  const handleCardPinInputChange = (e: any) => {
    const { value } = e.target;
    setCardPin(value);
  };

  const handleCheckout = async () => {
    if (billingDetails.address === "") {
      return;
    }
    setLoading(true);
    const response = await axios
      .post(
        `${process.env.NEXT_PUBLIC_BASEURL}/orders/checkout/?payment_option=pg`,
        {
          shipping_address: billingDetails.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .catch((error) => {
        console.log(error);
        if (error?.response?.data.statusCode === 401) {
          setToastMessage(error?.response?.data?.msg);
        } else {
          setToastMessage(
            error?.response?.data?.data[0]?.message ||
              error?.response?.data?.msg
          );
        }
        setShowToast(true);
        setToastType("error");
        setLoading(false);
      });

    if (response) {
      const {url} = response?.data.data
      console.log(response?.data?.data); // stopped here add the token to storage and use for subsequent calls
      setToastMessage(response?.data?.data.message);
      setShowToast(true);
      setToastType("success");
      setLoading(false);
      if (url) {
        window.location.href = url; 
      }
    }
  };

  const handleFundWallet = async () => {
    if(cardPin === ""){
      return
    }
    setLoading(true)
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/transactions/generate-link`,
      {
        amount: cardPin,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    ).catch((error) => {
      console.log(error);
      if (error?.response?.data.statusCode === 401) {
        setToastMessage(error?.response?.data?.msg);
      } else {
        setToastMessage(
          error?.response?.data?.data[0]?.message ||
            error?.response?.data?.msg
        );
      }
      setShowToast(true);
      setToastType("error");
      setLoading(false);
    });
    if (response) {
      const {url} = response?.data.data
      console.log(response?.data?.data);
      setToastMessage(response?.data?.data.message);
      setShowToast(true);
      setToastType("success");
      setLoading(false);
      if (url) {
        window.location.href = url; 
      }
    }
  };

  useEffect(() => {
    handleFetchCarts();
  }, [token]);
  return (
    <>
      <Nav />
      <div className="w-[90%] m-auto pt-32">
        <Breadcrumbs items={scrumbs} />
        <h1 className="w-full flex justify-center items-center font-black text-4xl">
          Checkout
        </h1>
        <div className="submenu w-full flex justify-center items-center gap-10 pt-5">
          <p
            className={`text-lg font-bold  ${
              information
                ? "border-b-2 border-[#FF4D4D] transition-all delay-75"
                : "border-b-0"
            } cursor-pointer`}
            onClick={() => {
              setPayment(false);
              setInformation(true);
            }}
          >
            Information
          </p>
          <p className="text-lg font-bold text-[#9C9898] cursor-pointer">
            Shipping
          </p>
          <p
            className={`text-lg font-bold text-[#9C9898] ${
              payment
                ? "border-b-2 border-[#FF4D4D] transition-all delay-75"
                : "border-b-0"
            } cursor-pointer`}
            onClick={() => {
              setPayment(true);
              setInformation(false);
            }}
          >
            Fund Wallet
          </p>
        </div>
        <h1 className="text-4xl font-black text-[#191919]">Billing Details</h1>
        <div className="mains w-full grid grid-cols-2 gap-10">
          {information && (
            <div className="left w-[100%]">
              <form
                action=""
                className="w-full mt-5 flex flex-col justify-start items-start gap-5"
              >
                <div className="group1 w-full flex justify-between items-start gap-5">
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      value={billingDetails.firstName}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">Last Name</label>
                    <input
                      type="text"
                      value={billingDetails.lastName}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                </div>
                <div className="group2 w-full flex justify-between items-start gap-5 ">
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">Phone</label>
                    <input
                      type="text"
                      value={billingDetails.phone}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">Email</label>
                    <input
                      type="email"
                      value={billingDetails.email}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                </div>
                <div className="formgroup w-full">
                  <label htmlFor="firstname">Address</label>
                  <input
                    type="text"
                    value={billingDetails.address}
                    onChange={(e) =>
                      setBillingDetails((prev: any) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
                <div className="group3 flex w-full justify-start items-center gap-5">
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">Country</label>
                    <input
                      type="text"
                      value={billingDetails.country}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">State</label>
                    <input
                      type="text"
                      value={billingDetails.state}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 rounded-md px-2"
                    />
                  </div>
                </div>
                <div className="group4 w-full flex justify-start items-center gap-5">
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">City</label>
                    <input
                      type="text"
                      value={billingDetails.city}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 px-2 rounded-md"
                    />
                  </div>
                  <div className="formgroup w-[50%]">
                    <label htmlFor="firstname">Postal Code</label>
                    <input
                      type="text"
                      value={billingDetails.postalCode}
                      onChange={(e) =>
                        setBillingDetails((prev: any) => ({
                          ...prev,
                          postalCode: e.target.value,
                        }))
                      }
                      className="w-full border border-black py-3 px-2 rounded-md"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
          {payment && (
            <form
              action=""
              className="w-full mt-5 flex flex-col justify-start items-start gap-5"
            >
              {/* <div className="group1 w-full flex justify-between items-start gap-5">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Card vNumber</label>
                  <input
                    type="text"
                    value={cardNumber}
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="1234 5678 9101 1213"
                    onChange={(e) => handleInputChange(e)}
                    maxLength={19}
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => handleExpiryDateInputChange(e)}
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
              </div> */}
              <div className="group2 w-full flex justify-start items-start gap-5 mt-10 ">
                {/* <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">CVV</label>
                  <input
                    type="text"
                    value={csv}
                    onChange={(e) => handleCsvInputChange(e)}
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="123"
                    maxLength={3}
                  />
                </div> */}
                <div className="formgroup w-[60%]">
                  <label htmlFor="firstname text-xl font-bold">Amount</label>
                  <input
                    type="number"
                    value={cardPin}
                    onChange={(e) => handleCardPinInputChange(e)}
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="Enter amount here"
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-[#FF4D4D] text-white w-[40%] rounded-md py-3"
                onClick={handleFundWallet}
              >
                {loading ? (
                  <Spinner size={25} color="#000000" />
                ) : (
                  "Fund wallet"
                )}
              </button>
            </form>
          )}
          <div className="right w-[100%] min-h-[424px] bg-[#F9F9F9] p-5">
            <h1 className="text-xl font-black text-[#191919]">Order Summary</h1>
            <div className="orders w-full mt-5 flex flex-col justify-start items-center gap-5">
              {cart && cart?.items ? (
                cart?.items.map((item: any) => (
                  <div
                    className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2"
                    key={item?.product_id}
                  >
                    <p className="text-sm text-[#191919] w-[60%]">
                      {item?.product_name}
                    </p>
                    <p className="text-sm text-[#191919]">{item?.quantity}</p>
                    <p className="text-sm text-[#191919]">
                      ₦{item?.product_price}
                    </p>
                  </div>
                ))
              ) : (
                <h1>No item found</h1>
              )}
              <div className="w-full flex justify-end items-end">
                <h1 className="font-bold text-lg">Total:</h1>
                <p> ₦{cart?.total_price ?? 0}</p>
              </div>
            </div>
            <div className="button w-full flex justify-end items-center mt-5">
              <button
                type="button"
                className="bg-[#FF4D4D] text-white w-[40%] rounded-md py-3"
                onClick={() => {
                  // if(billingDetails.address !== ""){
                  //   setPayment(true);
                  //   setInformation(false);
                  // }else{
                  //   setPayment(false);
                  //   setInformation(true);
                  // }
                  handleCheckout();
                }}
              >
                {loading ? (
                  <Spinner size={25} color="#000000" />
                ) : (
                  "   Check out"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="section w-full h-[200px] my-10 bg-[#F6F6F6]"></div>
      </div>
      {modal && <Modal />}
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default page;
