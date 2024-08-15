import Link from "next/link";
import React from "react";

type Ilogin = {
  setIsRegister: (value: boolean) => void;
  setIsAuth: (value: boolean) => void;
};
const Login: React.FC<Ilogin> = ({ setIsRegister, setIsAuth }) => {
  return (
    <div className="mt-52 w-[90%] m-auto flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-black">Login</h1>
      <div className="card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5">
        <form
          action=""
          className="w-full flex flex-col justify-start items-start gap-5"
        >
          <div className="formgroup w-full">
            <label htmlFor="firstname" className="text-xl font-black">
              Email
            </label>
            <input
              type="email"
              placeholder="enter email"
              className="w-full py-3 px-2 outline-none mt-2"
            />
          </div>
          <div className="formgroup w-full">
            <label htmlFor="firstname" className="text-xl font-black">
              Password
            </label>
            <input
              type="text"
              placeholder="enter password"
              className="w-full py-3 px-2 outline-none mt-2"
            />
          </div>
          <p>Password Strength Perfect!</p>
          {/* <div className="formgroup w-full flex justify-start items-center gap-3">
            <input
              type="checkbox"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <div className="w-full flex flex-col">
              <label htmlFor="letter">Subscribe to Newsletter</label>
              <span className="text-sm text-[#75757A]">
                Get monthly updates via email
              </span>
            </div>
          </div> */}
          {/* <div className="formgroup w-full flex justify-start items-center gap-3">
            <input
              type="checkbox"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <div className="w-full flex flex-col">
              <label htmlFor="letter">Receive Notificationr</label>
              <span className="text-sm text-[#75757A]">
                Get daily notification for promo & new product
              </span>
            </div>
          </div> */}
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              className="bg-[#FF4D4D] w-[90%] text-white py-3"
            >
              Sign in Account
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-[#191919]">
              Dont have an account?{" "}
              <span
                className="font-black cursor-pointer"
                onClick={() => {
                  setIsRegister(true);
                  setIsAuth(false);
                }}
              >
                Register
              </span>
            </p>
          </div>
          <div className="divide w-full flex justify-center items-center gap-2">
            <div className="w-[50%] border-2 border-b-[#CECECE]"></div>
            <p className="text-lg text-[#75757A]">OR</p>
            <div className="w-[50%] border-2 border-b-[#CECECE]"></div>
          </div>
          <div className="socials w-full grid grid-cols-3 gap-3">
            <div className="h-[100px] border border-[#CECECE]"></div>
            <div className="h-[100px] border border-[#CECECE]"></div>
            <div className="h-[100px] border border-[#CECECE]"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
