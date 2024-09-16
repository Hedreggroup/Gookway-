// "use client";
// import Nav from "@/components/Nav";
// import ResetPassword from "@/components/ResetPassword";
// import Spinner from "@/components/utils/Spinner";
// import Toast from "@/components/utils/Toastify/Toast";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [show_toast, setShowToast] = useState(false);
//   const [show_reset_password, setShowRestPassword] = useState<boolean>(false);
//   const [toast_message, setToastMessage] = useState<string>();
//   const [toast_type, setToastType] = useState<
//     "success" | "error" | "info" | "warning"
//   >("success");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [email, setEmail] = useState<string>("");
//   let token: any;
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };
//   const handleForgotPassword = async () => {
//     try {
//       if (email === "") return;
//       setLoading(true);
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASEURL}/users/forgot-password`,
//         {
//           email: email,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       if (response) {
//         setShowRestPassword(true);
//       }
//       console.log(response); // stopped here add the token to storage and use for subsequent calls
//       setToastMessage(response?.data?.data.message);
//       setShowToast(true);
//       setToastType("success");
//       setLoading(false);
//     } catch (error: any) {
//       console.log(error);
//       if (error?.response?.data.statusCode === 401) {
//         setToastMessage(error?.response?.data?.msg);
//       } else {
//         setToastMessage(error?.response?.data?.data[0]?.message);
//       }
//       setShowToast(true);
//       setToastType("error");
//       setLoading(false);
//     }
//   };

//   // Fetch token from localStorage after component mounts
//   useEffect(() => {
//     token = localStorage.getItem("catcha%$#%");
//   }, []);
//   return (
//     <>
//       <Nav />
//       <div className="mt-[20rem] w-[90%] m-auto flex flex-col justify-center items-center gap-5">
//         <h1 className="text-4xl font-black">Forget Password</h1>
//         <div className="card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5">
//           <form
//             action=""
//             className="w-full flex flex-col justify-start items-start gap-5"
//           >
//             <div className="formgroup w-full">
//               <label htmlFor="firstname" className="text-xl font-black">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="w-full py-3 px-2 outline-none mt-2"
//               />
//             </div>
//             <div className="w-full flex justify-center items-center mt-5">
//               <button
//                 type="button"
//                 className="bg-[#FF4D4D] w-[90%] text-white py-3"
//                 onClick={handleForgotPassword}
//               >
//                 {loading ? <Spinner size={25} color="#000000" /> : "Submit"}
//               </button>
//             </div>
//           </form>
//           <div className="socials w-full grid grid-cols-3 gap-3 mt-10">
//             <div className="h-[100px] border border-[#CECECE]"></div>
//             <div className="h-[100px] border border-[#CECECE]"></div>
//             <div className="h-[100px] border border-[#CECECE]"></div>
//           </div>
//         </div>
//       </div>
//       {show_reset_password && <ResetPassword emails={email}/>}
//       {show_toast && <Toast message={toast_message} type={toast_type} />}
//     </>
//   );
// };

// export default page;
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
