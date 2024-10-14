import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main className=" ">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
