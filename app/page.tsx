import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OtherBrands from "@/components/OtherBrands";
import Recommendations from "@/components/Recommendations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-auto bg-[#efedef] pt-28">
      <Banner />
      <Categories />
      <Recommendations />
      <OtherBrands />
      <Footer />
    </div>
  );
}
