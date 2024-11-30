import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main className="my-28 pt-20">{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
