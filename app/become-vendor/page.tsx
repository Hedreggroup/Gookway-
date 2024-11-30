import React from "react";
import Layout from "../user/profile/layout";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import cartImage from "../../public/assets/cart.png";
import Button from "@/components/Button";
import Link from "next/link";

const page = () => {
  return (
    <MainLayout>
      <div className="flex items-center flex-col justify-center ">
        <h1 className="text-3xl  my-4">What to be a Vendor?</h1>
        <div className="bg-red-50 rounded-lg p-8 flex flex-col items-center justify-center min-h-72 min-w-72">
          <p>
            If you want to be a vendor you can register on our platform and send
            <br />
            us email at{" "}
            <a
              href="mailto:help@gookway.com"
              className="text-red-500 underline"
            >
              help@gookway
            </a>
          </p>
          <Image
            src={cartImage} // Path to your logo
            alt="Cart Image"
            className="-mr-2 inset-0 m-auto animate-zoom"
            width={50} // Specify the width of the logo
            height={50} // Specify the height of the logo
          />
          <Link href={"/user/register?userType=vendor"}>
            <Button
              // loading={isLoading}
              width="full"
              height={32}
              type="submit"
            >
              Register as Vendor
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default page;
